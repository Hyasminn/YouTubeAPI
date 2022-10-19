import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {

  constructor(private http: HttpClient) { }

  //this method will make HTTP request
  getChannels(channelName: string): Observable<any> {

    // const API_KEY = "AIzaSyAoB5Qu55rpUzv2HnyCkVgClTKrVji8XHw"

    //this will return channel only
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=AIzaSyAssjuYfqaBORr2SfwKlzuZmKPOGkb5CKg" + "&maxResults=12"

    return this.http.get<any>(url)
  }
}
