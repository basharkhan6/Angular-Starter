import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() {
    console.log('ToDo AddComponent Constructor');
  }

  ngOnInit(): void {
    console.log('ToDo AddComponent OnInit');
  }

}
