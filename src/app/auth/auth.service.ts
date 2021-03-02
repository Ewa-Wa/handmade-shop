import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    isLoggedIn = false;
    isAdmin = false;

    constructor( private router: Router) {}

    login(role){
        if(role === 'admin'){
            this.isAdmin = true;
            console.log('admin:');
        } else {
            this.isLoggedIn = true;
            console.log('user:');
        }
    }

    logout(){
        this.isLoggedIn = false;
        this.isAdmin = false;
        // this.router.navigate(['/']);
    }
}