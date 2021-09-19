import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { UserService } from '../../modules/userModule/services/user.service';
import { Success } from '../../types/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  e: Success = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.login({
      username: this.username,
      password: this.password
    }).subscribe(data => {
      this.userService.setAuthToken(data);
      localStorage.setItem('bearer', data);
      this.userService.setUser(jwt_decode(data));
      this.userService.setLogged(true);
      this.router.navigate(['/user']);
    }, e => {
      this.e = e.error;
      this.password = '';
      console.log(e);
    })
  }

  setE(e: Event) : void {
    this.e = null;
  }

}
