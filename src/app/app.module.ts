import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GamesComponent } from './games/games.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Err404Component } from './err404/err404.component';
import { FriendsComponent } from './friends/friends.component';
import { LibraryComponent } from './library/library.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    GamesComponent,
    ProfileComponent,
    Err404Component,
    FriendsComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
