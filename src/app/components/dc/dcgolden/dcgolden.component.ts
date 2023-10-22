import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-dcgolden',
  templateUrl: './dcgolden.component.html',
  styleUrls: ['./dcgolden.component.css']
})
export class DcgoldenComponent {
  golden:any = 1959;
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
