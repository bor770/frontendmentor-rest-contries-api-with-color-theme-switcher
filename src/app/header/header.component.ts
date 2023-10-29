import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import * as SchemeActions from '../shared/scheme/store/scheme.actions';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-header',
  standalone: true,
  styleUrls: [
    './styles/header.component.css',
    `./styles/mobile.header.component.css`,
    `./styles/desktop.header.component.css`,
    `./styles/dark.header.component.css`,
    `./styles/light.header.component.css`,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  onToggleScheme() {
    this.store.dispatch(SchemeActions.toggle());
  }
}
