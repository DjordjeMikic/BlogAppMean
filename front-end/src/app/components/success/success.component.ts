import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})

export class SuccessComponent implements OnInit {
  @Input() desc!:string;
  @Output() setSuccess: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void { }

  cls() {
    this.setSuccess.emit();
  }
}
