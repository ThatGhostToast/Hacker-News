import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
  
})
export class StoryIdsService {

  constructor(private http: HttpClient) { }
  private storiesUrl = 'https://hacker-news.firebaseio.com/v0/';
  private storyIdStorage: any[] = [];
  private detailsUrl = '';

  getStoryIds(){
    return this.http.get(`${this.storiesUrl}newstories.json`);
  }
}