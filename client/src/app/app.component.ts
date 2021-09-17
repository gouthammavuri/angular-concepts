import { HttpClient } from '@angular/common/http';
import { OnChanges, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTablesParameters } from './models/datatables-parameters';
import { DataTablesResponse } from './models/datatables-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-concepts';
  
  constructor() { 

  }
  
  ngOnInit() {

  }
}
