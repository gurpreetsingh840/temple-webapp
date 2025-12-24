import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { PageLoaderComponent } from '../../shared/components/page-loader/page-loader.component';
import { EventData, EventsService, GroupedEvents } from './events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    imports: [CommonModule, PageHeroComponent, PageLoaderComponent],
    standalone: true
})
export class EventsComponent implements OnInit, AfterViewInit, OnDestroy {
    events: EventData[] = [];
    groupedEvents: GroupedEvents = {};
    displayedMonths: string[] = [];
    currentMonth: string = '';
    currentYear: string = new Date().getFullYear().toString();
    private observer: IntersectionObserver | null = null;
    isLoading = true;

    readonly CHAR_LIMIT = 250;
    readonly MOBILE_CHAR_LIMIT = 150;

    constructor(protected eventsService: EventsService, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.eventsService.getGroupedEvents().subscribe({
            next: ({ groupedEvents, displayedMonths }) => {
                this.groupedEvents = groupedEvents;
                this.displayedMonths = displayedMonths;
                this.currentMonth = this.eventsService.getCurrentMonth();
                this.isLoading = false;
                this.cdr.detectChanges();
            },
            error: () => {
                this.isLoading = false;
                this.cdr.detectChanges();
            }
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            // Only run scroll/observer if not loading
            if (!this.isLoading) {
                this.scrollToMonth(this.currentMonth);
                this.setupIntersectionObserver();
            }
        }, 100);
    }

    private setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const monthId = entry.target.id?.replace('month-', '').replace('-', ' ');
                    if (monthId) {
                        this.currentMonth = monthId;
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0% 0px -70% 0px'
        });

        // Observe all month sections
        document.querySelectorAll('[id^="month-"]').forEach(
            element => this.observer?.observe(element)
        );
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    getFormattedDate(dateString: string): string {
        return this.eventsService.formatDate(dateString);
    }

    getShortMonth(month: string): string {
        return this.eventsService.getShortMonth(month);
    }

    getMonthFromDate(dateString: string): string {
        return this.eventsService.getMonthFromDate(dateString);
    }

    getDayFromDate(dateString: string): string {
        return this.eventsService.getDayFromDate(dateString);
    }

    scrollToMonth(month: string) {
        const element = document.getElementById(`month-${month.replace(' ', '-')}`);
        if (element) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    getGoogleMapsUrl(location: string): string {
        return this.eventsService.getGoogleMapsUrl(location);
    }

    @HostListener('document:click', ['$event'])
    clickOutside(evt: MouseEvent) {
        // Close all calendar dropdowns when clicking outside
        for (let month in this.groupedEvents) {
            this.groupedEvents[month].forEach(event => {
                if (event.showCalendarDropdown) {
                    const target = evt.target as HTMLElement;
                    if (!target?.closest('.calendar-dropdown')) {
                        event.showCalendarDropdown = false;
                    }
                }
            });
        }
    }

    toggleCalendarDropdown(event: EventData) {
        // Close other dropdowns
        for (let month in this.groupedEvents) {
            this.groupedEvents[month].forEach(e => {
                if (e !== event) e.showCalendarDropdown = false;
            });
        }
        event.showCalendarDropdown = !event.showCalendarDropdown;
    }

    getCalendarLinks(event: EventData) {
        return this.eventsService.generateCalendarLinks(event);
    }

    shouldTruncate(text: string): boolean {
        const limit = this.isMobileView() ? this.MOBILE_CHAR_LIMIT : this.CHAR_LIMIT;
        return text.length > limit;
    }

    getTruncatedText(text: string): string {
        const limit = this.isMobileView() ? this.MOBILE_CHAR_LIMIT : this.CHAR_LIMIT;
        if (text.length <= limit) return text;
        return text.slice(0, limit) + '...';
    }

    toggleExpand(event: EventData): void {
        event.isExpanded = !event.isExpanded;
    }

    private isMobileView(): boolean {
        return window.innerWidth < 768; // md breakpoint in Tailwind
    }
}

