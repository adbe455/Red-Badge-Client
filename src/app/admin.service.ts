import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // HEROKU
  private _url: string = `https://crithits2server.herokuapp.com`

  // LOCALHOST
  // private _url: string = `http://localhost:3343`

  constructor(private http: HttpClient) { }


  adminSGetAll() {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };

    
    return this.http.get(this._url+ '/admin/admin/all/',  parseHeaders2)    //data,this._proxy + 


  }

  

  adminSPut(firstName: any, lastName: any, userName: any, admin: any, banned: any, id: any, email: any) {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token


    let body = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    admin: admin,
    banned: banned,
    email: email

    }
    
    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.put( this._url + '/admin/admin/delete/', body,  parseHeaders2)    //data,this._proxy + 


  }

  adminPost() {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)
    let body = {
    
      email: token.user.email, 
      firstName: token.user.firstName, 
      lastName: token.user.lastName, 
      userName: token.user.userName, 
      password: token.user.password,
    }
    
    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.post( this._url+'/admin/admin/login', body,  parseHeaders2)    //data,this._proxy + 


  }

  adminGet() {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)
    let body = {
      email: token.user.email, 
      password: token.user.password,
    }
    
  


    // console.log(token.user.userName)

    return this.http.post(this._url + '/auth/login2', body)    //data,this._proxy + 


  }


  adminSDelete(id: string) {


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
    
  


    // console.log(token.user.userName)

    return this.http.delete(this._url + '/admin/admin/' + id, parseHeaders2)    //data,this._proxy + 


  }

  adminFormPut(id: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
     let body = {
      
      pinned: false,
      ownerId: 0,
 
    
        userName: "[User Deleted]",

       // textArea: "[User Deleted]",

    }
  


    // console.log(token.user.userName)

    return this.http.put(this._url + '/forumTopic/'+`${id}`, body, parseHeaders2)    //data,this._proxy + 


  }

  adminDesPut(id: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
     let body = {
      
      pinned: false,
      ownerId: 0,
 
    
        userName: "[User Deleted]",

        // textArea: "[User Deleted]",

    }
  


    // console.log(token.user.userName)

    return this.http.put(this._url + '/forumTopic/'+`${id}`, body, parseHeaders2)    //data,this._proxy + 

  }

  adminGetForm(id: any) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.get(this._url + '/forumTopic/'+`${id}`, parseHeaders2)    //data,this._proxy + 


  }

  adminGetReply(id: any) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.get(this._url + '/forumReply/all/'+`${id}`, parseHeaders2)    //data,this._proxy + 


  }

  adminReplyPut(id: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
     let body = {
      
      
      ownerId: 0,
 
    
        userName: "[User Deleted]",

        // textArea: "[User Deleted]",

    }
  


    // console.log(token.user.userName)

    return this.http.put(this._url + '/forumReply/'+`${id}`, body, parseHeaders2)    //data,this._proxy + 

  }

  adminFormDelete(id: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
     let body = {
      
      pinned: false,
      ownerId: 0,
 
    
        userName: "[User Deleted]",

        textArea: "[User Deleted]",

    }
  


    // console.log(token.user.userName)

    return this.http.put(this._url + '/forumTopic/'+`${id}`, body, parseHeaders2)    //data,this._proxy + 


  }
  adminReplyDelete(id: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  

    // console.log(token.user.userName)

    return this.http.delete(this._url + '/forumReply/'+`${id}`, parseHeaders2)    //data,this._proxy + 

  }

  adminReviewDelete(id: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  

    // console.log(token.user.userName)

    return this.http.delete(this._url + '/review/admin/'+`${id}`, parseHeaders2)    //data,this._proxy + 

  }

  adminGetReview(id: any) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  


    // console.log(token.user.userName)

    return this.http.get(this._url + '/review/admin/'+`${id}`, parseHeaders2)    //data,this._proxy + 


  }

  adminPinned(id: any, pinned: any) {

    


    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.token; // your token

//console.log('here', token)


    const parseHeaders2 = {
      headers: new HttpHeaders({
            'Authorization': token.sessionToken,
            'Content-Type':'application/json'    
           })
     };
  
     let body = {
      
      pinned: pinned,


    }
  


    // console.log(token.user.userName)

    return this.http.put(this._url + '/forumTopic/' + `${id}`, body, parseHeaders2)    //data,this._proxy + 

  }
  }
