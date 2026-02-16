import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('khandaLogo', { static: false }) khandaLogo!: ElementRef<HTMLImageElement>;

  ngOnInit() {
    // Set up scroll animations
    this.setupScrollAnimations();
  }

  ngAfterViewInit() {
    if (this.khandaLogo) {
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.khandaLogo.nativeElement.classList.add('khanda-animate-in');
              observer.disconnect();
            }
          });
        }, { threshold: 0.5 });
        observer.observe(this.khandaLogo.nativeElement);
      }, 1350);
    }
  }

  setupScrollAnimations() {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      }, { threshold: 0.1 });

      // Observe all animated elements after a short delay to ensure DOM is ready
      setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.observe(el);
        });
      }, 100);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}