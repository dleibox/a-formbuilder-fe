import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FormBuilderService {
  private api = 'http://localhost:8080/formitems';
  constructor(private http: HttpClient) {}

  getFormItem(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  saveFormItem(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, data);
  }
}
