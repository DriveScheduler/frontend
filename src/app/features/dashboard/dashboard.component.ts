import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "src/app/shared/services/user/user.service";
import {Observable, Subscription} from "rxjs";
import {User} from "src/app/shared/models/user";
import {CommonModule} from "@angular/common";
import {LessonCardComponent} from "src/app/shared/components/lesson-card/lesson-card.component";
import {
  GeneralInformationComponent
} from "src/app/features/dashboard/general-information/general-information.component";
import {NextLessonsComponent} from "src/app/features/dashboard/next-lessons/next-lessons.component";
import {PastLessonsComponent} from "src/app/features/dashboard/past-lessons/past-lessons.component";
import {GeneralInformation} from "src/app/shared/models/dashboard/generalIformation";
import {Lesson} from "src/app/shared/models/lesson";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LessonCardComponent, GeneralInformationComponent, NextLessonsComponent, PastLessonsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  user!: User;
  userSubscription!: Subscription;
  activeIndex: number = 0;

  generalInformation$! : Observable<GeneralInformation>;
  nextLessons$!: Observable<Lesson[]>;
  pastLessons$!: Observable<Lesson[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
    this.getUserGeneralInformation();
    this.getUserNextLessons();
    this.getUserPastLessons();
  }

  getUser() {
    this.userSubscription = this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  getUserGeneralInformation() {
    this.generalInformation$ = this.userService.getUserDashboard()
  }

  getUserNextLessons() {
    this.nextLessons$ = this.userService.getUserNextLessons();
  }

  getUserPastLessons() {
    this.pastLessons$ = this.userService.getUserPastLessons();
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
