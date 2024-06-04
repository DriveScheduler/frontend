import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCreationModalComponent } from './vehicle-creation-modal.component';

describe('VehicleModalComponent', () => {
  let component: VehicleCreationModalComponent;
  let fixture: ComponentFixture<VehicleCreationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCreationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
