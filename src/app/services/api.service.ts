import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://back.swap2go.ca/company"

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl)
  }

  postFormData(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData, {
      headers: new HttpHeaders({
        // You may not need to set the Content-Type for form-data
      })
    });
  }

}
