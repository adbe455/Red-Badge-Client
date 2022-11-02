import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
// import { Game } from './game';
// import { Observable } from 'rxjs';

@Injectable()
export class GameSearch {

  private _url: string = `https://api.igdb.com/v4/games/`;
  
  private _proxy: string = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: HttpClient) {}
  
  fetch(query: string, offset: number) {
    const parseHeaders = {
      headers: new HttpHeaders({
            'Client-ID': 'dwdaqgesynudsgg0n63ypgb0or2bjl',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('igdb')).token.access_token,
            'Accept':'*/*'
          })
     };
  
    let data = `
      search "${query}";
      offset ${offset};
      limit 50;
      fields name, release_dates.human, cover.url, genres.*, platforms.*;
      where themes != 42;
      `
      // fields name;
    
    return this.http.post(this._proxy + this._url, data, parseHeaders)
  }
}