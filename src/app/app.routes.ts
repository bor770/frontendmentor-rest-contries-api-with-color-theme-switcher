import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  { component: IndexComponent, path: `` },
  {
    loadComponent: () =>
      import(`./detail/detail.component`).then((c) => c.DetailComponent),
    path: `:name`,
  },
];
