import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTableComponent } from './angular-table/angular-table.component';
import { JqueryDatatablesComponent } from './jquery-datatables/jquery-datatables.component';
import { PdfExportComponent } from './pdf-export/pdf-export.component';

const routes: Routes = [{
    path: 'angulartable', component: AngularTableComponent
  }, {
    path:'jquerydatatable', component: JqueryDatatablesComponent
  }, {
    path:'pdfexport', component: PdfExportComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
