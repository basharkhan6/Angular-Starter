import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ToasterService} from './core/services/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToasterService]
})
export class AppComponent implements OnInit {
  title = 'angular-starter';

  showNav = false;
  showHeader = false;
  showFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNav = this.activatedRoute.firstChild?.snapshot.data['showNav'] !== false;
        this.showHeader = this.activatedRoute.firstChild?.snapshot.data['showHeader'] !== false;
        this.showFooter = this.activatedRoute.firstChild?.snapshot.data['showFooter'] !== false;
      }
    });
  }
}
