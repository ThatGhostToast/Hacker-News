import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchQuery: string = '';
  public data: any[] = [];
  public filteredData: any[] = [];

  filterData(query: string, data: any[]) {
    this.searchQuery = query;
    this.data = data;

    this.filteredData = this.data.filter((item) => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()));

    return this.filteredData;
  }
}
