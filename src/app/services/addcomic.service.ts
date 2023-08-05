import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icomic } from '../interfaces/idata';

@Injectable({
  providedIn: 'root'
})
export class AddcomicService {
  url = "https://back.swap2go.ca/addcomics"

  constructor(private httpClient: HttpClient) { }

  registerComics(formData: any){
    return this.httpClient.post<Icomic>('https://back.swap2go.ca/addcomics', formData)
  }

  createComic(data:any) {
    return this.httpClient.post<Icomic>(this.url, data);
  }
}
