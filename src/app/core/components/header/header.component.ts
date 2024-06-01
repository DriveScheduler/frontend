import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { Subscription } from "rxjs";
import { UserService } from "src/app/shared/services/user/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLoggedIn: boolean = false;
  userFirstName!: string;
  private authSubscription!: Subscription;
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isUserLoggedIn = isAuthenticated;
    });

    if (this.isUserLoggedIn) {
      this.userService.getUser().subscribe();
      this.userSubscription = this.userService.user$.subscribe(user => {
        if (user) {
          this.userFirstName = user.firstName;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
