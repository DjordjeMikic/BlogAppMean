import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../sharedModule/shared.module';

import { UserComponent } from './user.component';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { ChangePostComponent } from './pages/change-post/change-post.component';

@NgModule({
  declarations: [
    UserComponent,
    SideNavComponent,
    AddPostComponent,
    PostItemComponent,
    ChangePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})

export class UserModule { }
