// src/app/app.component.ts
import { Component, HostBinding, HostListener, OnInit, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { TEMPLE_NAME } from './app.routes';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AnalyticsEvent } from './shared/enums/analytics-events.enum';
import { AnalyticsService } from './shared/services/analytics.service ';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen overflow-x-hidden">
      <app-header [darkMode]="darkMode()" (toggleDarkMode)="toggleDarkMode()" />
      <!-- Scroll progress indicator (motion-design-skill: Premium ambient) -->
      <div class="fixed top-20 left-0 right-0 h-0.5 z-50 bg-white/20 dark:bg-black/20">
        <div
          class="h-full bg-gradient-to-r from-accent-400 to-accent-500 transition-all duration-100 ease-out"
          [style.width.%]="scrollProgress() * 100"
        ></div>
      </div>
      <main class="flex-grow relative">
        <!-- Previous page placeholder -->
        @if (isNavigating) {
          <div 
            class="absolute inset-0 z-10"
            [class.animate-slide-out]="isNavigating">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/10 to-slate-100/20 dark:via-slate-900/10 dark:to-slate-900/20"></div>
          </div>
        }
        
        <!-- Current page content -->
        <div 
          class="relative"
          [class.animate-slide-in]="isNavigating">
          <router-outlet />
        </div>
      </main>
      <app-footer />

      <!-- Scroll to top button -->
      @if (showScrollTop) {
        <button
          (click)="scrollToTop()"
          class="fixed bottom-6 right-6 p-3 rounded-full bg-accent-500 text-white shadow-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      }
    </div>
  `,
  styles: [`
    .animate-slide-out {
      animation: slideOut 300ms ease-in-out forwards;
    }
    
    .animate-slide-in {
      animation: slideIn 300ms ease-in-out forwards;
    }
    
    @keyframes slideOut {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-20px);
        opacity: 0;
      }
    }
    
    @keyframes slideIn {
      0% {
        transform: translateX(20px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    :host {
      display: block;
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  `]
})
export class AppComponent implements OnInit {
  // Inject dependencies using modern inject() function
  private router = inject(Router);
  private titleService = inject(Title);
  private analytics = inject(AnalyticsService);

  isNavigating = false;
  showScrollTop = false;
  scrollProgress = signal(0);

  public darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? String(window.matchMedia('(prefers-color-scheme: dark)').matches))
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 200;
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(Math.min(scrolled / max, 1));
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() {
    effect(() => {
      const mode = this.darkMode();
      window.localStorage.setItem('darkMode', JSON.stringify(mode));
      this.analytics.trackEvent(AnalyticsEvent.THEME_CHANGE, {
        mode: mode ? 'dark' : 'light',
        source: 'user_preference'
      });
    });
  }

  /**
   * Get the title of the current page.
   */
  ngOnInit() {
    // Handle navigation animations
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isNavigating = false;
        }, 300); // Match the animation duration
      }
    });

    // Handle title updates
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const title = this.getTitle(this.router.routerState.root);
      const finalTitle = title ? `${title}` : TEMPLE_NAME;
      this.titleService.setTitle(finalTitle);
      this.analytics.trackPageView(event.urlAfterRedirects, title);
    });
  }

  /**
   * Get the title of the route.
   * @param route - The route to get the title from.
   */
  private getTitle(route: any): string | undefined {
    const data = route.snapshot.data;
    const children = route.children;

    if (data?.title) {
      return data.title;
    }

    for (const child of children) {
      const title = this.getTitle(child);
      if (title) return title;
    }

    return undefined;
  }

  /**
   * Toggle dark mode.
   */
  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}