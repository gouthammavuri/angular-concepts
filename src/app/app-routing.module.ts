import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTableComponent } from './angular-table/angular-table.component';
import { AutocomExComponent } from './autocom-ex/autocom-ex.component';
import { JqueryDatatablesComponent } from './jquery-datatables/jquery-datatables.component';
import { MatCalComponent } from './mat-cal/mat-cal.component';
import { MatConExComponent } from './mat-con-ex/mat-con-ex.component';
import { PdfExportComponent } from './pdf-export/pdf-export.component';

const routes: Routes = [{
    path: 'angulartable', component: AngularTableComponent
  }, {
    path:'jquerydatatable', component: JqueryDatatablesComponent
  }, {
    path:'pdfexport', component: PdfExportComponent
  }, {
    path:'matcontrol', component: MatConExComponent
  }, {
    path:'matcal', component: MatCalComponent
  }, {
    path:'matauto', component: AutocomExComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
