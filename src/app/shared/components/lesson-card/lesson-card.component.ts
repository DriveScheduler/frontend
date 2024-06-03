import {Component, Input} from '@angular/core';
import {Lesson} from "src/app/shared/models/dashboard/lesson";
import {LessonService} from "src/app/shared/services/lessons/services/lesson.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";

@Component({
  selector: 'app-lesson-card',
  standalone: true,
  imports: [],
  templateUrl: './lesson-card.component.html',
  styleUrl: './lesson-card.component.css'
})
export class LessonCardComponent {

  @Input() lesson!: Lesson;
  @Input() past: boolean = false;

  constructor(private lessonService: LessonService, private customSnackbar: CustomSnackbarService) {
  }

  removeLesson() {
    this.lessonService.removeStudentFromLesson(this.lesson.id).subscribe((data) => {
      this.customSnackbar.show('Réservation annulée !', 'success')
    });
  }
}
