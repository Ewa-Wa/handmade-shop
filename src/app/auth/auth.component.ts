import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(role){
      this.authService.login(role);
    }
    
  onLogout(){
    this.authService.logout();
  }

  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  get isAdmin(){
    return this.authService.isAdmin;
  }

}
