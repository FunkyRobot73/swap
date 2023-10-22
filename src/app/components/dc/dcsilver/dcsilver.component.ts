import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-dcsilver',
  templateUrl: './dcsilver.component.html',
  styleUrls: ['./dcsilver.component.css']
})
export class DcsilverComponent {
  silver:any = 1979;
  DC:any = "DC";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
