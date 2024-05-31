import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "src/app/shared/services/authentication/authentication.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLoggedIn: boolean = false;
  private authSubscription!: Subscription;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isUserLoggedIn = isAuthenticated;
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
