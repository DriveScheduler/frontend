import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFiltersComponent } from './calendar-filters.component';

describe('CalendarFiltersComponent', () => {
  let component: CalendarFiltersComponent;
  let fixture: ComponentFixture<CalendarFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
