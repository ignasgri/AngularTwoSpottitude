import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {

private searchUrl:string;
private artistUrl: string;
private albumsUrl: string;
private albumUrl:string;

  constructor(private _http:Http) { 
  }
searchMusic(str: string, type = 'artist') {
  let headers = new Headers();
  let authToken = 'BQCSPiXSfqDyw5dJZaEw5tfofIpvfzX9msCDJeTWvpH_vNfdlK2pKWZYJZP5t91i-Qj2OPRMXpZ9-mvclpPno-K2VbiZNoht_2fo47lpKgnhNjivB_B8uNQDUaJxD56btH2o';
  headers.append('Authorization', 'Bearer '+authToken);
  		this.searchUrl = "https://api.spotify.com/v1/search?query="
  			+ str + "&offset=0&limit=20&type="
  			+ type + "&market=US";
  
  return this._http.get(this.searchUrl, { headers }).map(res => res.json())
  	}
 getArtist(id: string) {
  let headers = new Headers();
  let authToken = 'BQCSPiXSfqDyw5dJZaEw5tfofIpvfzX9msCDJeTWvpH_vNfdlK2pKWZYJZP5t91i-Qj2OPRMXpZ9-mvclpPno-K2VbiZNoht_2fo47lpKgnhNjivB_B8uNQDUaJxD56btH2o';
  headers.append('Authorization', 'Bearer '+authToken);
  		this.artistUrl = "https://api.spotify.com/v1/artists/" + id;
  return this._http.get(this.artistUrl, { headers }).map(res => res.json());
  
	}

 getAlbums(artistId: string) {
let headers = new Headers();
let authToken = 'BQCSPiXSfqDyw5dJZaEw5tfofIpvfzX9msCDJeTWvpH_vNfdlK2pKWZYJZP5t91i-Qj2OPRMXpZ9-mvclpPno-K2VbiZNoht_2fo47lpKgnhNjivB_B8uNQDUaJxD56btH2o';
headers.append('Authorization', 'Bearer '+authToken);
  		this.albumsUrl = "https://api.spotify.com/v1/artists/" + artistId + "/albums";
  return this._http.get(this.albumsUrl, { headers }).map(res => res.json());
  }

 getAlbum(id: string) {
let headers = new Headers();
let authToken = 'BQCSPiXSfqDyw5dJZaEw5tfofIpvfzX9msCDJeTWvpH_vNfdlK2pKWZYJZP5t91i-Qj2OPRMXpZ9-mvclpPno-K2VbiZNoht_2fo47lpKgnhNjivB_B8uNQDUaJxD56btH2o';
headers.append('Authorization', 'Bearer '+authToken);
  		this.albumUrl = "https://api.spotify.com/v1/albums/" + id;
  return this._http.get(this.albumUrl, { headers }).map(res => res.json());
  	}
}
