import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFeedPageComponent } from './search-feed-page.component';

describe('SearchFeedPageComponent', () => {
  let component: SearchFeedPageComponent;
  let fixture: ComponentFixture<SearchFeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFeedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
