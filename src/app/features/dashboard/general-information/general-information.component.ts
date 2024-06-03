import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GeneralInformation} from "src/app/shared/models/dashboard/generalIformation";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {LessonCardComponent} from "src/app/shared/components/lesson-card/lesson-card.component";
import {TeacherCardComponent} from "src/app/shared/components/teacher-card/teacher-card.component";
import {NumbersCardComponent} from "src/app/shared/components/numbers-card/numbers-card.component";

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [
    AsyncPipe,
    LessonCardComponent,
    TeacherCardComponent,
    NumbersCardComponent
  ],
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.css'
})
export class GeneralInformationComponent implements OnInit, OnDestroy {

  @Input() generalInformation$!: Observable<GeneralInformation>;

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
}
