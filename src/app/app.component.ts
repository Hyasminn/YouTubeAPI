import { Component, ElementRef, ViewChild } from '@angular/core';
import { YoutubeAPIService } from './service/youtube-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  channels: any

  @ViewChild('channelName') channelName!: ElementRef;

  title = 'youtubeAPI';

  constructor(private youtube: YoutubeAPIService) { }

  ngOnInit() {
    //whenever app is starting this function will call itself
    //fetch for gaming channels
    this.youtube.getChannels("gaming").subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })

  }

  //for searching
  getData() {

    //get user inputs
    var channelName = this.channelName.nativeElement.value

    this.youtube.getChannels(channelName).subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })
  }


}
