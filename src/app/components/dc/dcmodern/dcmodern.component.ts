import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-dcmodern',
  templateUrl: './dcmodern.component.html',
  styleUrls: ['./dcmodern.component.css']
})
export class DcmodernComponent {
  modern:any = 2000;
  DC:any = "DC";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
