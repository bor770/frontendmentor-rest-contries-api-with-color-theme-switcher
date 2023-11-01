import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { CountriesComponent } from './countries/countries.component';
import { FilterFormComponent } from './filter-form/filter-form.component';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    CountriesComponent,
    FilterFormComponent,
  ],
  selector: 'app-index',
  standalone: true,
  styleUrls: [
    './styles/index.component.css',
    `./styles/mobile.index.component.css`,
    `./styles/desktop.index.component.css`,
  ],
  templateUrl: './index.component.html',
})
export class IndexComponent extends BaseComponent {}
