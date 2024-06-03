import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-teacher-card',
  standalone: true,
  imports: [],
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.css'
})
export class TeacherCardComponent {

  @Input() favoriteTeacherTimeSpent!: number;
  @Input() favoriteTeacher!: string;

}
