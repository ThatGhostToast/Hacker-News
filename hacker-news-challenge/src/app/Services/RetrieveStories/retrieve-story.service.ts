import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StoryIdsService } from '../StoryIds/story-ids.service';
import { forkJoin, switchMap } from 'rxjs';
/**
 * Service that collects and returns an array of information about the newest stories on Hacker News by IDs returned from story-ids.service
 *
 * @class RetrieveStoryService
 */
@Injectable({
  providedIn: 'root'
})

export class RetrieveStoryService {
  constructor(private http: HttpClient, private ids: StoryIdsService) { }
  //Base API URL
  private storiesUrl = 'https://hacker-news.firebaseio.com/v0/';
  //Array of story IDs that the service will use to find the story information
  private storyIds: number[] = [];

  //Method that retrieves stories from the API using IDs returned from story-ids.service and returns them to the user
  retrieveStories(){
    return this.ids.getStoryIds().pipe( //Getting the IDs from the other service and piping them into the switch map
      switchMap((data: any) => { //Using a switch map to assign the data returned to a new piece of information in a new array
        this.storyIds = data; //Setting the story IDs to the data returned
        const requests = this.storyIds.map(id => //Mapping each ID to it's story object that is returned from the API
          this.http.get(`${this.storiesUrl}item/${id}.json`) //Calling the API
        );
        return forkJoin(requests); //Using forkjoin to ensure all data is returned from the API before returning data to the user
      })
    );    
  }
}
