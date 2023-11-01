import { CdkMenuModule } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../../shared/base/base.component';
import { RegionMenuComponent } from './region-menu/region-menu.component';

@Component({
  imports: [CommonModule, CdkMenuModule, LetDirective, RegionMenuComponent],
  selector: 'app-region-filter',
  standalone: true,
  styleUrls: [
    './styles/region-filter.component.css',
    `./styles/mobile.region-filter.component.css`,
    `./styles/desktop.region-filter.component.css`,
    `./styles/dark.region-filter.component.css`,
    `./styles/light.region-filter.component.css`,
  ],
  templateUrl: './region-filter.component.html',
})
export class RegionFilterComponent extends BaseComponent {
  position: ConnectedPosition[] = [
    {
      offsetY: 4,
      originX: `start`,
      originY: `bottom`,
      overlayX: `start`,
      overlayY: `top`,
    },
  ];

  imgSrc(icon: string, width: string, scheme: string) {
    return `../../../assets/images/${icon}-${width}-${scheme}.svg`;
  }
}
