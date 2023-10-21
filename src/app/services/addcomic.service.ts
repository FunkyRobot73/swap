import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idata } from '../interfaces/idata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcomicService {
  url = "https://back.swap2go.ca/addcomics/"

  url2 = 'https://back.swap2go.ca/comics'

  constructor(private httpClient: HttpClient) { }

  registerComic(formData: any){
    return this.httpClient.post<Idata>('https://back.swap2go.ca/addcomics', formData)
  }

  createComic(data:any) {
    return this.httpClient.post<Idata>(this.url, data);
  }
}
