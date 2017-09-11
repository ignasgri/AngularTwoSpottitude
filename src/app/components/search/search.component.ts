import { Component, OnInit } from '@angular/core';
import { MusicService} from '../../services/music.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	public searchStr:string;

  constructor(private _musicService:MusicService) {
  }

  ngOnInit() {
  }
searchMusic(){//console.log(this.searchStr);
  this._musicService.searchMusic(this.searchStr)
  .subscribe(res =>
  {console.log(res.artists.items)});
}
}
