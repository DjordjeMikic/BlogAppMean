import { Component, OnInit } from '@angular/core';
import { UserService } from '../../modules/userModule/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  loggedIn: boolean = !true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loginChange.subscribe((data: boolean)=> {
      console.log(data);
      this.loggedIn = data;
    })
  }

  logout() {
    this.userService.logout();
    this.loggedIn = false;
  }
}
