import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-marvelbronze',
  templateUrl: './marvelbronze.component.html',
  styleUrls: ['./marvelbronze.component.css']
})
export class MarvelbronzeComponent {
  bronze:any = 1999;
  MARVEL: any = "MARVEL";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
