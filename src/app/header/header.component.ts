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

  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  get isAdmin(){
    return this.authService.isAdmin;
  }


}
