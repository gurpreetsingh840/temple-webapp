import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-gradient-to-br from-primary-700 via-primary-700 to-primary-800 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-16 text-center">
          <!-- Title Section -->
          <div class="space-y-6">
            <!-- Icon -->
            <div class="flex justify-center">
              <div class="rounded-full bg-white/10 backdrop-blur-sm dark:bg-slate-700/20 p-3">
                <div class="rounded-full bg-white/20 dark:bg-slate-600/30 p-2">
                  <svg class="h-8 w-8 text-white/90 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="icon()"/>
                  </svg>
                </div>
              </div>
            </div>

            <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {{ title() }}
            </h1>
            
            <!-- Description -->
            <p class="text-lg text-white/80 dark:text-slate-200/90 max-w-2xl mx-auto">
              {{ description() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PageHeroComponent {
  // Modern Angular 21 input() function
  title = input<string>('');
  description = input<string>('');
  icon = input<string>('');
}