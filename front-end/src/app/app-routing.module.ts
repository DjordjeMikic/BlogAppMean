import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';

import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadChildren: () => import('./modules/postsModule/posts.module').then(m => m.PostsModule)
  }, {
    path: 'user',
    loadChildren: () => import('./modules/userModule/user.module').then(m => m.UserModule),
    canActivateChild: [AuthGuard]
  }, {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
