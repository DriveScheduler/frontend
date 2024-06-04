import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {PastLessons} from "src/app/shared/models/dashboard/pastLessons";
import {LessonCardComponent} from "src/app/features/dashboard/components/lesson-card/lesson-card.component";

@Component({
  selector: 'app-past-lessons',
  standalone: true,
  imports: [
    LessonCardComponent
  ],
  templateUrl: './past-lessons.component.html',
  styleUrl: './past-lessons.component.css'
})
export class PastLessonsComponent implements OnInit, OnDestroy {

  @Input() pastLessons$!: Observable<PastLessons | null>;

  pastLessons: PastLessons | null = null;
  pastLessonSubscription!: Subscription;

  ngOnInit() {
    this.pastLessonSubscription = this.pastLessons$.subscribe(data => {
      this.pastLessons = data;
    });
  }

  ngOnDestroy() {
    if (this.pastLessonSubscription) {
      this.pastLessonSubscription.unsubscribe();
    }
  }
}
