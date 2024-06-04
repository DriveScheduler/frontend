import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUpdateModalComponent } from './vehicle-update-modal.component';

describe('VehicleUpdateModalComponent', () => {
  let component: VehicleUpdateModalComponent;
  let fixture: ComponentFixture<VehicleUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleUpdateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
