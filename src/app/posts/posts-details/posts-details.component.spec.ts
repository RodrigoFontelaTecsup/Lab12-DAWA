import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetailsComponent } from './posts-details.component';

describe('PostsDetailsComponent', () => {
  let component: PostsDetailsComponent;
  let fixture: ComponentFixture<PostsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsDetailsComponent]
    });
    fixture = TestBed.createComponent(PostsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
