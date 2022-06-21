import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() {
    console.log('ToDo List Constructor');
  }

  ngOnInit(): void {
    console.log('ToDo List OnInit');
  }

}
