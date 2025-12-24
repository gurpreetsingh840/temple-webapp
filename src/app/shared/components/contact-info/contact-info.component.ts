import { Component, inject, input } from '@angular/core';
import { AnalyticsEvent } from '../../enums/analytics-events.enum';
import { AnalyticsService } from '../../services/analytics.service ';
import { ContactInfoService } from '../../services/contact-info.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  template: `
    <div [class]="containerClass()">
      @if (showAddress()) {
        <p [class]="textClass()">{{ contactInfo.address.street }}</p>
        <p [class]="textClass()">
          {{ contactInfo.address.city }}, {{ contactInfo.address.state }}
          {{ contactInfo.address.zip }}
        </p>
      }

      @if (showPhone()) {
        <p [class]="textClass()">
          <i class="fa-solid fa-phone w-6 text-center mr-2 text-orange-600 dark:text-orange-400"></i>
          <a [href]="'tel:' + contactInfo.phone" class="link-base">
            {{ contactInfo.phone }}
          </a>
        </p>
      }

      @if (showEmail()) {
        <p [class]="textClass()">
          <i class="fa-solid fa-envelope w-6 text-center mr-2 text-orange-600 dark:text-orange-400"></i>
          <a [href]="'mailto:' + contactInfo.email" class="link-base">
            {{ contactInfo.email }}
          </a>
        </p>
      }

      @if (showDirections()) {
        <a [href]="contactInfo.getMapsUrl()"
           target="_blank"
           rel="noopener noreferrer"
           [class]="directionsClass()"
           (click)="trackDirections()">
          <i class="fa-solid fa-location-dot w-6 text-center mr-2"></i>
          Get Directions
        </a>
      }
    </div>
  `,
})
export class ContactInfoComponent {
  // Modern Angular 21 input() function
  showAddress = input<boolean>(true);
  showPhone = input<boolean>(true);
  showEmail = input<boolean>(true);
  showDirections = input<boolean>(true);
  containerClass = input<string>('');
  textClass = input<string>('mb-2 text-gray-600 dark:text-gray-300');
  directionsClass = input<string>(
    'inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-200'
  );

  // Inject services using modern inject() function
  public contactInfo = inject(ContactInfoService);
  private analytics = inject(AnalyticsService);

  trackDirections() {
    this.analytics.trackEvent(AnalyticsEvent.GET_DIRECTIONS, {});
  }
}
