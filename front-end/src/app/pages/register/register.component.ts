import { Component, OnInit } from '@angular/core';
import { UserService } from '../../modules/userModule/services/user.service';
import { RegisterInfo, Success } from '../../types/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss']
})

export class RegisterComponent implements OnInit {
  info: RegisterInfo = {
    name: '',
    lname: '',
    username: '',
    email: '',
    password: ''
  }
  e: Success = null;
  success: Success = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.info)
      .subscribe(data => {
        this.success = data;
        this.info = {
          name: '',
          lname: '',
          username: '',
          email: '',
          password: ''
        }
      }, e => {
        this.e = e.error;
        console.log(e);
      })
  }

  setSuccess(e: Event) : void {
    this.success = null;
  }

  setE(e: Event) : void {
    this.e = null;
  }

}
