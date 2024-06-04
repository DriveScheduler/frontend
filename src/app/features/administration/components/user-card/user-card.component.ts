import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "src/app/shared/models/user";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user!: User;
  @Output() userDeleted: EventEmitter<number> = new EventEmitter<number>();


  deleteUser() {

  }
}
