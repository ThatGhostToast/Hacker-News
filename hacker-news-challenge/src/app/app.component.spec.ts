import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoryListComponent } from './Components/story-list/story-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/search/search.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent

  beforeEach(() => {TestBed.configureTestingModule({
    declarations: [AppComponent, StoryListComponent],
    imports: [HttpClientModule],
    providers: [SearchComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hacker-news-challenge'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hacker-news-challenge');
  });

});
