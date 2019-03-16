import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';



var firebase = {
    apiKey: "AIzaSyBwfwHHmKx0WygjfPDw9ru9k7Dkmkr0LC4",
    authDomain: "angular-login-app-f4a5d.firebaseapp.com",
    databaseURL: "https://angular-login-app-f4a5d.firebaseio.com",
    projectId: "angular-login-app-f4a5d",
    storageBucket: "",
    messagingSenderId: "698977555469"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,   
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
