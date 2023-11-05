import { CdkMenuModule } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../../shared/base/base.component';
import { RegionMenuComponent } from './region-menu/region-menu.component';
import * as IndexSelectors from '../../store/index.selectors';

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
export class RegionFilterComponent extends BaseComponent implements OnInit {
  filterRegion$: Observable<string>;
  position: ConnectedPosition[] = [
    {
      offsetY: 4,
      originX: `start`,
      originY: `bottom`,
      overlayX: `start`,
      overlayY: `top`,
    },
  ];

  ngOnInit(): void {
    super.ngOnInit();

    this.filterRegion$ = this.store.select(IndexSelectors.selectFilterRegion);
  }

  caption(region: string) {
    return region || `Filter by Region`;
  }

  imgSrc(icon: string, width: string, scheme: string) {
    return `../../../assets/images/${icon}-${width}-${scheme}.svg`;
  }
}
