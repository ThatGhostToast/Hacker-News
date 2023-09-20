import { TestBed } from '@angular/core/testing';
import { RetrieveStoryService } from './retrieve-story.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoryIdsService } from '../StoryIds/story-ids.service';

describe('RetrieveStoryService', () => {
  let service: RetrieveStoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RetrieveStoryService, StoryIdsService]
    });
    service = TestBed.inject(RetrieveStoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
