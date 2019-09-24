import { Component } from '@angular/core';
import { FirebaseAuthService } from './providers/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireBase Connection';
  user = { login: "", password: ""}

  constructor(private firebaseAuth: FirebaseAuthService) {

  }

  submitForm(){

    console.log('Toto');
    this.firebaseAuth.SignUp(this.user.login, this.user.password)
  }
}
