import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../../services/posts.service';
import { Post } from '../../../../types/post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  posts!:Post[];
  lnk: string = '../../post/';

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoryPosts();
  }

  getCategoryPosts() : void {
    this.postsService.getPostsByUrl(this.router.url)
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      })
  }

}
