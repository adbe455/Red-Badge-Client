import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IgdbAuth {

  private _url: string = `https://id.twitch.tv/oauth2/token?client_id=dwdaqgesynudsgg0n63ypgb0or2bjl&client_secret=wxa2j8q42apb0lw3w8ir5z79upls8e&grant_type=client_credentials`;
  
  private _proxy: string = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: HttpClient) {}

  
  fetch() {
    const parseHeaders = {
      headers: new HttpHeaders({
            'Accept':'*/*'
          })
     };
    
    return this.http.post(this._url, '', parseHeaders)
  }
}