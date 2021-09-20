import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { PostsModule } from './modules/postsModule/posts.module';
import { UserModule } from './modules/userModule/user.module';
import { SharedModule } from './modules/sharedModule/shared.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    PostsModule,
    UserModule
  ],
  exports: [NavComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
