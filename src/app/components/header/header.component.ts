import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName!: string;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo != null) {
      const data = JSON.parse(userInfo);
      this.userName = data.name;
    }
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.router.navigateByUrl('');
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
