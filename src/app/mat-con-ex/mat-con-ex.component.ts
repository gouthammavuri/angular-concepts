import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateValidator } from '../date-validator';


@Component({
  selector: 'app-mat-con-ex',
  templateUrl: './mat-con-ex.component.html',
  styleUrls: ['./mat-con-ex.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    }
  ]
})
export class MatConExComponent implements OnInit {

  currencyCode: string = '';
  fee: any;
  exForm: FormGroup;

  constructor(private currencyPipe : CurrencyPipe, public fb: FormBuilder) { 

  }

  ngOnInit(): void {
      this.exForm = this.fb.group({
        amount: [''],
        age:['', [
          Validators.required, // Validators
          Validators.min(1),
          Validators.max(20)
        ]],
        sampleDate:['', [
          Validators.required, Validators.maxLength(10)]
        ]   
    })
  }

  transformAmount(){
    let amount: string = this.exForm.get('amount')?.value;
    if(amount.toString().indexOf('$') == 0) {
      amount = amount.substring(1);
    }
    let transformedAmount = this.currencyPipe.transform(+amount.replace(',',''), 'USD', 'symbol');
    this.exForm.get('amount')?.patchValue(transformedAmount);
  }

  onSubmit() {
    let amount: string = this.exForm.get('amount')?.value;
    let age: number = this.exForm.get('age')?.value;
    let sampleDate: string = this.exForm.get('sampleDate')?.value;
    if(amount.toString().indexOf('$') == 0) {
      amount = amount.substring(1);
    }
    //here we have amount value without dollar which can be passed to api
    let finalAmountasNumber: number = +amount.replace(',','');
    //Converting to mm/dd/yyyy
    let sampleDateAsString: string = new Date(sampleDate).toLocaleDateString('en-US');
    console.log('formValue', {
      "amount": finalAmountasNumber,
      "age": age,
      "sampleDate": sampleDateAsString
    }); 
  }
}
