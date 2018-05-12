import { NgModule } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { YoutubeComponent } from './youtube.component';

@NgModule({
  imports: [],
  providers: [YoutubeService],
  declarations: [YoutubeComponent],
  exports: [YoutubeComponent]
})
export class YoutubeModule {}
