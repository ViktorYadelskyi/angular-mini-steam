import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from 'src/app/login/login.component';
import { ProfileComponent } from 'src/app/user-profile/user-profile.component';
// import { GamesComponent } from 'src/app/games/games.module';
import { Err404Component } from './err404/err404.component';
// import { GamecardComponent } from './games/gamecard/gamecard.component';
import { GamesComponent } from './games/games.component';
import { GamecardComponent } from './games/gamecard/gamecard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    GamesComponent,
    GamecardComponent,
    Err404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
