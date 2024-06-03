import {Component, Input} from '@angular/core';
import {Lesson} from "src/app/shared/models/dashboard/lesson";

@Component({
  selector: 'app-lesson-card',
  standalone: true,
  imports: [],
  templateUrl: './lesson-card.component.html',
  styleUrl: './lesson-card.component.css'
})
export class LessonCardComponent {

  @Input() lesson!: Lesson;

}
