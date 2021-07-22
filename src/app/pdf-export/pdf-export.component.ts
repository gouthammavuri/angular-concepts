import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
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

    html2canvas(htmlData).then(function (canvas) {
      canvas.getContext('2d');
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
      let PDF_Width = HTML_Width + (top_left_margin * 2);
      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;

      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      console.log(canvas.height + "  " + canvas.width);


      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jspdf('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);


      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height]);
        let margin = -(PDF_Height * i) + (top_left_margin * 4);
        if (i > 1) {
          margin = margin + i * 8;
        }
        console.log(top_left_margin);
        console.log(top_left_margin);
        console.log(-(PDF_Height * i) + (top_left_margin * 4));
        pdf.addImage(imgData, 'JPG', top_left_margin, margin, canvas_image_width, canvas_image_height);

      }

      pdf.save("HTML-Document.pdf");
    });
  };
}
