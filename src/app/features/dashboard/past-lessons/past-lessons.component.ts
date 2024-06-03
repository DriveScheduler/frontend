import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {PastLessons} from "src/app/shared/models/dashboard/pastLessons";

@Component({
  selector: 'app-past-lessons',
  standalone: true,
  imports: [],
  templateUrl: './past-lessons.component.html',
  styleUrl: './past-lessons.component.css'
})
export class PastLessonsComponent implements OnInit, OnDestroy {

  @Input() pastLessons$!: Observable<PastLessons>;

  pastLessons!: PastLessons;
  pastLessonSubscription!: Subscription;

  ngOnInit() {
    this.pastLessonSubscription = this.pastLessons$.subscribe(data => {
      this.pastLessons = data;
      console.log(this.pastLessons)
    });
  }

  ngOnDestroy() {
    if (this.pastLessonSubscription) {
      this.pastLessonSubscription.unsubscribe();
    }
  }
}
