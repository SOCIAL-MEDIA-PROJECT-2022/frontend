import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PostFeedPageComponent} from './components/post-feed-page/post-feed-page.component';
import {RegisterComponent} from './components/register/register.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {SearchFeedPageComponent} from './components/search-feed-page/search-feed-page.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "post-feed", component: PostFeedPageComponent},
  {path: "reset-password", component: ResetPasswordComponent},
  {path: "search-feed-page", component: SearchFeedPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [HttpClient]
})
export class AppRoutingModule {
}
