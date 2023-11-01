import { CdkMenuModule } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';
import { RegionMenuComponent } from './region-menu/region-menu.component';

@Component({
  imports: [
    CommonModule,
    CdkMenuModule,
    LetDirective,
    BaseComponent,
    RegionMenuComponent,
  ],
  selector: 'app-filter-form',
  standalone: true,
  styleUrls: [
    './styles/filter-form.component.css',
    `./styles/mobile.filter-form.component.css`,
    `./styles/desktop.filter-form.component.css`,
    `./styles/dark.filter-form.component.css`,
    `./styles/light.filter-form.component.css`,
  ],
  templateUrl: './filter-form.component.html',
})
export class FilterFormComponent extends BaseComponent {
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
