import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get('https://pumpkin-pie-18472.herokuapp.com/diet')
  }

}
