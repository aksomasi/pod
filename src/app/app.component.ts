import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header!: string;

  constructor(public router: Router) {
    router.events.subscribe((val: any) => {
      const url = val.url;
      switch (url) {
        case '/pod' :
          this.header = 'POD Details'
          break;
        case '/dashboard' :
          this.header = 'Dashboard'
          break;
        case '/course' :
          this.header = 'Course Details'
          break;
      }
    });

  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
