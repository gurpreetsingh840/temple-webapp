import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroBannerComponent, ContactInfoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('sectionReveal') sections!: QueryList<ElementRef>;
  @ViewChildren('statEl') statElements!: QueryList<ElementRef>;

  scrollProgress = signal(0);

  stats: Stat[] = [
    { value: 25, suffix: '+', label: 'Years of Service' },
    { value: 3, suffix: '', label: 'Weekly Programs' },
    { value: 500, suffix: '+', label: 'Community Members' },
    { value: 1000, suffix: '+', label: 'Langar Meals Served' },
  ];

  testimonials: Testimonial[] = [
    { text: 'This Gurudwara has been a spiritual home for our family for generations. The community here is truly welcoming.', author: 'Harpreet K.', role: 'Community Member' },
    { text: 'The Sunday Deewan services are incredibly uplifting. I find peace and guidance every time I visit.', author: 'Amandeep S.', role: 'Regular Attendee' },
    { text: 'The Khalsa School program has been wonderful for my children. They\'ve learned so much about Sikh values.', author: 'Rajveer K.', role: 'Parent' },
    { text: 'I found my spiritual path here. The Gurus\' teachings come alive through the Kirtan and Katha.', author: 'Gurleen K.', role: 'Youth Member' },
  ];

  activeTestimonial = signal(0);
  testimonialInterval: any;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.sections.forEach(el => observer.observe(el.nativeElement));
    this.initTestimonialCarousel();
  }

  nextTestimonial() {
    this.activeTestimonial.update(i => (i + 1) % this.testimonials.length);
  }

  prevTestimonial() {
    this.activeTestimonial.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  selectTestimonial(index: number) {
    this.activeTestimonial.set(index);
    this.resetTestimonialInterval();
  }

  private initTestimonialCarousel() {
    this.testimonialInterval = setInterval(() => this.nextTestimonial(), 5000);
  }

  private resetTestimonialInterval() {
    clearInterval(this.testimonialInterval);
    this.initTestimonialCarousel();
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(Math.min(scrolled / max, 1));
  }
}
