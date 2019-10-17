import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  appRecords = [];
  constructor(private http: HttpService) {}

  ngOnInit() {
    const observable = this.http.getRecords();
    observable.subscribe((data: any) => {
      this.appRecords = data;
    });
  }


}
