import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irecord } from '../interfaces/irecord';

@Injectable({
  providedIn: 'root'
})
export class AddrecordService {

  constructor(private httpClient: HttpClient) { }

  registerRecord(formData: any){
    return this.httpClient.post<Irecord>('https://back.swap2go.ca/addrecord', formData)
  }

  getRecordData2(): Observable<any> {
    return this.httpClient.get<any>("https://back.swap2go.ca/addrecord/")
  }

}
