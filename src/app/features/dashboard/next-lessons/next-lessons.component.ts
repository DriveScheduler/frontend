import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LessonCardComponent} from "src/app/features/dashboard/components/lesson-card/lesson-card.component";
import {Observable, Subscription} from "rxjs";
import {NextLessons} from "src/app/shared/models/dashboard/nextLessons";

@Component({
  selector: 'app-next-lessons',
  standalone: true,
  imports: [
    LessonCardComponent
  ],
  templateUrl: './next-lessons.component.html',
  styleUrl: './next-lessons.component.css'
})
export class NextLessonsComponent implements OnInit, OnDestroy{

  @Input() nextLessons$!: Observable<NextLessons | null>;

  nextLessons: NextLessons | null = null;
  nextLessonsSubscription!: Subscription;

  ngOnInit() {
    this.nextLessonsSubscription = this.nextLessons$.subscribe(data => {
      this.nextLessons = data;
    });
  }

  ngOnDestroy() {
    if (this.nextLessonsSubscription) {
      this.nextLessonsSubscription.unsubscribe();
    }
  }

  onLessonRemoved($event: number) {
    if (this.nextLessons) {
      this.nextLessons.tomorrow = this.nextLessons.tomorrow.filter(lesson => lesson.id !== $event);
      this.nextLessons.thisWeek = this.nextLessons.thisWeek.filter(lesson => lesson.id !== $event);
      this.nextLessons.thisMonth = this.nextLessons.thisMonth.filter(lesson => lesson.id !== $event);
      this.nextLessons.nextMonths = this.nextLessons.nextMonths.filter(lesson => lesson.id !== $event);
      this.nextLessons.today = this.nextLessons.today.filter(lesson => lesson.id !== $event);
    }
  }
}
