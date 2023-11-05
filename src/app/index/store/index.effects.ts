import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ApiResponse } from '../../shared/data/data.model';
import * as IndexActions from './index.actions';

const API_URL = `https://restcountries.com/v3.1/all?fields=capital,flags,name,population,region`;

@Injectable()
export class IndexEffects {
  fetchAll = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      switchMap(() =>
        this.http.get<ApiResponse>(`${API_URL}`).pipe(
          map((response) =>
            IndexActions.setData({
              data: response.map((country) => ({
                ...country,
                capital: country.capital[0],
                flag: country.flags,
                name: country.name.common,
              })),
            })
          ),
          catchError(() => of())
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
