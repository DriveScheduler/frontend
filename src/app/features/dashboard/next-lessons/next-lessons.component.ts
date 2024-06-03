import {Component, Input} from '@angular/core';
import {LessonCardComponent} from "src/app/shared/components/lesson-card/lesson-card.component";
import {Observable} from "rxjs";
import {Lesson} from "src/app/shared/models/dashboard/lesson";

@Component({
  selector: 'app-next-lessons',
  standalone: true,
  imports: [
    LessonCardComponent
  ],
  templateUrl: './next-lessons.component.html',
  styleUrl: './next-lessons.component.css'
})
export class NextLessonsComponent {

  @Input() nextLessons$!: Observable<Lesson[]>;

}
