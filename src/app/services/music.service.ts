import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {

private searchUrl:string;
private artistUrl: string;
private albumsUrl: string;

  constructor(private _http:Http) { 
  }
searchMusic(str: string, type = 'artist') {
  let headers = new Headers();
  let authToken = 'BQAvUery4C9ecoC8hUoDiyFJyDA9kOsg9OKSybeNrcITOL0kkLyTW5NQ2oEaKkJL8JZ53URspR2L2ol83JZ6PzcB5CTmo43MSf2mGmLmmRR83-b8chdQEViPyYw22k0tRcuv';
  headers.append('Authorization', 'Bearer '+authToken);
  		this.searchUrl = "https://api.spotify.com/v1/search?query="
  			+ str + "&offset=0&limit=20&type="
  			+ type + "&market=US";
  
  return this._http.get(this.searchUrl, { headers }).map(res => res.json())
  	}
 getArtist(id: string) {
  let headers = new Headers();
  let authToken = 'BQAvUery4C9ecoC8hUoDiyFJyDA9kOsg9OKSybeNrcITOL0kkLyTW5NQ2oEaKkJL8JZ53URspR2L2ol83JZ6PzcB5CTmo43MSf2mGmLmmRR83-b8chdQEViPyYw22k0tRcuv';
  headers.append('Authorization', 'Bearer '+authToken);
  		this.artistUrl = "https://api.spotify.com/v1/artists/" + id;
  return this._http.get(this.artistUrl, { headers }).map(res => res.json());
  
	}

 getAlbums(artistId: string) {
let headers = new Headers();
let authToken = 'BQAvUery4C9ecoC8hUoDiyFJyDA9kOsg9OKSybeNrcITOL0kkLyTW5NQ2oEaKkJL8JZ53URspR2L2ol83JZ6PzcB5CTmo43MSf2mGmLmmRR83-b8chdQEViPyYw22k0tRcuv';
headers.append('Authorization', 'Bearer '+authToken);
  		this.albumsUrl = "https://api.spotify.com/v1/artists/" + artistId + "/albums";
  return this._http.get(this.albumsUrl, { headers }).map(res => res.json());
  	}
}
