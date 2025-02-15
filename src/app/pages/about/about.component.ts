import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="About Our Gurdwara Sahib"
      description="Welcome to Gurdwara Singh Sabha Richmond - a place of worship, learning, and community service."
      icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />

    <div class="page-container">
      <div class="max-w-5xl mx-auto">
        <!-- What is Gurdwara -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">What is Gurdwara Sahib?</h2>
          </div>
          <div class="p-6">
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Gurdwara (the door or the gateway to the Guru) is the Sikh place of worship and center of the Sikh community. The word 'Gurdwara' is composed of two words: 'Guru' (spiritual guide) and 'dwara' (gateway or seat), together meaning 'the gateway to the Guru.'
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                In every Gurdwara, the Guru Granth Sahib (the holy scripture and eternal Guru of the Sikhs) is placed on a high palanquin under a canopy in the middle of one end of the main hall. The congregation sits on the floor as a sign of equality, regardless of social status or position.
              </p>
              <div class="mt-6 grid sm:grid-cols-2 gap-4">
                <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                    <i class="fa-solid fa-building-columns text-orange-600 dark:text-orange-400 mr-2"></i>
                    Key Features
                  </h3>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                      Nishan Sahib (Sikh flag) at entrance
                    </li>
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                      Darbar Sahib (main prayer hall)
                    </li>
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                      Langar Hall (community kitchen)
                    </li>
                  </ul>
                </div>

                <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                    <i class="fa-solid fa-hand-holding-heart text-orange-600 dark:text-orange-400 mr-2"></i>
                    Core Values
                  </h3>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                      Equality of all people
                    </li>
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                      Service to humanity
                    </li>
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                      Universal brotherhood
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                The Gurdwara serves multiple purposes: it's a place of worship, a community center, a school for children to learn Sikh history and philosophy, and a place where free meals (langar) are served to all visitors regardless of their faith, background, or status. It embodies the core Sikh principles of equality, community service, and spiritual growth.
              </p>
            </div>
          </div>
        </div>

        <!-- Core Functions -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-hands-holding-circle text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Core Functions</h2>
          </div>
          <div class="p-6">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-heart text-orange-600 dark:text-orange-400 mr-2"></i>
                  Spiritual Center
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Daily Prayers & Kirtan
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Religious Ceremonies
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Spiritual Guidance
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-users text-orange-600 dark:text-orange-400 mr-2"></i>
                  Community Hub
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Cultural Programs
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Educational Activities
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Community Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Visiting Guidelines -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Visiting Guidelines</h2>
          </div>
          <div class="p-6">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-circle-info text-orange-600 dark:text-orange-400 mr-2"></i>
                  Basic Protocol
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Remove shoes before entering
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Cover head with provided scarves
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Wash hands before entering
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-ban text-orange-600 dark:text-orange-400 mr-2"></i>
                  Important Notes
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    No tobacco or alcohol
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Maintain silence in hall
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Show respect to Guru Granth Sahib
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
