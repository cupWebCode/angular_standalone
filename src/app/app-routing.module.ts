import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user/user.component').then((m) => m.UserComponent),
  },
];
