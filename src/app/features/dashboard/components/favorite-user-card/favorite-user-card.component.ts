import {Component, Input} from '@angular/core';
import {User} from "src/app/shared/models/user";

@Component({
  selector: 'app-favorite-user-card',
  standalone: true,
  imports: [],
  templateUrl: './favorite-user-card.component.html',
  styleUrl: './favorite-user-card.component.css'
})
export class FavoriteUserCardComponent {

  @Input() favoriteUserTimeSpent!: number;
  @Input() favoriteUser!: User;

}
