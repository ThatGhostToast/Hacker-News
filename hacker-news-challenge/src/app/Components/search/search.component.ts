import { Component } from '@angular/core';
/**
 * Component responsible for filtering out data to return search results
 *
 * @class SearchComponent
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchQuery: string = ''; //Term used to search
  public data: any[] = []; //Total data returned from the API to be searched through
  public filteredData: any[] = []; //Data after items not containing the query have been filtered out

  filterData(query: string, data: any[]) {
    this.searchQuery = query; //Setting the query to the local variable
    this.data = data; //Setting the data to the local variable

    //Filtering the current data to make sure the only items returned are those that contain the search query
    this.filteredData = this.data.filter((item) => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()));

    //Return requested data
    return this.filteredData;
  }
}
