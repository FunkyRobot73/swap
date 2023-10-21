import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-silver',
  templateUrl: './silver.component.html',
  styleUrls: ['./silver.component.css']
})
export class SilverComponent {
silver:any = 1979;
comicbook: any;
constructor(private ComicService: ComicService) {}

ngOnInit(): void {

  this.ComicService.getData().subscribe((data) => {
    this.comicbook = data;
  })

}
}
