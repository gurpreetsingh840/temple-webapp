import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-page-loader',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-[1px] flex items-center justify-center z-50">
            <div class="flex gap-3">
                <div class="w-4 h-4 rounded-full bg-accent-500 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                <div class="w-4 h-4 rounded-full bg-accent-500 animate-[pulse_1.5s_ease-in-out_infinite_0.4s]"></div>
                <div class="w-4 h-4 rounded-full bg-accent-500 animate-[pulse_1.5s_ease-in-out_infinite_0.6s]"></div>
            </div>
        </div>
    `
})
export class PageLoaderComponent { }
