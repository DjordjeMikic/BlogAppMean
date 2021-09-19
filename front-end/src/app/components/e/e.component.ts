import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss', '../success/success.component.scss']
})
export class EComponent implements OnInit {
  @Input() desc!:string;
  @Output() setE: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  cls() : void {
    this.setE.emit();
  }

}
