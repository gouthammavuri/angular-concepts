import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularTableComponent } from './angular-table/angular-table.component';
import { JqueryDatatablesComponent } from './jquery-datatables/jquery-datatables.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PdfExportComponent } from './pdf-export/pdf-export.component';
import { MatConExComponent } from './mat-con-ex/mat-con-ex.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalComponent } from './mat-cal/mat-cal.component';
import { AutocomExComponent } from './autocom-ex/autocom-ex.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConfigurationService } from './services/configuration-service';


@NgModule({
  declarations: [
    AppComponent,
    AngularTableComponent,
    JqueryDatatablesComponent,
    PdfExportComponent,
    MatConExComponent,
    MatCalComponent,
    AutocomExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule, 
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [CurrencyPipe, ConfigurationService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
