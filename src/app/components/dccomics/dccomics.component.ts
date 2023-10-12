import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-dccomics',
  templateUrl: './dccomics.component.html',
  styleUrls: ['./dccomics.component.css']
})
export class DccomicsComponent {
  DC:any = "DC";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }

}
