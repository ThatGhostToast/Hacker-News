import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoryListComponent } from './Components/story-list/story-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }