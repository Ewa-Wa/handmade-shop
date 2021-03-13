import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required)
      }),
      'role': new FormControl('customer')
    });

  }

  onLogin(form: FormGroup){
    if(form.valid){
      this.username = form.get('userData.username').value;
      this.authService.login(form.get('role').value);
    }
    else alert('Invalid input');
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
