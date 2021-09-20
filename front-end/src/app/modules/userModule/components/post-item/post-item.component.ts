import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: [
    './post-item.component.scss',
    '../../../postsModule/pages/post-page/post-page.component.scss'
  ]
})
export class PostItemComponent implements OnInit {
  @Input() title!:string;
  @Input() content!:string;
  @Output() del: EventEmitter<string> = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  rm(title: string) : void {
    this.userService.deletePost(title)
      .subscribe(data => {
        // console.log(data);
        this.del.emit(title);
      })
  }

}
