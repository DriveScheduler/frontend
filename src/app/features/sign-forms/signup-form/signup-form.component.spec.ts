import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignupFormComponent } from './signup-form.component';
import { LicenceService} from "../../../shared/services/licence/licence.service";
import { Licence} from "../../../shared/models/licence";
import { RouterTestingModule } from '@angular/router/testing';
import {of} from "rxjs";
import {environment} from "../../../../environment/environment";

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;
  let licenceService: LicenceService;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LicenceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    licenceService = TestBed.inject(LicenceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch licence types from backend', () => {
    const mockLicences: Licence[] = [
      { id: 0, label: 'B - Voiture' },
      { id: 1, label: 'C - Poids lourd' },
      { id: 2, label: 'A2 - Moto' },
      { id: 3, label: 'D - Bus' }
    ];

    spyOn(licenceService, 'getLicences').and.returnValue(of(mockLicences));

    fixture.detectChanges();

    expect(component.licences$).toBeTruthy();

    component.licences$.subscribe((licences: Licence[]) => {
      expect(licences).toEqual(mockLicences);
    });
  });
});
