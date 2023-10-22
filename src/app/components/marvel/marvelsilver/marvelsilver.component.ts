import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-marvelsilver',
  templateUrl: './marvelsilver.component.html',
  styleUrls: ['./marvelsilver.component.css']
})
export class MarvelsilverComponent {
  silver:any = 1979;
  MARVEL: any = "MARVEL";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
