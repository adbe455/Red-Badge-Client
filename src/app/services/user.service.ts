import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from '@/_models';
import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class UserService {

    // HEROKU URL
    public url: string = `https://crithits2server.herokuapp.com`;

    // LOCALHOST
    // public url: string = `http://localhost:3343`;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.url + `/auth`);
    }

    register(user: User) {
        return this.http.post(this.url + `/auth/signup`, user);
    }

    // delete(id: number) {
    //     return this.http.delete(`${config.apiUrl}/users/${id}`);
    // }
}