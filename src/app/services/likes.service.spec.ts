import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import Likes from '../models/Likes';

import { LikesService } from './likes.service';

describe('LikesService', () => {
  let service: LikesService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LikesService]
    });
    service = TestBed.inject(LikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should patch likes and return likes pairs', () => {
    const newLike: Likes = {id:12, id2: 1};
    service.updateLikes(newLike.id, newLike.id2).subscribe((data) => {

      expect(data).toBe(newLike);
      
    });
      //const req = httpTestingController.expectOne(service.postUrl)
      //expect(req.cancelled).toBeFalsy();
      
  });
});
