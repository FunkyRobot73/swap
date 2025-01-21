import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  data: any;
    company: any; // Displayed and sorted data
    searchTerm: string = '';
    constructor(private ApiService: ApiService) {}
  
    ngOnInit(): void {
    
      this.ApiService.getData().subscribe((data) => {
        this.data = data;
        this.company = [...this.data]
      })
    
    }
  
    sortData() {
      this.company = this.data.filter((item:any) => {
        const values = Object.values(item).join('').toLowerCase();
        return values.includes(this.searchTerm.toLowerCase());
      });
  }

}
