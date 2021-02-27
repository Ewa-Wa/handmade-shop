import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    isLoggedIn = false;

    constructor( private router: Router) {}

    login(){
        this.isLoggedIn = true;
        this.router.navigate(['/']);
    }
    logout(){
        this.isLoggedIn = false;
        this.router.navigate(['/']);
    }
}