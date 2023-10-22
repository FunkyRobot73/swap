import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-dcbronze',
  templateUrl: './dcbronze.component.html',
  styleUrls: ['./dcbronze.component.css']
})
export class DcbronzeComponent {
  bronze:any = 1999;
  DC:any = "DC";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
