import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-authorized-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './not-authorized-page.component.html',
  styleUrl: './not-authorized-page.component.css'
})
export class NotAuthorizedPageComponent {

}
