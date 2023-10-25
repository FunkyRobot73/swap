import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  comicbook: any;
  filteredData: any; // Displayed and sorted data
  searchTerm: string = '';
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
      this.filteredData = [...this.comicbook]
    })
  
  }

  sortData() {
    this.filteredData = this.comicbook.filter((item:any) => {
      const values = Object.values(item).join('').toLowerCase();
      return values.includes(this.searchTerm.toLowerCase());
    });
  }
  
}
