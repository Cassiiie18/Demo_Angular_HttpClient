import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = "https://localhost:7152/api/"
  constructor(
    private _client : HttpClient
  ) { }

  login(user : User){
    this._client.post(this.url + "user/login", user, {responseType : "text"}).subscribe({
      next : (token : any) => {
        console.log(token)
        localStorage.setItem("token", token)
      }
    })
  }

  getAll() : Observable<any> {
    let token = localStorage.getItem("token")
    let myHeader : HttpHeaders = new HttpHeaders(
      {"authorization" : "bearer " + token})
    return this._client.get<any>(this.url + "user", {headers : myHeader})
  }
}

export interface User {
  email : string
  password : string
}
