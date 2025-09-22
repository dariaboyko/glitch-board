import { Routes } from '@angular/router';

import { AboutPageComponent } from './features';

export const appRoutes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
