import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import Likes from '../models/Likes';

import { LikesService } from './likes.service';

describe('LikesService', () => {
  let service: LikesService;
  let httpTest: HttpTestingController


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

  it('should patch likes and return likes pairs', (done) => {
    const newLike: Likes = {id:10000, id2: 2};
    service.updateLikes(newLike.id, newLike.id2).subscribe((data) => {
      
      expect(data).toBe(newLike);
      
      
    });
      
    done();
  });
  
});
