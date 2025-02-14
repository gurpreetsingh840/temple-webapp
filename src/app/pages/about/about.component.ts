import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="About Us"
      description="Learn about our Gurdwara's history, mission, and the values that guide our community."
      icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />

    <!-- Rest of the content -->
  `
})
export class AboutComponent {}
