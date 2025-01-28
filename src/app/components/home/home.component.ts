
import { Component, OnInit } from '@angular/core';

import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  comicbook: any; // Displayed and sorted data
  searchTerm: string = '';
  


  constructor(private ComicService: ComicService) {}
  

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.data = data;
      this.comicbook = [...this.data]
    })
  
  }

  

  sortData() {
    this.comicbook = this.data.filter((item:any) => {
      const values = Object.values(item).join('').toLowerCase();
      return values.includes(this.searchTerm.toLowerCase());
    });
}
}
