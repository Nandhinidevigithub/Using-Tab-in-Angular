import { Component,Input,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  @Input('url') url_tab : any;
  
  constructor(private http: HttpClient) { }
  
  dataSource : any
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'profileImage'];
  jsoninfo : any
  headername : any
  ngOnInit() {
   
    
    
    const url : string = this.url_tab;
    this.http.get(url).subscribe((response) => 
    {
         this.jsoninfo = response;
         this.headername = Object.keys(this.jsoninfo[0]);
         this.dataSource =  new MatTableDataSource (this.jsoninfo);
         console.log(this.headername);
         console.log(typeof(this.headername));
         console.log(this.jsoninfo); 
         console.log(typeof(this.jsoninfo)); 
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
          
    })
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
}

