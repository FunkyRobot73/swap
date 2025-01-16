import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idata } from '../interfaces/idata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcomicService {
  url = "http://back.swap2go.ca/addcomics"

  url2 = 'https://back.swap2go.ca'

  constructor(private httpClient: HttpClient) { }

  registerComic(formData: any): Observable<any>{
    return this.httpClient.post(this.url, formData, {
      // headers: new HttpHeaders({})
    })
  }

  createComic(data:any): Observable<any> {
    return this.httpClient.post<Idata>(this.url, data);
  }
}
