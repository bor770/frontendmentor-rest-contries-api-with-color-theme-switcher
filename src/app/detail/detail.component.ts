import { CommonModule, formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { CountryData } from '../shared/data/data.model';
import { DisplayedField, Type } from './detail.model';
import * as DetailSelectors from './store/detail.selectors';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-detail',
  standalone: true,
  styleUrls: [
    './styles/detail.component.css',
    `./styles/mobile.detail.component.css`,
    `./styles/desktop.detail.component.css`,
    `./styles/dark.detail.component.css`,
    `./styles/light.detail.component.css`,
  ],
  templateUrl: './detail.component.html',
})
export class DetailComponent extends BaseComponent implements OnInit {
  data$: Observable<CountryData>;
  displayedFields: DisplayedField[] = [
    { key: `nativeNames`, term: `Native Name`, type: `array` },
    { key: `population`, term: `Population`, type: `number` },
    { key: `region`, term: `Region` },
    { key: `subregion`, term: `Sub Region` },
    { key: `capital`, term: `Capital` },
    { key: `tld`, term: `Top Level Domains`, type: `array` },
    { key: `currencies`, term: `Currencies`, type: `array` },
    { key: `languages`, term: `Languages`, type: `array` },
  ];

  ngOnInit(): void {
    super.ngOnInit();

    this.data$ = this.store.select(DetailSelectors.selectCountryData);
    this.data$.subscribe(console.log);
  }

  imgSrc(width: string, scheme: string) {
    return `../../assets/images/back-${width}-${scheme}.svg`;
  }

  transform(type: Type, value: string[] | number) {
    switch (type) {
      case `array`:
        return (<string[]>value).join(`, `);
      case `number`:
        return formatNumber(<number>value, `en-US`);
      default:
        return value;
    }
  }
}
