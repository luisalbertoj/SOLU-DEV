import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { DashboardGuard } from './crm/guards/dashboard.guard';

const routes: Routes = [
  {
    path: 'auth',
    title: 'Auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    canActivate: [DashboardGuard],
    loadComponent: () =>
      import('./crm/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: '',
        title: 'Home',
        loadComponent: () =>
          import('./crm/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: 'notfound',
    title: '404',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: 'access',
    title: 'Access',
    loadComponent: () =>
      import('./access-denied/access-denied.component').then(
        (m) => m.AccessDeniedComponent
      ),
  },
  {
    path: 'error',
    title: 'Error',
    loadComponent: () =>
      import('./error/error.component').then((m) => m.ErrorComponent),
  },
  {
    path: 'logout',
    title: 'logout',
    loadComponent: () =>
      import('./logout/logout.component').then((m) => m.LogoutComponent),
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
