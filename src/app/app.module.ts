import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*

var config = {
  apiKey: "AIzaSyA8jnxZV3AW8dtXRpYzvLqFmQrMSihmIfY",
  authDomain: "fitness-app-5f397.firebaseapp.com",
  databaseURL: "https://fitness-app-5f397.firebaseio.com",
  projectId: "fitness-app-5f397",
  storageBucket: "fitness-app-5f397.appspot.com",
  messagingSenderId: "971962184255"
};

*/
