import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IImageURL } from './imageArray';

@Injectable({
  providedIn: 'root'
})
export class FetchImageService {
  public _url = "https://cdn.pinkvilla.com/feed/fashion-section.json";
  constructor(private _http: HttpClient) { }

  getImages() {
    return this._http.get(this._url);
  }
}
