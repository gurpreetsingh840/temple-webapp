import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ContactInfoService } from '../../shared/services/contact-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-religious-services',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="Religious Services"
      description="Experience the divine through our various religious services and ceremonies. Connect with the teachings of Guru Granth Sahib Ji."
      icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />

    <div class="page-container">
      <div class="max-w-5xl mx-auto">
        <!-- Akhand Path -->
        <div id="akhand-path" class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Akhand Path</h2>
          </div>
          
          <div class="p-6">
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Akhand Path (akhand = uninterrupted, without break; path = reading) is a non-stop, continuous recital of the Guru Granth Sahib from beginning to end. The entire Holy Volume of 1430 pages must be read through in a continuous ceremony within 48 hours, without a moment's intermission.
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                The relay of reciters takes turns at reciting Scripture, ensuring no break occurs. As they change places at given intervals, one picks the line from their predecessor's lips and continues. This tradition originated during the turbulent days of the eighteenth century when persecution had scattered the Sikhs to far-off places.
              </p>
            </div>

            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-clock text-orange-600 dark:text-orange-400 mr-2"></i>
                  Ceremony Details
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    48-hour continuous reading
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Complete recital of Sri Guru Granth Sahib Ji
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Relay of readers ensures continuity
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-list-check text-orange-600 dark:text-orange-400 mr-2"></i>
                  Booking Information
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Advance reservation required
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Langar seva arrangements available
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Special occasions and remembrances
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Sehaj Path -->
        <div id="sehaj-path" class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Sehaj Path</h2>
          </div>
          
          <div class="p-6">
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sehaj Path is a recitation of Guru Granth Sahib from beginning to end, but unlike Akhand Path, it doesn't have to be continuous. A person or group of persons can read the holy text according to their schedule and complete the reading of Guru Granth Sahib at their own pace.
              </p>
            </div>

            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-book-open text-orange-600 dark:text-orange-400 mr-2"></i>
                  Reading Details
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Flexible reading schedule
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Individual or group readings
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Complete reading at your own pace
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-list-check text-orange-600 dark:text-orange-400 mr-2"></i>
                  Service Options
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Available at Gurdwara or home
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Bhog ceremony arrangements
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Guidance available if needed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Sukhmani Sahib -->
        <div id="sukhmani-sahib" class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Sukhmani Sahib</h2>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-300">
              Sukhmani Sahib Path is a prayer composed by Sri Guru Arjan Dev Ji, known as the "Pearl of Peace." This beautiful composition consists of 24 Ashtpadis and brings peace to the mind and solace to the heart.
            </p>
            <div class="mt-6 p-4 bg-orange-50 dark:bg-gray-700 rounded-lg">
              <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Service Information
              </h3>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Duration: Approximately 2 hours</li>
                <li>Available for special occasions</li>
                <li>Group or individual readings</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Anand Karaj -->
        <div id="anand-karaj" class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Anand Karaj</h2>
          </div>
          
          <div class="p-6">
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Anand Karaj is the Sikh marriage ceremony, meaning "Blissful Union". The ceremony takes place in the presence of Guru Granth Sahib Ji. During the ceremony, the couple circles Guru Granth Sahib Ji four times while the Lavan (four hymns of marriage) are being read.
              </p>
            </div>

            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-heart text-orange-600 dark:text-orange-400 mr-2"></i>
                  Ceremony Details
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Traditional Sikh wedding ceremony
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Four Lavan hymns recitation
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Conducted in presence of Guru Granth Sahib Ji
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-list-check text-orange-600 dark:text-orange-400 mr-2"></i>
                  Requirements
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Advance booking required
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Pre-marriage counseling available
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Documentation requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Antim Ardas -->
        <div id="antim-ardas" class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Antim Ardas</h2>
          </div>
          
          <div class="p-6">
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Antim Ardas is the final prayer service that marks the end of the mourning period. It includes the reading of Guru Granth Sahib Ji and the performance of the final Ardas, offering prayers for the departed soul and comfort to the family.
              </p>
            </div>

            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-pray text-orange-600 dark:text-orange-400 mr-2"></i>
                  Service Details
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Final prayer ceremony
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Reading of Guru Granth Sahib Ji
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Ardas for departed soul
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-hands-helping text-orange-600 dark:text-orange-400 mr-2"></i>
                  Support Services
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Guidance through ceremony
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Langar arrangements
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Family support services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="card mb-8">
          <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-6 text-center">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Book a Service
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              For more information or to schedule any of these services, please contact us:
            </p>
            <div class="space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                <i class="fa-solid fa-phone mr-2"></i>
                <a [href]="'tel:' + contactInfo.phone" 
                   class="hover:text-orange-600 dark:hover:text-orange-400">
                  {{ contactInfo.phone }}
                </a>
              </p>
              <p>
                <i class="fa-solid fa-envelope mr-2"></i>
                <a [href]="'mailto:' + contactInfo.email" 
                   class="hover:text-orange-600 dark:hover:text-orange-400">
                  {{ contactInfo.email }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .heading-2 {
      @apply text-2xl font-bold tracking-tight;
    }
  `]
})
export class ReligiousServicesComponent implements AfterViewInit {
  constructor(public contactInfo: ContactInfoService, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    // Handle fragment navigation after view init
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
} 