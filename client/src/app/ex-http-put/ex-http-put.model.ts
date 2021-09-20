export class RevenueDetail {
    id: string;
	collectionCategory: ReferenceDescriptor<number>;
	collectionCaseID: string;
	outstandingBalance: number;
	totalDollarAmount: number;
	totalRecoveredAmount: number;
	vAClaims: VAClaimDetail[];
	insurances: InsuranceDetail[];
	natureOfInjury: string;
	dateOfInjury: Date;
	statuteOfLimitations? : Date;
	employer: ReferenceDescriptor<string>;
	tortFeasor: ReferenceDescriptor<string>;
	massLitigationType: ReferenceDescriptor<number>;
	vACustomerType: ReferenceDescriptor<number>;
}

export class ReferenceDescriptor<T> {
    id: T;
    text: string;
}

export class VAClaimDetail {
    collectionCaseId: string;
    collectionCaseBillId: string;
    billingVAMC: ReferenceDescriptor<string>;
    dollarAmount: number;
    recoveredAmount: number;
    lawsNumber: string;
}

export class InsuranceDetail {
	revenueInsuranceId: string;
	collectionCaseId: string;
	insuranceType: ReferenceDescriptor<number>;
	insuranceCompany: ReferenceDescriptor<string>;
	pOC: ReferenceDescriptor<string>;
	policyLimit: string;
	claimDeatils: string;
}