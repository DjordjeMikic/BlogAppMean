import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  posts!:Post[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMyPosts()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      })
  }

}
