import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newRecord = {
    subject: '',
    desc: '',
    location: ''
  };

  errors;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  createRecord() {
    console.log("button clicked!");
    const observable = this.http.postRecord(this.newRecord);
    observable.subscribe((data: any) => {
      if (data.message === 'fail') {
        this.errors = data.err.errors;
      } else {
        this.router.navigate(['/']);
      }
    });
  }


}
