import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
    console.log('Dashboard Constructor');
  }

  ngOnInit(): void {
    console.log('Dashboard OnInit');
  }

}
