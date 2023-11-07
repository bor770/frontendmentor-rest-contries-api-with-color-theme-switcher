import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';

import { API_URL } from '../../shared/data/data.data';
import { ApiResponse } from '../../shared/data/data.model';
import * as DetailActions from './detail.actions';

@Injectable()
export class DetailEffects {
  fetch = createEffect(() => {
    return this.actions$.pipe(ofType(DetailActions.fetch), switchMap(() => this.http.get<ApiResponse>(`${API_URL}`)))
  })

  constructor(private actions$: Actions, private http: HttpClient) {}
}
