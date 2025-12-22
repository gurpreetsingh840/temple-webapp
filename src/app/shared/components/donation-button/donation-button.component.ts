import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsEvent } from '../../enums/analytics-events.enum';
import { DonationSettings } from '../../models/app-settings.model';
import { AnalyticsService } from '../../services/analytics.service ';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
    selector: 'app-donation-button',
    templateUrl: './donation-button.component.html',
    imports: [RouterLink],
    standalone: true
})
export class DonationButtonComponent {
    // Modern Angular 21 input() function
    buttonClass = input<string>('');
    context = input<'default' | 'contact' | 'footer'>('default');
    showTitle = input<boolean>(true);
    
    // Inject services using modern inject() function
    private appSettingsService = inject(AppSettingsService);
    private analytics = inject(AnalyticsService);

    supportMessages = {
        default: {
            title: 'Support Our Mission',
            description: 'Your generous contributions help us maintain our religious services and expand our community programs.'
        },
        contact: {
            title: 'Make a Contribution',
            description: 'Support our religious services, educational programs, and community initiatives by making a direct contribution. Our Sewadar-in-Chief or Head Granthi will be happy to assist you.'
        },
        footer: {
            title: 'Support Us',
            description: 'Help us serve the community better through your generous contributions.'
        }
    };

    contactMessage = "For donations and contributions, please contact our management team. We'll be happy to assist you with the process.";

    donationSettings: DonationSettings;

    constructor() {
        this.donationSettings = this.appSettingsService.getDonationSettings();
    }

    getSupportMessage() {
        const ctx = this.context();
        return this.supportMessages[ctx] || this.supportMessages.default;
    }

    openDonationLink(paypalLink: string): void {
        window.open(paypalLink, '_blank');
    }

    /**
     * * Track the donation button click event for analytics.
     */
    trackContactManagement(): void {
        this.analytics.trackEvent(AnalyticsEvent.CONTACT_MANAGEMENT, {
            category: 'Donation'
        });
    }
}
