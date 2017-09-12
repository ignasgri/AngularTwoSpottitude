import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MusicService }from './services/music.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { routing } from './app.routing';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
