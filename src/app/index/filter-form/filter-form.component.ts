import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';
import { RegionFilterComponent } from './region-filter/region-filter.component';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    ReactiveFormsModule,
    RegionFilterComponent,
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
export class FilterFormComponent extends BaseComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      region: new FormControl(),
      search: new FormControl(),
    });
  }

  imgSrc(width: string, scheme: string) {
    return `../../../assets/images/search-${width}-${scheme}.svg`;
  }
}
