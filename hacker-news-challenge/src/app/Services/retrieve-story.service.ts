import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StoryIdsService } from './story-ids.service';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrieveStoryService {
  constructor(private http: HttpClient, private ids: StoryIdsService) { }
  private storiesUrl = 'https://hacker-news.firebaseio.com/v0/';
  private storyIds: number[] = [];

  retrieveStories(){
    return this.ids.getStoryIds().pipe(
      switchMap((data: any) => {
        this.storyIds = data;
        const requests = this.storyIds.map(id =>
          this.http.get(`${this.storiesUrl}item/${id}.json`)
        );
        return forkJoin(requests);
      })
    );    
  }
}
