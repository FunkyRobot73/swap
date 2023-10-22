import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-marvelgolden',
  templateUrl: './marvelgolden.component.html',
  styleUrls: ['./marvelgolden.component.css']
})
export class MarvelgoldenComponent {
  golden:any = 1959;
  MARVEL: any = "MARVEL";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
};
