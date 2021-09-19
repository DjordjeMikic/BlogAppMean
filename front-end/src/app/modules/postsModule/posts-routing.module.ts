import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import { AuthorpostsComponent } from './pages/authorposts/authorposts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    pathMatch: "full"
  },
  {
    path: 'post/:title',
    component: PostPageComponent
  },
  {
    path: 'author/:author',
    component: AuthorpostsComponent
  },
  {
    path: 'category/:category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
