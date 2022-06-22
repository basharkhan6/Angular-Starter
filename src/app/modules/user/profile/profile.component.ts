import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) {
    console.log('ProfileComponent Constructor');
  }

  ngOnInit(): void {
    console.log('ProfileComponent OnInit');
    this.userService.getProfile().subscribe();
  }

}
