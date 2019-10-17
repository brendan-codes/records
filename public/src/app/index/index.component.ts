import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  records: any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getRecords();
    // console.log(this.records);
  }


  getRecords() {
    const observable = this.http.getRecords();
    observable.subscribe((data: any) => {
      this.records = data;
      console.log(data);
    });
  }

}
