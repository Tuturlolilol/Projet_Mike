import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private authFire: AngularFireAuth) { }

  SignUp(email: string, password: string){

    this.authFire.auth.createUserWithEmailAndPassword(email, password)
    .then( reponse => {

      console.log(reponse)

    } )
    .catch(error => {
      console.log("Error:" + error)
    })
    
  }
}
