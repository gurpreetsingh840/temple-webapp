import { Component, input } from '@angular/core';

@Component({
  selector: 'app-aurora-background',
  standalone: true,
  template: `
    <div class="aurora-mesh absolute inset-0 overflow-hidden"
      [class.aurora-prominent]="density() === 'prominent'"
      [class.aurora-medium]="density() === 'medium'">
    </div>
  `,
  styles: [`
    :host {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .aurora-prominent {
      --aurora-opacity-1: 0.18;
      --aurora-opacity-2: 0.14;
      --aurora-opacity-3: 0.10;
    }

    .aurora-medium {
      --aurora-opacity-1: 0.12;
      --aurora-opacity-2: 0.10;
      --aurora-opacity-3: 0.08;
    }
  `]
})
export class AuroraBackgroundComponent {
  density = input<'subtle' | 'medium' | 'prominent'>('subtle');
}
