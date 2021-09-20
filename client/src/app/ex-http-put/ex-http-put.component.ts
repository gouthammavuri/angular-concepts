import { Component, OnInit } from '@angular/core';
import { ExHttpPutService } from './ex-http-put.service';
import { RevenueDetail } from './ex-http-put.model';

@Component({
  selector: 'app-ex-http-put',
  templateUrl: './ex-http-put.component.html',
  styleUrls: ['./ex-http-put.component.css']
})
export class ExHttpPutComponent implements OnInit {

  constructor(private exHttpPutService: ExHttpPutService) { }

  ngOnInit(): void {
  }

  onSubmitClick() {
    let revenueDetail: RevenueDetail = {
      id: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
      collectionCategory: {
        id: 10,
        text: 'text'
      },
      collectionCaseID: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
      outstandingBalance: 10,
      totalDollarAmount: 10,
      totalRecoveredAmount: 10,
      vAClaims: [{
        collectionCaseId: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
        collectionCaseBillId: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
        billingVAMC: {
          id: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
          text: 'text'
        },
        dollarAmount: 10,
        recoveredAmount: 10,
        lawsNumber: 'lawsNumber'
      }],
      insurances: [{
        revenueInsuranceId: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
        collectionCaseId: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
        insuranceType: {
          id: 100,
          text: 'helo'
        },
        claimDeatils: 'claimDeatils',
        insuranceCompany: {
          id: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
          text: 'insuranceCompany'
        },
        pOC: {
          id: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
          text: 'text'
        },
        policyLimit: 'policyLimit'
      }],
      natureOfInjury: 'natureOfInjury',
      dateOfInjury: new Date(),
      statuteOfLimitations: new Date(),
      employer: {
        id: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
        text: 'text'
      },
      tortFeasor: {
        id: 'eb4d0370-554c-45c9-9458-92861a15b6a9',
        text: 'text'
      },
      massLitigationType: {
        id: 10,
        text: 'text'
      },
      vACustomerType: {
        id: 20,
        text: 'text'
      }
    };
    this.exHttpPutService.exHttpPut(revenueDetail).subscribe(x => {
      console.log(x);
    });
  }
}
