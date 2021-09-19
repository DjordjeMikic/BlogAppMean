import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Success } from '../../services/type';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss', '../../user.component.scss']
})

export class AddPostComponent implements OnInit {
  title: string = '';
  content: string = '';
  e: Success = null;
  success: Success = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if(!this.title || !this.content) {
      this.e = 'Please without empty fields';
      return;
    }
    this.userService.addPost({
      id: 4,
      title: this.title,
      content: this.content
    }).subscribe(data => {
      this.success = data;
      this.title = '';
      this.content = '';
      // console.log(this.success);
    })
  }

  setE(e: Event) : void {
    this.e = null;
  }

  setSuccess(e: Event) : void {
    this.success = null;
  }

}
