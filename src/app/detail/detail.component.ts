import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-detail',
  standalone: true,
  styleUrls: ['./detail.component.css'],
  templateUrl: './detail.component.html',
})
export class DetailComponent extends BaseComponent {}
