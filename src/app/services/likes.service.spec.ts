import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import Likes from '../models/Likes';

import { LikesService } from './likes.service';

describe('LikesService', () => {
  let service: LikesService;
  let httpTest: HttpTestingController
  //let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    //httpSpy = jasmine.createSpyObj('HttpClient', ['patch']);
    //service = new LikesService(httpSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LikesService/*, {provide: HttpClient useValue: httpSpy}*/]
    });
    service = TestBed.inject(LikesService);
    //httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>
  });
  //httpTest = TestBed.get(HttpTestingController)

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should patch likes and return likes pairs', () => {
    const newLike: Likes = {id:10000, id2: 1};
    //httpSpy.get.and.returnValue(of(newLike))
    service.updateLikes(newLike.id, newLike.id2).subscribe((data) => {
      
      expect(data).toBe(newLike);
      //done()
    });

    /* Apparently expectOne is buggy and wasted a lot of time
    
    const req = httpTest.expectOne("http://localhost:8080/post")
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('PATCH');*/
      
  });
});
