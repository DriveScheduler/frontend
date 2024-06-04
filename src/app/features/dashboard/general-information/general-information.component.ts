import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GeneralInformation} from "src/app/shared/models/dashboard/generalIformation";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {LessonCardComponent} from "src/app/features/dashboard/components/lesson-card/lesson-card.component";
import {FavoriteUserCardComponent} from "src/app/features/dashboard/components/favorite-user-card/favorite-user-card.component";
import { NumberCardVehicleComponent } from "src/app/features/dashboard/components/number-card-vehicle/number-card-vehicle.component";
import { NumberCardHoursComponent } from "src/app/features/dashboard/components/number-card-hours/number-card-hours.component";
import {User} from "src/app/shared/models/user";

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [
    AsyncPipe,
    LessonCardComponent,
    FavoriteUserCardComponent,
    NumberCardVehicleComponent,
    NumberCardHoursComponent
  ],
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.css'
})
export class GeneralInformationComponent implements OnInit, OnDestroy {

  @Input() generalInformation$!: Observable<GeneralInformation>;
  @Input() user! : User;

  private generationInformationSubscription!: Subscription;
  protected generalInformation!: GeneralInformation;

  ngOnInit() {
    this.generationInformationSubscription = this.generalInformation$.subscribe(data => {
      this.generalInformation = data;
    });
  }

  ngOnDestroy() {
    if (this.generationInformationSubscription) {
      this.generationInformationSubscription.unsubscribe();
    }
  }

  onLessonRemoved($event: number) {
    if (this.generalInformation.nextLesson) {
      this.generalInformation.nextLesson = null;
    }
  }
}
