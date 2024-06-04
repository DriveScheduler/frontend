import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCardHoursComponent } from './number-card-hours.component';

describe('NumberCardHoursComponent', () => {
  let component: NumberCardHoursComponent;
  let fixture: ComponentFixture<NumberCardHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberCardHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberCardHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
