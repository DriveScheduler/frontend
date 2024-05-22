import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Licence} from "../../../shared/models/licence";
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user/user.service";
import {AsyncPipe} from "@angular/common";
import {LicenceService} from "../../../shared/services/licence/licence.service";

@Component({
  selector: 'app-calendar-filters',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './calendar-filters.component.html',
  styleUrl: './calendar-filters.component.css'
})
export class CalendarFiltersComponent implements OnInit {

  teachers$!: Observable<User[]>;
  licences$!: Observable<Licence[]>;

  constructor(private userService: UserService, private licenceService: LicenceService) {}

  ngOnInit() {
    this.getTeachers();
    this.getLicences();
  }

  private getTeachers() {
    this.teachers$ = this.userService.getTeachers();
  }
  private getLicences() {
    this.licences$ = this.licenceService.getLicences();
  }
}
