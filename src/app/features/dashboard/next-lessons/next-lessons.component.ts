import { Component } from '@angular/core';
import {LessonCardComponent} from "src/app/shared/components/lesson-card/lesson-card.component";

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

}
