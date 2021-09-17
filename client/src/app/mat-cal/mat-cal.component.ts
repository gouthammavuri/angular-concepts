import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../date-validator';

@Component({
  selector: 'app-mat-cal',
  templateUrl: './mat-cal.component.html',
  styleUrls: ['./mat-cal.component.css']
})
export class MatCalComponent implements OnInit {

  exForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.exForm = this.fb.group({
      matDateControl: new FormControl('', [DateValidator])
    });
    // mm/dd/yyyy
    this.addingSeperatorToDate('/');
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.exForm.controls[controlName].hasError(errorName);
  }

  addingSeperatorToDate(seperator: string) {
    var jqDate = $('input[name="matcalender"]');
    jqDate.bind("keydown", "keyup", (e) => {
      if(e.keyCode !== 8) {
        const txtValue = jqDate.val()?.toString().length;
        if(txtValue === 2 || txtValue === 5){
          let thisVal: string = jqDate.val() as string;
          thisVal += seperator;
          jqDate.val(thisVal);
        }
      }
    });
  }
}
