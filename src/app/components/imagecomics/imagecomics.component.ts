import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-imagecomics',
  templateUrl: './imagecomics.component.html',
  styleUrls: ['./imagecomics.component.css']
})
export class ImagecomicsComponent {
  IMAGE:any = "Image";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
