import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLessonsComponent } from './next-lessons.component';

describe('NextLessonsComponent', () => {
  let component: NextLessonsComponent;
  let fixture: ComponentFixture<NextLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextLessonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
