import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  username: string;

  ngOnInit() {
	const user: User = this.authService.isLoggedIn();
  	if( user ) {
  		
  		if( user.displayName ) {
  			this.username = user.displayName;
  		}else {
  			this.username = user.email;
  		}
  	}else{
  		//if user is not logged in, then redirec to Login screen.
  		this.router.navigate(["login"]);
  	}
  }

}
