import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
