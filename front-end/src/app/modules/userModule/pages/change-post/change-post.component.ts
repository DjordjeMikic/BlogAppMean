import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Post } from '../../../../types/post';
import { Success } from '../../services/type';

@Component({
  selector: 'app-change-post',
  templateUrl: './change-post.component.html',
  styleUrls: [
    './change-post.component.scss',
    '../../user.component.scss',
    '../add-post/add-post.component.scss'
  ]
})

export class ChangePostComponent implements OnInit {
  post!:Post;
  success: Success = null;
  e: Success = null;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPost(this.userService.getPath(this.router.url))
      .subscribe(data => {
        this.post = data;
      })
  }

  onSubmit() {
    this.userService.changePost(this.post.title, this.post.content)
      .subscribe(data => {
        this.success = data;
      }, (e) => {
        console.log(e);
        this.e = e.statusText;
      })
  }

  setE() : void {
    this.e = null;
  }

  setSuccess() : void {
    this.success = null;
  }

}
