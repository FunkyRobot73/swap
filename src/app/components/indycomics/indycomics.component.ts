import { Component } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-indycomics',
  templateUrl: './indycomics.component.html',
  styleUrls: ['./indycomics.component.css']
})
export class IndycomicsComponent {
  INDY:any = "Other";
  comicbook: any;
  constructor(private ComicService: ComicService) {}

  ngOnInit(): void {
  
    this.ComicService.getData().subscribe((data) => {
      this.comicbook = data;
    })
  
  }
}
