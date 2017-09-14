import { Component, OnInit } from '@angular/core';
import { MusicService} from '../../services/music.service';
import { Artist }from '../../../artist';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	public searchStr:string;
  public searchRes: Artist[];

  constructor(private _musicService:MusicService) {
  }

  ngOnInit() {
  }
searchMusic(){//console.log(this.searchStr);
  this._musicService
  .searchMusic(this.searchStr)
  .subscribe(res => {this.searchRes = res.artists.items});
}
}
