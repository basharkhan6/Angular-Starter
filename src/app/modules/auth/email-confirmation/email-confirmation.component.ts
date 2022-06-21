import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  public verified: boolean = false;
  public inValidToken: boolean = false;
  private readonly key: string | null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.key = this.route.snapshot.queryParams['key'];
  }

  ngOnInit(): void {
    if (this.key) {
      this.authService.confirmEmail(this.key).subscribe({
        next: () => {
          this.verified = true;
          setTimeout(() => {
            this.router.navigate(['/auth/sign-in']);
          },3000);
        },
        error: () => this.inValidToken = true
      })
    } else {
      this.inValidToken = true;
    }
  }

}
