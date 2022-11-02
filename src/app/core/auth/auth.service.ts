import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    public isLoggedIn: boolean = false;

    // HEROKU URL
    public url: string = `https://crithits2server.herokuapp.com`;

    // LOCALHOST
    // public url: string = `http://localhost:3343`;

    constructor(
        private http: HttpClient,
        ) {
        this.isLoggedIn = false;
    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isLoggedIn)
                }, 800)
            }
        );
        return promise;
        // this.isLoggedIn;
        // return this.isLoggedIn;
    }

    signup(firstName: string, lastName: string, userName: string, email: string, password: string) {
        return this.http.post(
            (this.url + '/auth/signup'),
            {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                password: password
            }
            
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.http.post(
            (this.url + '/auth/login'),
            {
                email: email,
                password: password
            },
        ).pipe(catchError(this.handleError));
        
    }

    logout() {
        this.isLoggedIn = false;
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage: string = 'An unknown error occurred';
        if (!errorRes.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error) {
            case 'Validation error':
                errorMessage = 'The email or username you entered is already in use';
        }
        return throwError(errorMessage);
    }
}