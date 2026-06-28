import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuroraBackgroundComponent } from '../aurora-background/aurora-background.component';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [RouterLink, AuroraBackgroundComponent],
  template: `
    <section #heroSection class="hero-section flex items-center justify-center">
      <app-aurora-background density="medium" />

      <!-- Animated geometric grid layers with mouse parallax -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"
        [style.transform]="'translate3d(' + gridOffsetX() + 'px, ' + gridOffsetY() + 'px, 0)'">
        <div class="absolute inset-0 geometric-grid grid-primary"
          [style.transform]="'translate3d(' + gridOffsetX() * -0.3 + 'px, ' + gridOffsetY() * -0.3 + 'px, 0)'">
        </div>
        <div class="absolute inset-0 geometric-grid grid-secondary"
          [style.transform]="'translate3d(' + gridOffsetX() * 0.5 + 'px, ' + gridOffsetY() * 0.5 + 'px, 0)'">
        </div>
        <div class="absolute inset-0 geometric-grid grid-diagonal"
          [style.transform]="'translate3d(' + gridOffsetX() * -0.7 + 'px, ' + gridOffsetY() * -0.7 + 'px, 0)'">
        </div>
        <!-- Traveling spotlight: same grid pattern with bright lines, revealed by mask -->
        <div class="absolute inset-0 grid-wave-highlight grid-primary-highlight"></div>
      </div>

      <div class="absolute inset-0 bg-cover bg-center opacity-[0.06] dark:opacity-[0.04]" [style.background-image]="'url(assets/home_back_ground.jpeg)'" aria-hidden="true"></div>

      <div class="relative z-10 container mx-auto px-4 py-12 md:py-16 flex flex-col items-center text-center">
        <div class="stagger-item stagger-1 mb-4 md:mb-6">
          <div class="khanda-wrapper">
            <img src="assets/khanda.svg" alt="Khanda Symbol" class="khanda-logo h-24 w-24 md:h-32 md:w-32" aria-hidden="true">
          </div>
        </div>

        <h1 class="stagger-item stagger-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-800 dark:text-cream-50 leading-tight mb-3 text-balance max-w-4xl">
          {{ title() }}
        </h1>

        <p class="stagger-item stagger-3 text-lg md:text-xl text-primary-700 dark:text-primary-300 max-w-2xl mb-6 leading-relaxed">
          {{ subtitle() }}
        </p>

        @if (showCtas()) {
          <div class="stagger-item stagger-4 flex flex-wrap justify-center gap-4">
            <a routerLink="/services/weekly-programs" class="btn-primary inline-flex items-center gap-2 cursor-pointer">
              <i class="fa-solid fa-calendar-days"></i>
              Weekly Programs
            </a>
            <a routerLink="/about" class="btn-outline border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white inline-flex items-center gap-2 cursor-pointer">
              Learn More
              <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        }
      </div>

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 stagger-item stagger-scroll">
        <span class="text-primary-400 dark:text-primary-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div class="w-5 h-8 border-2 border-primary-300 dark:border-primary-500 rounded-full flex justify-center">
          <div class="w-1 h-2 bg-accent-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream-50 dark:from-primary-900 to-transparent pointer-events-none"></div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .khanda-wrapper {
      filter: drop-shadow(0 0 40px rgba(255, 153, 51, 0.5)) drop-shadow(0 0 20px rgba(255, 179, 71, 0.3));
      animation: khanda-float 4s ease-in-out infinite;
      animation-delay: 800ms;
    }

    /* ===== Animated Geometric Grid System ===== */
    .geometric-grid {
      will-change: transform;
    }

    .grid-primary {
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 59px,
          rgba(108, 76, 30, 0.25) 59px,
          rgba(108, 76, 30, 0.25) 60px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 59px,
          rgba(108, 76, 30, 0.25) 59px,
          rgba(108, 76, 30, 0.25) 60px
        );
      animation: grid-drift-h 30s linear infinite alternate;
    }

    .dark .grid-primary {
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 59px,
          rgba(212, 168, 83, 0.12) 59px,
          rgba(212, 168, 83, 0.12) 60px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 59px,
          rgba(212, 168, 83, 0.12) 59px,
          rgba(212, 168, 83, 0.12) 60px
        );
    }

    .grid-secondary {
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 119px,
          rgba(15, 23, 42, 0.1) 119px,
          rgba(15, 23, 42, 0.1) 120px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 119px,
          rgba(15, 23, 42, 0.1) 119px,
          rgba(15, 23, 42, 0.1) 120px
        );
      animation: grid-drift-v 25s linear infinite alternate;
      transform-origin: center;
    }

    .dark .grid-secondary {
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 119px,
          rgba(148, 163, 184, 0.06) 119px,
          rgba(148, 163, 184, 0.06) 120px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 119px,
          rgba(148, 163, 184, 0.06) 119px,
          rgba(148, 163, 184, 0.06) 120px
        );
    }

    .grid-diagonal {
      background-image:
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 79px,
          rgba(108, 76, 30, 0.15) 79px,
          rgba(108, 76, 30, 0.15) 80px
        ),
        repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 79px,
          rgba(108, 76, 30, 0.15) 79px,
          rgba(108, 76, 30, 0.15) 80px
        );
      animation: grid-diagonal-drift 35s linear infinite alternate;
      transform-origin: 50% 50%;
    }

    .dark .grid-diagonal {
      background-image:
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 79px,
          rgba(255, 179, 71, 0.06) 79px,
          rgba(255, 179, 71, 0.06) 80px
        ),
        repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 79px,
          rgba(255, 179, 71, 0.06) 79px,
          rgba(255, 179, 71, 0.06) 80px
        );
    }

    /* Traveling spotlight: brightens grid lines like reflectors passing light */
    .grid-wave-highlight {
      pointer-events: none;
      mask-image: radial-gradient(circle 450px, white 0%, transparent 65%);
      -webkit-mask-image: radial-gradient(circle 450px, white 0%, transparent 65%);
      mask-size: 300% 300%;
      -webkit-mask-size: 300% 300%;

      animation: wave-sweep 20s ease-in-out infinite;
    }

    .grid-primary-highlight {
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 59px,
          rgba(255, 153, 51, 0.85) 59px,
          rgba(255, 153, 51, 0.85) 60px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 59px,
          rgba(255, 153, 51, 0.85) 59px,
          rgba(255, 153, 51, 0.85) 60px
        );
      filter: drop-shadow(0 0 8px rgba(255, 153, 51, 0.5));
    }

    .dark .grid-primary-highlight {
      background-image:
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 59px,
          rgba(255, 179, 71, 0.5) 59px,
          rgba(255, 179, 71, 0.5) 60px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 59px,
          rgba(255, 179, 71, 0.5) 59px,
          rgba(255, 179, 71, 0.5) 60px
        );
      filter: drop-shadow(0 0 6px rgba(255, 179, 71, 0.4));
    }

    @keyframes wave-sweep {
      0%   { mask-position: 20% 30%; }
      25%  { mask-position: 80% 30%; }
      50%  { mask-position: 50% 80%; }
      75%  { mask-position: 20% 70%; }
      100% { mask-position: 80% 70%; }
    }

    @keyframes grid-drift-h {
      0%   { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-30px, 10px, 0); }
    }

    @keyframes grid-drift-v {
      0%   { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(15px, -25px, 0); }
    }

    @keyframes grid-diagonal-drift {
      0%   { transform: rotate(0deg) scale(1); }
      50%  { transform: rotate(1.5deg) scale(1.02); }
      100% { transform: rotate(-1deg) scale(0.98); }
    }

    /* Premium stagger entrance */
    .stagger-item {
      opacity: 0;
      transform: translateY(24px);
    }

    .stagger-1 { animation: hero-enter 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms forwards; }
    .stagger-2 { animation: hero-enter 500ms cubic-bezier(0.4, 0, 0.2, 1) 500ms forwards; }
    .stagger-3 { animation: hero-enter 450ms cubic-bezier(0.4, 0, 0.2, 1) 700ms forwards; }
    .stagger-4 { animation: hero-enter 400ms cubic-bezier(0.4, 0, 0.2, 1) 850ms forwards; }
    .stagger-scroll { animation: hero-enter 500ms cubic-bezier(0.4, 0, 0.2, 1) 1200ms forwards; }

    @keyframes khanda-float {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-8px); }
    }

    @keyframes hero-enter {
      0%   { opacity: 0; transform: translateY(24px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @media (prefers-reduced-motion: reduce) {
      .khanda-wrapper,
      .grid-wave-highlight,
      .geometric-grid,
      .grid-primary, .grid-secondary, .grid-diagonal {
        animation: none;
      }
      .stagger-item {
        opacity: 1;
        transform: none;
        animation: none;
      }
    }
  `]
})
export class HeroBannerComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
  showCtas = input(true);

  private el = inject(ElementRef);

  gridOffsetX = signal(0);
  gridOffsetY = signal(0);

  private targetX = 0;
  private targetY = 0;
  private rafId: number | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    this.targetX = (e.clientX - centerX) * 0.04;
    this.targetY = (e.clientY - centerY) * 0.04;
    this.targetX = Math.max(-15, Math.min(15, this.targetX));
    this.targetY = Math.max(-15, Math.min(15, this.targetY));
    this.startSmoothInterpolation();
  }

  private startSmoothInterpolation() {
    if (this.rafId) return;
    const step = () => {
      const currentX = this.gridOffsetX();
      const currentY = this.gridOffsetY();
      const dx = this.targetX - currentX;
      const dy = this.targetY - currentY;
      if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
        this.gridOffsetX.set(this.targetX);
        this.gridOffsetY.set(this.targetY);
        this.rafId = null;
        return;
      }
      this.gridOffsetX.set(currentX + dx * 0.12);
      this.gridOffsetY.set(currentY + dy * 0.12);
      this.rafId = requestAnimationFrame(step);
    };
    this.rafId = requestAnimationFrame(step);
  }
}
