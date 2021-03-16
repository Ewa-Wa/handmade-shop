import { Injectable } from "@angular/core";


@Injectable()
export class AuthService{
    isLoggedIn = false;
    isAdmin = false;

    constructor( ) {}

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