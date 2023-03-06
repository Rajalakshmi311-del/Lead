import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeadserviceService } from '../leadservice.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  pagesize: number = 10;
  tablesizes: number[] = [10,25, 50, 100];

  data : any[] = [];
  
  constructor(private service : LeadserviceService , private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/api/excel/tutorials').subscribe(data => {
      this.data = data;
    });
  }

getdatar(){
  this.service.getdata().subscribe(res=>{
    res = this.data
    console.log(res);
    
  })
}
}
