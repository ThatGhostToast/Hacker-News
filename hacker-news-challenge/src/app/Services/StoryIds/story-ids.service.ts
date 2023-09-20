import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
/**
 * Service that provides the application with the IDs of the newest stories on Hacker News
 *
 * @class StoryIdsService
 */
@Injectable({
  providedIn: 'root'
})

export class StoryIdsService {

  constructor(private http: HttpClient) { }
  //Base API URL
  private storiesUrl = 'https://hacker-news.firebaseio.com/v0/';

  //Function that uses a get request to return the IDs of the newest stories from the API
  getStoryIds(){
    return this.http.get(`${this.storiesUrl}newstories.json`);
  }
}