import { Component, OnInit} from '@angular/core';
import { RetrieveStoryService } from '../../Services/retrieve-story.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  public collectedStories: any[] = [];
  public currentData: any[] = [];
  public loading = true;
  public pages: any[] = [];
  public currIndex: number = 1;
  public limit: number = 20;
  public totalPages: number = 0;

  constructor(private stories: RetrieveStoryService, private search: SearchComponent) {}

  ngOnInit() {
    this.stories.retrieveStories().subscribe(
      (data: any[]) => {
        this.collectedStories = data;
        this.currentData = this.collectedStories;
        console.log(this.collectedStories);
        this.loading = false;
        this.totalPagesCalculation();
        this.pageChange(0);
      }
    );

  }

  totalPagesCalculation(){
    this.totalPages = Math.ceil(this.currentData.length / this.limit);
  }

  searchIndex(indexValue: string){
    // Convert the input value to a number
    const numericValue = parseFloat(indexValue);
    
    this.pageChange(numericValue);
  }

  searchByTitle(query: string){
    this.currentData = this.search.filterData(query, this.collectedStories);
    this.currIndex = 1;
    this.pageChange(this.currIndex);
  }

  increment(){
    let newPageNumber = this.currIndex + 1;
    this.pageChange(newPageNumber);
  }

  decrement(){
    let newPageNumber = this.currIndex - 1;
    this.pageChange(newPageNumber);
  }

  pageChange(newPage: number){
    this.totalPagesCalculation();
    if (newPage > this.currIndex){
      if (((newPage - this.currIndex) + this.currIndex) > this.totalPages)
      {
        this.currIndex = this.totalPages;
      } else {
        this.currIndex = (newPage - this.currIndex) + this.currIndex;
      }
    } else if (newPage < this.currIndex){
      if (((this.currIndex + newPage) - this.currIndex) < 1)
      {
        this.currIndex = 1;
      } else {
        this.currIndex = (this.currIndex + newPage) - this.currIndex;
      }
    } 
    
    this.pages = [];
    for (let x = ((this.currIndex - 1) * this.limit); x < (this.currIndex * this.limit); x++)
    {
      if (this.currentData[x].title){
        this.pages.push(this.currentData[x]);
        console.log(this.pages[x])
      }
    }
  }


}
