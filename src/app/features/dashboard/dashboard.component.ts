import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "src/app/shared/services/user/user.service";
import {Subscription} from "rxjs";
import {User} from "src/app/shared/models/user";
import {CommonModule} from "@angular/common";
import {LessonCardComponent} from "src/app/shared/components/lesson-card/lesson-card.component";
import {
  GeneralInformationComponent
} from "src/app/features/dashboard/general-information/general-information.component";
import {NextLessonsComponent} from "src/app/features/dashboard/next-lessons/next-lessons.component";
import {PastLessonsComponent} from "src/app/features/dashboard/past-lessons/past-lessons.component";

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
    this.getUserDashboard();
  }

  getUser() {
    this.userSubscription = this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  getUserDashboard() {
    this.userService.getUserDashboard().subscribe(data => {
      console.log(data);
    });
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
