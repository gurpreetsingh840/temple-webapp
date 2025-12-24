import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('khandaLogo', { static: false }) khandaLogo!: ElementRef<HTMLImageElement>;

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
      }, 1350); // 350ms delay to allow for loader and rendering
    }
  }
}