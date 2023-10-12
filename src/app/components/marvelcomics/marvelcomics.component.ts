import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-marvelcomics',
  templateUrl: './marvelcomics.component.html',
  styleUrls: ['./marvelcomics.component.css']
})
export class MarvelcomicsComponent {
  MARVEL:any = "MARVEL";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
