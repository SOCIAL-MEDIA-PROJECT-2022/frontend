import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostFeedPageComponent } from './components/post-feed-page/post-feed-page.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserInitialsPipe } from './pipes/user-initials.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { LikesComponent } from './components/likes/likes.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MyCardComponent} from './components/my-card/my-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SearchFeedPageComponent} from './components/search-feed-page/search-feed-page.component';
import {SearchCardComponent} from './components/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostFeedPageComponent,
    PostComponent,
    CommentComponent,
    NavbarComponent,
    UserInitialsPipe,
    NotFoundComponent,
    MyCardComponent,
    SearchBarComponent,
    SearchFeedPageComponent,
    SearchCardComponent,
    ResetPasswordComponent,
    DarkModeToggleComponent,
    LikesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, //use forms module to take user input
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: PostFeedPageComponent}, //empty string on path indicates root area or home page which I am assumiong is the FeedPageComponent.
      {path: 'post', component: PostComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
