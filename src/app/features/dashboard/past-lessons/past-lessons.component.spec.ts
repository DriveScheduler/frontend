import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLessonsComponent } from './past-lessons.component';

describe('PastLessonsComponent', () => {
  let component: PastLessonsComponent;
  let fixture: ComponentFixture<PastLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastLessonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
