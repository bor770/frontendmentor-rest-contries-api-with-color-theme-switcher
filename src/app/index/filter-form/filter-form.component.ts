import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { Subscription, filter } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import { RegionFilterComponent } from './region-filter/region-filter.component';
import * as IndexActions from '../store/index.actions';
import * as IndexSelectors from '../store/index.selectors';

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
export class FilterFormComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  form: FormGroup;
  storeSubscription: Subscription;

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({ name: new FormControl() });

    this.storeSubscription = this.store
      .select(IndexSelectors.selectFilter)
      .pipe(filter((filter) => filter?.field === `region`))
      .subscribe(() => {
        this.form.reset();
      });
  }

  imgSrc(width: string, scheme: string) {
    return `../../../assets/images/search-${width}-${scheme}.svg`;
  }

  onInput(event: InputEvent) {
    this.store.dispatch(
      IndexActions.setFilter({
        filter: {
          field: `name`,
          value: (<HTMLInputElement>event.target).value,
        },
      })
    );
  }

  onSubmit() {
    if (!this.form.value.name) {
      this.store.dispatch(
        IndexActions.setFilter({
          filter: { field: `name`, value: `` },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
