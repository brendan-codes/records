import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() oneRecord: any;

  constructor() { }

  ngOnInit() {
    console.log(this.oneRecord);
  }

}
