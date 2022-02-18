import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsComponent } from 'src/friends/friends.component'; 
import { GamesComponent } from 'src/games/games.module'; 
import { AuthGuard } from 'src/guards/auth.guard'; 
import { LibraryComponent } from 'src/library/library.component'; 
import { LoginComponent } from 'src/login/login.component'; 
import { ProfileComponent } from 'src/user-profile/user-profile.component'; 
import { Err404Component } from 'src/err404/err404.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
  { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: '404', component: Err404Component},

   { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
