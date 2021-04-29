import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [LoginGuard],
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  // https://angular.io/api/router/ExtraOptions
  // scrollPositionRestoration: disabled (Default) | top | enabled
  exports: [RouterModule]
})
export class AppRoutingModule { }
