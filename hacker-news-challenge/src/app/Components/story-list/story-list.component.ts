import { Component, OnInit} from '@angular/core';
import { RetrieveStoryService } from 'src/app/Services/RetrieveStories/retrieve-story.service';
import { SearchComponent } from '../search/search.component';
/**
 * Component responsible for creating a paginated list of data returned from the API
 *
 * @class StoryListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  public collectedStories: any[] = []; //Stories collected from the API
  public currentData: any[] = []; //The current stories being dispayed on the page
  public loading = true; //Loading value that holds the page from displaying data until data is returned from the services
  public pages: any[] = []; //Page of currently displayed data
  public currIndex: number = 1; //Index of what page is being viewed
  public limit: number = 20; //Limit of how many items are displayed per page
  public totalPages: number = 0; //Total pages that can be created based on how many items are returned

  constructor(private stories: RetrieveStoryService, private search: SearchComponent) {}

  //On application initialization, this creates some default data
  ngOnInit() {
    this.stories.retrieveStories().subscribe(
      (data: any[]) => {
        this.collectedStories = data; //Collects stories from the api
        this.currentData = this.collectedStories; //Sets the current data to the entirety of the data collected for now
        this.loading = false; //Now that data is returned, set the loading to false so it can be displayed
        this.totalPagesCalculation(); //Calculate how many total pages there can be based on how many items were returned
        this.pageChange(0);//Set the index to the first page
      }
    );

  }

  //Method that calculates the total ammount of pages by dividing the ammount of current data by the ammount of data that can be displayed per page
  totalPagesCalculation(){
    this.totalPages = Math.ceil(this.currentData.length / this.limit);
  }

  //Method that allows users to input a new page manually using the input field in the pagination
  searchIndex(indexValue: string){
    // Convert the input value to a number
    const numericValue = parseFloat(indexValue);
    
    //Change the page to the new value
    this.pageChange(numericValue);
  }

  //Method that allows users to search for a story based on it's title by calling the search component
  searchByTitle(query: string){
    this.currentData = this.search.filterData(query, this.collectedStories); //Setting the current data to the filtered data
    this.currIndex = 1; //Resetting the index to page 1
    this.pageChange(this.currIndex); //Changing the page to be page 1
  }

  //Method used to increment page number by 1
  increment(){
    let newPageNumber = this.currIndex + 1; //Add one to the page number
    this.pageChange(newPageNumber); //Change page to new number
  }

  //Method used to decrement page number by 1
  decrement(){
    let newPageNumber = this.currIndex - 1; //Subtract one from the page number
    this.pageChange(newPageNumber); //Change page to new number
  }

  //Method used to change the page in the pagination
  pageChange(newPage: number){
    this.totalPagesCalculation(); //Verify the total ammount of pages that need to be generated
    if (newPage > this.currIndex){ //If the new page number is greater than the current page number
      if (((newPage - this.currIndex) + this.currIndex) > this.totalPages) //Checking to see if the page number requested is larger than the total pages available
      {
        this.currIndex = this.totalPages; //If the page requested is larger than the total pages available, set the page number to the last page
      } else {
        this.currIndex = (newPage - this.currIndex) + this.currIndex; //If the page requested is valid, set the page number to the requested number
      }
    } else if (newPage < this.currIndex){ //If the new page number is less than the current page number
      if (((this.currIndex + newPage) - this.currIndex) < 1) //Checking to see if the requested page number is less than 1 (There is no page 0)
      {
        this.currIndex = 1; //If the page requested is less than 1, set the page number to 1
      } else {
        this.currIndex = (this.currIndex + newPage) - this.currIndex; //If the page requested is valid, set the page number to the requested number
      }
    } 
    
    this.pages = []; //Empty the pages array to start fresh
    //For loop that loops over the current data from a specific starting position to populate the data on a given page
    for (let x = ((this.currIndex - 1) * this.limit); x < (this.currIndex * this.limit); x++)
    {
      if (this.currentData[x].title){ //If the content does not have a title, skip that data
        this.pages.push(this.currentData[x]); //Push current data to the working environment
      }
    }
  }


}
