import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Licence} from "src/app/shared/models/licence";
import {LicenceService} from "src/app/shared/services/licence/licence.service";
import {AdministrationService} from "src/app/shared/services/administration.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";
import {FormUtilsService} from "src/app/shared/services/form_utils/form-utils.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {CustomInputComponent} from "src/app/shared/components/custom-input/custom-input.component";

@Component({
  selector: 'app-vehicle-creation-modal',
  standalone: true,
  imports: [
    AsyncPipe,
    CustomInputComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './vehicle-creation-modal.component.html',
  styleUrl: './vehicle-creation-modal.component.css'
})
export class VehicleCreationModalComponent implements OnInit {

  @Output() vehicleCreated : EventEmitter<void> = new EventEmitter<void>();

  vehicleCreationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    registrationNumber: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  vehicleTypes$!: Observable<Licence[]>;

  constructor(
    private licenceService: LicenceService,
    private administrationService: AdministrationService,
    private formUtilsService: FormUtilsService,
    private customSnackbar: CustomSnackbarService
  ) { }

  ngOnInit() {
    this.getLicences();
  }

  private getLicences() {
    this.vehicleTypes$ = this.licenceService.getLicences();
  }

  addVehicle() {
    if (this.vehicleCreationForm.invalid) {
      this.formUtilsService.markFormGroupDirty(this.vehicleCreationForm);
      this.customSnackbar.show('Veuillez renseigner tous les champs correctement.', 'error');
      return;
    }

    const name = this.vehicleCreationForm.value.name as string;
    const registrationNumber = (this.vehicleCreationForm.value.registrationNumber as string).toUpperCase();
    const type = parseInt(this.vehicleCreationForm.value.type as string, 10);

    const vehicleData = {
      registrationNumber,
      name,
      type
    };

    this.administrationService.createVehicle(vehicleData).subscribe(
      () => {
        this.customSnackbar.show('Véhicule créé !', 'success');
        this.vehicleCreated.emit();
        this.restoreForm();
      },
      error => {
        this.customSnackbar.show(error.error, 'error');
        this.restoreForm();
      }
    );
  }

  restoreForm() {
    this.vehicleCreationForm.controls.type.setValue('');
    this.vehicleCreationForm.controls.name.setValue('');
    this.vehicleCreationForm.controls.registrationNumber.setValue('');
  }
}
