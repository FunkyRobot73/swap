import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.css']
})
export class ModernComponent {
modern:any = 2000;
comicbook: any;
constructor(private ComicService: ComicService) {}

ngOnInit(): void {

  this.ComicService.getData().subscribe((data) => {
    this.comicbook = data;
  })

}
}
