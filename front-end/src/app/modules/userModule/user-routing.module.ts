import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { ChangePostComponent } from './pages/change-post/change-post.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: 'add',
    component: AddPostComponent
  }, {
    path: 'change/:title',
    component: ChangePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
