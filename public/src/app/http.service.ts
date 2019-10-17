import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getRecords() {
    return this.http.get('/records');
  }

  getRecordById(id) {
    return this.http.get(`/records/${id}`);
  }

  postRecord(data) {
    return this.http.post('/records', data);
  }

  deleteRecord(id) {
    return this.http.delete(`/records/${id}`);
  }

  updateRecordById(id, data) {
    return this.http.put(`/records/${id}`, data);
  }

}
