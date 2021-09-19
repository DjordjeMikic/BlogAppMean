import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from '../../../../services/posts.service';
import { UserService } from '../../../userModule/services/user.service';

import { Post } from '../../../../types/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})

export class PostPageComponent implements OnInit {
  post!:Post;
  logged: boolean = !true;

  constructor(
    private postsService: PostsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPost(this.router.url);
    this.logged = this.userService.loggedIn;
    console.log(this.logged);
  }

  getPost(a: string) {
    this.postsService.getPostByTitle(a)
      .subscribe(data => {
        this.post = data;
        console.log(data);
      })
  }

}
