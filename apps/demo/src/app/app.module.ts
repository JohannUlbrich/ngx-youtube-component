import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { YoutubeModule } from 'ngx-youtube-component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, YoutubeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
