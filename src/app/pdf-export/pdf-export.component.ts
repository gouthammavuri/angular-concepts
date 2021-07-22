import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import html2canvas from 'html2canvas';
import jsPDF, { HTMLOptions } from 'jspdf';
import { jsPDFOptions } from 'jspdf';
import { DataTablesResponse } from '../models/datatables-response';

@Component({
  selector: 'app-pdf-export',
  templateUrl: './pdf-export.component.html',
  styleUrls: ['./pdf-export.component.css']
})
export class PdfExportComponent implements OnInit {

  pageSize: number = 46;
  pageNumber: number = 1;
  searchText: string = '';
  employees: any[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  dataSource = new MatTableDataSource<any>();

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
  // const htmltable: any = document.getElementById('htmlData');
  getPDF() {

    let htmlData: HTMLElement = document.getElementById('htmlData') as HTMLElement;
    console.log('htmlData', htmlData);

    let options: jsPDFOptions = {
      orientation: 'portrait',
      unit: 'pt',
      format: 'a1'
    };

    let htmlOptions: HTMLOptions = {
      html2canvas: {
        logging: false,
        backgroundColor: '#fff',
        allowTaint: true,
        taintTest: false,
        async: false,
        height: 1300,
        width: 1650,
      }
    };

    let pdf = new jsPDF(options);
    pdf.html(htmlData, htmlOptions).then(() => {
      pdf.save('abc.pdf');
    });
  };
}
