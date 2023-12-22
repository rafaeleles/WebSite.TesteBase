import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
       { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      // { path: '', loadChildren: () => import('.module').then(m => m.oModule), canActivate: [AuthGuard] },
    ]
  },
 // { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
