import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCardVehicleComponent } from './number-card-vehicle.component';

describe('NumberCardVehicleComponent', () => {
  let component: NumberCardVehicleComponent;
  let fixture: ComponentFixture<NumberCardVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberCardVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberCardVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
