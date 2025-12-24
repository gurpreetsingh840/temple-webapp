import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Events {
    events: EventData[];
}

export interface EventData {
    id: number;
    name: string;
    date: string;
    showDateVariationWarning?: boolean;
    desc: string;
    timeFrom?: string;
    timeTo?: string;
    showFullDescription?: boolean;
    location?: string;
    showCalendarDropdown?: boolean;
    isExpanded?: boolean;
}

export interface GroupedEvents {
    [key: string]: EventData[];
}

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private eventsUrl = 'assets/data/events.json'; // Adjust this path as needed

    constructor(private http: HttpClient) { }

    getEvents(): Observable<Events> {
        return this.http.get<Events>(this.eventsUrl);
    }

    getGroupedEvents(): Observable<{ groupedEvents: GroupedEvents, displayedMonths: string[] }> {
        return this.getEvents().pipe(
            map(events => this.groupEventsByMonth(events.events))
        );
    }

    private parseDate(dateString: string): Date {
        if (dateString.includes('-')) {
            const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
            return new Date(year, month - 1, day);
        }
        return new Date(`${dateString}T00:00:00Z`);
    }

    private groupEventsByMonth(events: EventData[]) {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonthIndex = now.getMonth(); // 0-based

        // Calculate previous, current, and next month indices
        const prevMonth = new Date(currentYear, currentMonthIndex - 1, 1);
        const nextMonth = new Date(currentYear, currentMonthIndex + 1, 1);

        // Helper to get month key (e.g., 'January')
        const getMonthKey = (date: Date) => date.toLocaleString('default', { month: 'long' });

        // Only include events from previous, current, and next month
        const validMonths = [getMonthKey(prevMonth), getMonthKey(now), getMonthKey(nextMonth)];

        // Filter events for these months (in current year)
        const filteredEvents = events.filter(event => {
            const eventDate = this.parseDate(event.date);
            const eventMonth = eventDate.toLocaleString('default', { month: 'long' });
            const eventYear = eventDate.getFullYear();
            return eventYear === currentYear && validMonths.includes(eventMonth);
        });

        const groupedEvents = filteredEvents.reduce((groups, event) => {
            const date = this.parseDate(event.date);
            const month = date.toLocaleString('default', { month: 'long' });
            if (!groups[month]) {
                groups[month] = [];
            }
            groups[month].push(event);
            return groups;
        }, {} as GroupedEvents);

        // Sort months chronologically (prev, current, next)
        const displayedMonths = validMonths.filter(m => groupedEvents[m]);

        // Sort events within each month
        for (const month in groupedEvents) {
            groupedEvents[month].sort((a, b) => {
                const dateA = this.parseDate(a.date);
                const dateB = this.parseDate(b.date);
                return dateA.getTime() - dateB.getTime();
            });
        }

        return { groupedEvents, displayedMonths };
    }

    getCurrentMonth(): string {
        const now = new Date();
        return now.toLocaleString('default', { month: 'long' });  // Remove year from display
    }

    formatDate(dateString: string): string {
        const date = this.parseDate(dateString);
        const month = date.toLocaleString('default', { month: 'short' }); // Gets 3-letter month
        const day = date.getDate().toString().padStart(2, '0'); // Pads single digits with 0
        return `${month} ${day}`;
    }

    getShortMonth(month: string): string {
        return month.split(' ')[0].substring(0, 3);
    }

    getMonthFromDate(dateString: string): string {
        const date = this.parseDate(dateString);
        return date.toLocaleString('default', { month: 'short' });
    }

    getDayFromDate(dateString: string): string {
        const date = this.parseDate(dateString);
        return date.getDate().toString().padStart(2, '0');
    }

    getGoogleMapsUrl(location: string): string {
        // Creates a Google Maps URL that opens directions from current location
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}&travelmode=driving`;
    }

    formatTimeRange(timeFrom?: string, timeTo?: string): string {
        if (!timeFrom && !timeTo) return '';
        if (timeFrom && !timeTo) return this.format12Hour(timeFrom);
        if (!timeFrom && timeTo) return `Until ${this.format12Hour(timeTo)}`;
        return `${this.format12Hour(timeFrom!)} - ${this.format12Hour(timeTo!)}`;
    }

    private format12Hour(time: string): string {
        try {
            const [hours, minutes] = time.split(':');
            const hour = parseInt(hours);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const hour12 = hour % 12 || 12;
            return `${hour12}${minutes ? ':' + minutes : ''} ${ampm}`;
        } catch {
            return time;
        }
    }

    generateCalendarLinks(event: EventData) {
        const startDate = this.parseDate(event.date);
        const endDate = new Date(startDate);

        if (event.timeFrom) {
            const [hours, minutes] = event.timeFrom.split(':');
            startDate.setHours(parseInt(hours), parseInt(minutes));
        }

        if (event.timeTo) {
            const [hours, minutes] = event.timeTo.split(':');
            endDate.setHours(parseInt(hours), parseInt(minutes));
        } else {
            endDate.setHours(startDate.getHours() + 1); // Default 1 hour duration
        }

        const title = encodeURIComponent(event.name);
        const description = encodeURIComponent(event.desc);
        const location = event.location ? encodeURIComponent(event.location) : '';

        // Format dates for calendar links
        const start = startDate.toISOString().replace(/-|:|\.\d+/g, '');
        const end = endDate.toISOString().replace(/-|:|\.\d+/g, '');

        return {
            google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${description}&location=${location}`,
            outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${description}&location=${location}`,
            ical: this.generateICalendarFile(event, startDate, endDate)
        };
    }

    private generateICalendarFile(event: EventData, start: Date, end: Date): string {
        const icalContent =
            `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.name}
DTSTART:${start.toISOString().replace(/-|:|\.\d+/g, '')}
DTEND:${end.toISOString().replace(/-|:|\.\d+/g, '')}
DESCRIPTION:${event.desc}
${event.location ? `LOCATION:${event.location}` : ''}
END:VEVENT
END:VCALENDAR`;

        return 'data:text/calendar;charset=utf8,' + encodeURIComponent(icalContent);
    }
}