import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { AuthorpostsComponent } from './pages/authorposts/authorposts.component';

import { PostComponent } from '../../components/post/post.component';
import { PostsService } from '../../services/posts.service';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [
    PostsComponent,
    AuthorpostsComponent,
    PostComponent,
    PostPageComponent,
    CategoryComponent
  ],
  imports: [
    PostsRoutingModule,
    CommonModule
  ],
  providers: [PostsService],
  bootstrap: [PostsComponent]
})

export class PostsModule { }
