import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onLogin(){
    if(!this.authService.isLoggedIn){
      this.authService.login();
      console.log('Is logged1' + this.authService.isLoggedIn);
    } else {
      this.authService.logout();
      console.log('Is logged2' + this.authService.isLoggedIn);
    }
    
  }

   get isLoggedIn(){
    return this.authService.isLoggedIn;
  }

}
