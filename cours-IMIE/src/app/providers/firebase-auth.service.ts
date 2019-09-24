import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { async } from 'q';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {


  constructor(private authFire: AngularFireAuth) { }

  SignUp(email: string, password: string) {

    this.authFire.auth.createUserWithEmailAndPassword(email, password)
      .then(reponse => {

        console.log(reponse)

      })
      .catch(error => {
        console.log("Error:" + error)
      })

  }

}

export class GoogleAuth {
  router: any;
  afAuth: any;

  async loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['admin/list']);
  }

}