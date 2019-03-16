import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) { 
  	//if usre is logged In, then add user's data to browser's local stoarage.
  	this.afAuth.authState.subscribe(user => {
  	if( user ) {
  		this.user = user;
  		localStorage.setItem('user', JSON.stringify(this.user));

  	} else {
  		//set user null.
  		localStorage.setItem('user', null)
  	}
  });
  }

  //login mehod used to login user with email and password
   login(email: string, password: string): void {
  	try {
   	var result =  this.afAuth.auth.signInWithEmailAndPassword(email, password);
   	this.router.navigate(["user"]);
   } catch (error) {
   	console.log(error);
   	alert(error.message);
   }
  }

  //get logged In user
  isLoggedIn() : User {
  	return JSON.parse(localStorage.getItem('user'));  	
  }
}
