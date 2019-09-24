import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {FormsModule } from '@angular/forms'
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from './../environments/environment';
import { RegisterComponent } from './@pages/register/register.component'
import { FirebaseAuthService } from './providers/firebase-auth.service'
import { from } from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserProfileComponent
  ],
  imports: [
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
