import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { API_URL } from '../data.data';
import { ApiResponse } from '../data.model';
import * as DataActions from './data.actions';

@Injectable()
export class DataEffects {
  fetchInitial = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      switchMap(() =>
        this.http
          .get<ApiResponse>(
            `${API_URL}?fields=capital,flags,name,population,region`
          )
          .pipe(
            map((response) =>
              DataActions.setInitial({
                data: response.map((country) => ({
                  ...country,
                  capital: country.capital[0],
                  currencies: undefined,
                  flag: country.flags,
                  languages: undefined,
                  name: country.name.common,
                })),
              })
            ),
            catchError(() => of())
          )
      )
    );
  });

  fetchAdditional = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.setInitial),
      switchMap(() =>
        this.http
          .get<ApiResponse>(
            `${API_URL}?fields=borders,cca3,currencies,languages,name,subregion,tld`
          )
          .pipe(
            map((response) =>
              DataActions.setAdditional({
                data: response.map((country) => ({
                  ...country,
                  capital: undefined,
                  currencies: Object.values(country.currencies).map(
                    (currency) => currency.name
                  ),
                  languages: Object.values(country.languages),
                  name: country.name.common,
                  nativeNames: Object.values(country.name.nativeName).map(
                    (name) => name.common
                  ),
                })),
              })
            )
          )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
