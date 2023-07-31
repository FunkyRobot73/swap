import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  comicbooks: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbooks = data;
    })
  
  }
}
