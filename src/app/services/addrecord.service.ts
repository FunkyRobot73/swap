import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irecord } from '../interfaces/irecord';
import { AddrecordComponent } from '../components/addrecord/addrecord.component';

@Injectable({
  providedIn: 'root'
})
export class AddrecordService {
  url = "https://back.swap2go.ca/addrecord";
 

  constructor(private httpClient: HttpClient) { }

  registerRecord(formData: any): Observable<any>{
    return this.httpClient.post(this.url, formData)
  }

  create(data:any): Observable<any> {
      return this.httpClient.post<Irecord>(this.url, data);
    }

}
