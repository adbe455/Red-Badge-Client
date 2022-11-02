import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
// import { Game } from './game';
// import { Observable } from 'rxjs';



@Injectable()
export class GameReview {

  private _url: string = `https://api.igdb.com/v4/games/`;
  private _proxy: string = 'https://corsanywhereapp.herokuapp.com/';
  
  // HEROKU URL
  private _url2: string = `https://crithits2server.herokuapp.com/review/`

  // LOCALHOST URL
  // private _url2: string = `http://localhost:3343/review/`

  public query: string;

  constructor(private http: HttpClient) {}

  reviewFetch(query: string) {
    const parseHeaders = {
      headers: new HttpHeaders({
            'Client-ID': 'dwdaqgesynudsgg0n63ypgb0or2bjl',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('igdb')).token.access_token,
          })
      };
  
    let data = `
      where id=${query};
      fields artworks.*, storyline, summary, name, release_dates.human, genres.name, platforms.*, videos.*, dlcs.*, age_ratings.*, total_rating, total_rating_count, websites.*, game_modes.*, multiplayer_modes.*, screenshots.*;
    `


    // if(type == 'people'){return this.http.get<Game[]>(this._url + 'people/?search=' + query)}
    return this.http.post(this._proxy + this._url, data, parseHeaders)
      // headers: new HttpHeaders ({
      //     'user-key':'cc5441053548ed186c2e6a3add7af2f1',
      //     'Accept':'application/json'
      // })

  }


  
  reviewPost(gameid: any, score: string, userName: any, headline: any, pros: any, cons: any, textArea: any) {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token


    let body = {
    
    gameId: gameid,
    userName: token.user.userName,
    score: score,
    headline: headline,
    pros: pros,
    cons: cons,
    textArea: textArea
    }
    
    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.post( this._url2, body,  parseHeaders2)    //data,this._proxy + 


  }

  reviewGet(query: string) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token


    let body = {
    
    userid: token.user.id,

    };

    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
  

    return this.http.get(this._url2 +`${query}`, parseHeaders2)    //data,this._proxy + 


  }

  reviewGetAll(query: string) {
    return this.http.get(this._url2 +`all/${query}`)    //data,this._proxy + 


  }

  

  reviewPut(gameid: any, score: string, userName: any, headline: any, pros: any, cons: any, textArea: any) {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token


    let body = {
    

    userName: token.user.userName,
    score: score,
    headline: headline,
    pros: pros,
    cons: cons,
    textArea: textArea
    }
    
    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.put( this._url2 + `${gameid}`, body,  parseHeaders2)    //data,this._proxy + 


  }

  reviewDelete(gameid: string, score: any, userName: any, headline: any, pros: any, cons: any, textArea: any) {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token


    
    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
              
           })
     };

  // console.log(token.user.userName)

  return this.http.delete( this._url2 + gameid, parseHeaders2)    //data,this._proxy + 
    }
}