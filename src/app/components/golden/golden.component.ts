import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';
@Component({
  selector: 'app-golden',
  templateUrl: './golden.component.html',
  styleUrls: ['./golden.component.css']
})
export class GoldenComponent {
  golden:any = 1979;
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
