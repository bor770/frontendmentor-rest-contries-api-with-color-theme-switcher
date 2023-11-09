import { IMAGE_CONFIG } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { DataEffects } from './shared/data/store/data.effects';
import { LayoutEffects } from './shared/layout/store/layout.effects';
import { rootReducer } from './store/root.reducer';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(DataEffects, LayoutEffects),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideRouterStore(),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    { provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true } },
  ],
};
