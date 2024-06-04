import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lesson} from "src/app/shared/models/dashboard/lesson";
import {LessonService} from "src/app/shared/services/lessons/services/lesson.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";
import {User} from "src/app/shared/models/user";

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
  @Input() user!: User;
  @Output() lessonRemoved: EventEmitter<number> = new EventEmitter<number>();


  constructor(private lessonService: LessonService, private customSnackbar: CustomSnackbarService) {
  }

  removeLesson() {
    if(this.user!.userType.value == 0) {
      this.lessonService.removeStudentFromLesson(this.lesson.id).subscribe(
        response => {
          this.customSnackbar.show('Réservation annulée !', 'success')
          this.lessonRemoved.emit(this.lesson.id);
        },
        error => {
          this.customSnackbar.show(error.error, 'error')
        });
    }
    else {
      this.lessonService.deleteLesson(this.lesson.id).subscribe(
        response => {
          this.customSnackbar.show('Cours annulé !', 'success')
          this.lessonRemoved.emit(this.lesson.id);
        },
        error => {
          this.customSnackbar.show(error.error, 'error')
        });
    }
  }
}
