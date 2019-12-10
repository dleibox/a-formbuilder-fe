import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../../../../environments/environment";
import { tap } from "rxjs/operators";

@Injectable()
export class FormBuilderService {
  private api = `${environment.dbUrl}/formitems`;
  constructor(private http: HttpClient) {}

  getFormItems(): Observable<any> {
    return this.http.get(`${this.api}`);
  }

  getFormItem(id: number): Observable<any> {
    if (id > 0) {
      return this.http.get(`${this.api}/${id}`).pipe(
        tap(i => {
          let json = null;
          try {
            json = JSON.parse(i.json);
          } catch {}
          i.json = json || {};
        })
      );
    } else {
      return of({
        id: 0,
        name: "",
        json: {
          components: []
        }
      });
    }
  }

  saveFormItem(id: number, data: any): Observable<any> {
    const fm = {
      ...data,
      json: JSON.stringify(data.json)
    };
    if (id === 0) {
      return this.http.post(`${this.api}`, fm);
    } else {
      return this.http.put(`${this.api}/${id}`, fm);
    }
  }

  deleteFormItem(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
