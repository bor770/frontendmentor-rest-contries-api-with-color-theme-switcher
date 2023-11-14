import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from './shared/base/base.component';
import { HeaderComponent } from './header/header.component';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    RouterOutlet,
    BaseComponent,
    HeaderComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrls: [
    './styles/app.component.css',
    `./styles/dark.app.component.css`,
    `./styles/light.app.component.css`,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent {}
