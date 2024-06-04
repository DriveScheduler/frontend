import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignupFormComponent } from './signup-form.component';
import { LicenceService } from 'src/app/shared/services/licence/licence.service';
import { Licence } from 'src/app/shared/models/licence';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;
  let licenceService: LicenceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SignupFormComponent,
      ],
      providers: [LicenceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    licenceService = TestBed.inject(LicenceService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch licence types from backend', () => {
    const mockLicences: Licence[] = [
      { value: 0, label: 'B - Voiture' },
      { value: 1, label: 'C - Poids lourd' },
      { value: 2, label: 'A2 - Moto' },
      { value: 3, label: 'D - Bus' }
    ];

    spyOn(licenceService, 'getLicences').and.returnValue(of(mockLicences));

    fixture.detectChanges();

    expect(component.licences$).toBeTruthy();

    component.licences$.subscribe((licences: Licence[]) => {
      expect(licences).toEqual(mockLicences);
    });
  });
});
