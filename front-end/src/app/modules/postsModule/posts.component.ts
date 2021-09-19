import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { UserService } from '../userModule/services/user.service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts!:Post[];

  lnk:string = '/post/';

  constructor(private postsService: PostsService, private userService: UserService) { }

  ngOnInit() {
    this.getPosts();
    this.userService.checkIsLogged();
  }

  getPosts() : void {
    this.postsService.getPosts()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      })
  }

}
