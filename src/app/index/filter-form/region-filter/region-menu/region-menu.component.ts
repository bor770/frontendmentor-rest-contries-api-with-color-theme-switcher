import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../../../shared/base/base.component';
import * as DataSelectors from '../../../../shared/data/store/data.selectors';
import * as IndexActions from '../../../store/index.actions';

@Component({
  imports: [CommonModule, CdkMenuModule, LetDirective],
  selector: 'app-region-menu',
  standalone: true,
  styleUrls: [
    './styles/region-menu.component.css',
    `./styles/mobile.region-menu.component.css`,
    `./styles/desktop.region-menu.component.css`,
    `./styles/dark.region-menu.component.css`,
    `./styles/light.region-menu.component.css`,
  ],
  templateUrl: './region-menu.component.html',
})
export class RegionMenuComponent extends BaseComponent implements OnInit {
  regions$: Observable<string[]>;

  ngOnInit(): void {
    super.ngOnInit();

    this.regions$ = this.store.select(DataSelectors.selectRegions);
  }

  onSelect(region: string) {
    this.store.dispatch(
      IndexActions.setFilter({ filter: { field: `region`, value: region } })
    );
  }
}
