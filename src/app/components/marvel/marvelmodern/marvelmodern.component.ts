import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-marvelmodern',
  templateUrl: './marvelmodern.component.html',
  styleUrls: ['./marvelmodern.component.css']
})
export class MarvelmodernComponent {
  modern:any = 1999;
  MARVEL: any = "MARVEL";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
