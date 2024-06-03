import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersCardComponent } from './numbers-card.component';

describe('NumbersCardComponent', () => {
  let component: NumbersCardComponent;
  let fixture: ComponentFixture<NumbersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumbersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
