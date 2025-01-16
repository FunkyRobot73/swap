import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homecom',
  templateUrl: './homecom.component.html',
  styleUrls: ['./homecom.component.css']
})
export class HomecomComponent implements OnInit {
  data: any;
  company: any;
  searchTerm: string = "";

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    
   this.ApiService.getData().subscribe((data) =>
  
  {
    this.data = this.data;
    this.company = [...this.data]
  })
  }

  sortData() {
    this.company= this.data.filter((item:any) => {
      const values = Object.values(item).join('').toLowerCase();
      return values.includes(this.searchTerm.toLowerCase());
    });
  }
}
