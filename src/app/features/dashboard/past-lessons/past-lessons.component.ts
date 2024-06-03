import {Component, Input} from '@angular/core';
import {Lesson} from "src/app/shared/models/lesson";
import {Observable} from "rxjs";

@Component({
  selector: 'app-past-lessons',
  standalone: true,
  imports: [],
  templateUrl: './past-lessons.component.html',
  styleUrl: './past-lessons.component.css'
})
export class PastLessonsComponent {

  @Input() pastLessons$!: Observable<Lesson[]>;

}
