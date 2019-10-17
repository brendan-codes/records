import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  record = {
    subject: '',
    desc: '',
    location: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getOneById(params.id);
    });
  }

  getOneById(id) {
    const observable = this.http.getRecordById(id);
    observable.subscribe((data: any) => {
      this.record = data;
      console.log(data);
    });
  }

}
