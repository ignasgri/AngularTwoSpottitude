import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MusicService {
private searchUrl:string;

  constructor(private _http:Http) { 
  }
searchMusic(str: string, type = 'artist') {
  let headers = new Headers();
  let authToken = 'OAuth token';
  headers.append('Authorization', 'Bearer '+authToken);
  		this.searchUrl = "https://api.spotify.com/v1/search?query="
  			+ str + "&offset=0&limit=20&type="
  			+ type + "&market=US";
  
  return this._http.get(this.searchUrl, { headers }).map(res => res.json())
  	}
}
