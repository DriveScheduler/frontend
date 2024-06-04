import {Component, Input} from '@angular/core';
import {User} from "src/app/shared/models/user";

@Component({
  selector: 'app-favorite-teacher-card',
  standalone: true,
  imports: [],
  templateUrl: './favorite-teacher-card.component.html',
  styleUrl: './favorite-teacher-card.component.css'
})
export class FavoriteTeacherCardComponent {

  @Input() favoriteTeacherTimeSpent!: number;
  @Input() favoriteTeacher!: User;

}
