import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../../services/posts.service';
import { Post } from '../../../../types/post';

@Component({
  selector: 'app-authorposts',
  templateUrl: './authorposts.component.html',
  styleUrls: ['./authorposts.component.scss']
})

export class AuthorpostsComponent implements OnInit {
  path: string = '';
  posts!:Post[];
  lnk: string = '../../post/';

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPostsByUrl(this.router.url)
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      })
  }

}
