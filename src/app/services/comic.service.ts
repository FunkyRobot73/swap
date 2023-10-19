import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icomic } from '../interfaces/idata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://back.swap2go.ca/comics')
  }

  getData2(){
    return this.http.get('https://back.swap2go.ca/records')
  }
}
