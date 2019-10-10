import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent { 
    isLoginPage = true;
    isLoading = false;
    error: string = null;

    constructor(
        private authService: AuthService,
        private router: Router,
        ) {}

    onSwitchMode () {
        this.isLoginPage = !this.isLoginPage;
    }

    onSubmit (form: NgForm) {
        
        if(!form.valid){
            return;
        }
        const firstName = form.value.firstName;
        const lastName = form.value.lastName;
        const userName = form.value.username;
        const email = form.value.email;
        const password = form.value.password

        this.isLoading = true;
        if (this.isLoginPage) {
            this.authService.login(email, password).subscribe(
                
                resData => {
                console.log(resData);
                this.isLoading = false;
                localStorage.setItem('currentUser', JSON.stringify({ token: resData }));
                this.router.navigate(['/']);
            }, errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            });
        } else {
            this.authService.signup(firstName, lastName, userName, email, password).subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
                localStorage.setItem('currentUser', JSON.stringify({ token: resData }));
                this.router.navigate(['/']);
            }, errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            });
        }

        

        form.reset();
    }
}