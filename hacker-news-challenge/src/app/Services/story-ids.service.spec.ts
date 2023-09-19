import { TestBed } from '@angular/core/testing';
import { StoryIdsService } from './story-ids.service';
import { HttpClientModule } from '@angular/common/http';

describe('StoryIdsService', () => {
  let service: StoryIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(StoryIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
