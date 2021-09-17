import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTablesResponse } from '../models/datatables-response';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-angular-table',
  templateUrl: './angular-table.component.html',
  styleUrls: ['./angular-table.component.css']
})
export class AngularTableComponent implements OnInit {

  pageSize: number = 10;
  pageNumber: number = 1;
  searchText: string = '';
  employees: any[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.pageNumber = 1;
    this.getEmployeeFromAPI(this.pageNumber, this.pageSize, this.searchText);
  }

  getEmployeeFromAPI(pageNumber: number, pageSize: number, searchText: string) {
    let dataTablesParameters = {
      pageNumber: pageNumber,
      pageSize: pageSize,
      searchText: searchText
    };
    this.http.post<DataTablesResponse>('https://localhost:5001/employee/serversidepagination', dataTablesParameters, {})
      .subscribe(resp => {
        this.employees = resp.data;
        this.totalRecords = resp.totalRecords;
        this.dataSource = new MatTableDataSource<any>(this.employees);
        this.loading = false;
    });
  }

}
