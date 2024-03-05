import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "https://localhost:7152/api/"

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<any> {
    return this._client.get<any>(this.url + "movie")
  }
}
