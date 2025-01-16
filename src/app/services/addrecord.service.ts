import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irecord } from '../interfaces/irecord';

@Injectable({
  providedIn: 'root'
})
export class AddrecordService {

  constructor(private httpClient2: HttpClient) { }

  registerRecord(formData2: any){
    return this.httpClient2.post<Irecord>('https://back.swap2go.ca/addrecord', formData2)
  }

  getRecordData2(): Observable<any> {
    return this.httpClient2.get<any>("https://back.swap2go.ca/records")
  }

}
