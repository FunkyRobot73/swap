import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idata } from '../interfaces/idata';

@Injectable({
  providedIn: 'root'
})
export class AddcomicService {
  url = "https://back.swap2go.ca/addcomic"

  constructor(private httpClient: HttpClient) { }

  registerComic(formData: any){
    return this.httpClient.post<Idata>('https://back.swap2go.ca/addcomic', formData)
  }

  createBlog(data:any) {
    return this.httpClient.post<Idata>(this.url, data);
  }
}
