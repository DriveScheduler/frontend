import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Licence} from "src/app/shared/models/licence";
import {User} from "src/app/shared/models/user";
import {UserService} from "src/app/shared/services/user/user.service";
import {AsyncPipe} from "@angular/common";
import {LicenceService} from "src/app/shared/services/licence/licence.service";

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
  selectedTeachers$ : string[] = [];
  onlyEmptyLessons$ : boolean = false;
  

  @Output() filterChange = new EventEmitter<any>();
  
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

  toggleTeacherSelection(teacherId: string, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
    
    if (isChecked) {
      this.selectedTeachers$.push(teacherId);
    } else {
      const index = this.selectedTeachers$.indexOf(teacherId);
      if (index > -1) {
        this.selectedTeachers$.splice(index, 1);
      }
    }
    this.emitFilterChange();
  }

  toggleStatusSelection(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
    
    if (isChecked) {
      this.onlyEmptyLessons$ = true;
    } else {
      this.onlyEmptyLessons$ = false;
    }
    this.emitFilterChange();
  }

  private emitFilterChange() {
    this.filterChange.emit({
      teachers: this.selectedTeachers$,
      onlyEmpty: this.onlyEmptyLessons$
    });
  }

}
