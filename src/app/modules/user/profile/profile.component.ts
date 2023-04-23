import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../../shared/interfaces/user';
import { ToasterService } from '../../../core/services/toaster.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User = {} as User;

  constructor(private userService: UserService, private toasterService: ToasterService) {
    console.log('ProfileComponent Constructor');
  }

  ngOnInit(): void {
    console.log('ProfileComponent OnInit');
    this.userService.getProfile().subscribe({
      next: data => this.user = data,
      error: () => this.toasterService.error('Error', 'Failed to load user data')
    });
  }

}
