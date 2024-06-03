import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LessonCardComponent} from "src/app/shared/components/lesson-card/lesson-card.component";
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
}
