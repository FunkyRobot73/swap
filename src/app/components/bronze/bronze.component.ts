import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-bronze',
  templateUrl: './bronze.component.html',
  styleUrls: ['./bronze.component.css']
})
export class BronzeComponent {
  bronze:any = 1979;
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
