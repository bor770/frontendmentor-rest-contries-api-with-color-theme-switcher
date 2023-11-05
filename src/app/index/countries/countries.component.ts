import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import { CountriesData } from '../index.model';
import * as IndexSelectors from '../store/index.selectors';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-countries',
  standalone: true,
  styleUrls: [
    './styles/countries.component.css',
    `./styles/mobile.countries.component.css`,
    `./styles/desktop.countries.component.css`,
    `./styles/dark.countries.component.css`,
    `./styles/light.countries.component.css`,
  ],
  templateUrl: './countries.component.html',
})
export class CountriesComponent extends BaseComponent implements OnInit {
  countries$: Observable<CountriesData>;

  ngOnInit(): void {
    super.ngOnInit();

    this.countries$ = this.store.select(IndexSelectors.selectFiltered);
  }
}
