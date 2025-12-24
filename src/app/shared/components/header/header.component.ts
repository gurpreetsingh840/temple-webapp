// src/app/header/header.component.ts
import { Component, OnInit, inject, input, output, signal } from '@angular/core';
import { Event, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Banner, BannerService } from '../../services/banner.service';
import { BannerComponent } from '../banner/banner.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

interface MenuItem {
  path: string;
  label: string;
  icon?: string;  // SVG path
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ContactInfoComponent,
    BannerComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Modern Angular 21 input/output
  darkMode = input<boolean>(false);
  toggleDarkMode = output<void>();
  
  // Inject dependencies using modern inject() function
  private router = inject(Router);
  private bannerService = inject(BannerService);
  // Use signals for reactive state
  menuItems: MenuItem[] = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/services/religious-services',
      label: 'Services',
      children: [
        { path: '/services/akhand-path', label: 'Akhand Path' },
        { path: '/services/sehaj-path', label: 'Sehaj Path' },
        { path: '/services/sukhmani-sahib', label: 'Sukhmani Sahib' },
        { path: '/services/anand-karaj', label: 'Anand Karaj' },
        { path: '/services/antim-ardas-ceremony', label: 'Antim Ardas' }
      ]
    },
    { path: '/services/weekly-programs', label: 'Programs' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  isMenuOpen = signal(false);
  banners = signal<Banner[]>([]);

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
      this.isMenuOpen.set(false);
    });

    this.bannerService.getBanners().subscribe(banners => {
      this.banners.set(banners);
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
    this.isMenuOpen.set(false);
  }

  navigateWithFragment(path: string) {
    const [route, fragment] = path.split('#');
    this.router.navigate([route], { fragment }).then(() => {
      this.isMenuOpen.set(false);

      if (this.router.url.startsWith(route) && fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    });
  }
}