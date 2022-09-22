import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundUsersComponent } from './components/found-users/found-users.component';
import { LoginComponent } from './components/login/login.component';
import { MyCardComponent } from './components/my-card/my-card.component';
import { PostFeedPageComponent } from './components/post-feed-page/post-feed-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchFeedPageComponent } from './components/search-feed-page/search-feed-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "post-feed", component: PostFeedPageComponent},
  { path: "found-users", component: FoundUsersComponent},
  { path: "profile", component: ProfileComponent},
  { path: "search-feed-page", component: SearchFeedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
