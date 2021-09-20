using System;
using System.Collections.Generic;

namespace dotnet.core.api 
{

    public class RevenueDetail
    {
        public RevenueDetail()
        {

        }

        public Guid Id{get; set;}
        public ReferenceDescriptor<byte> CollectionCategory {get; set;}
        public Guid CollectionCaseID { get; set;}
        public Decimal OutstandingBalance { get; set;}
        public Decimal TotalDollarAmount { get; set;}
        public Decimal TotalRecoveredAmount{ get; set;}
        public List<VAClaimDetail> VAClaims {get; set;}
        public List<InsuranceDetail> Insurances { get; set;}
        public string NatureOfInjury {get; set;}
        public DateTime DateOfInjury { get; set;}
        public DateTime? StatuteOfLimitations {get; set;}
        public ReferenceDescriptor<Guid> Employer{get; set;}
        public ReferenceDescriptor<Guid> TortFeasor {get; set;}
        public ReferenceDescriptor<byte> MassLitigationType { get; set;}
        public ReferenceDescriptor<byte> VACustomerType{get; set;}
    }

    public class InsuranceDetail
    {
        public InsuranceDetail()
        {

        }
        public Guid RevenueInsuranceId {get; set;}
        public Guid CollectionCaseId {get; set;}
        public ReferenceDescriptor<byte> InsuranceType{get; set;}
        public ReferenceDescriptor<Guid> InsuranceCompany{get; set;}
        public ReferenceDescriptor<Guid> POC {get; set;}
        public string PolicyLimit {get; set;}
        public string ClaimDeatils{ get; set;}
    }

    public class VAClaimDetail
    {
        public VAClaimDetail()
        {

        }
        public Guid CollectionCaseId{get; set;}
        public Guid CollectionCaseBillId{ get; set;}
        public ReferenceDescriptor<Guid> BillingVAMC{ get; set;}
        public decimal DollarAmount {get; set;}
        public decimal RecoveredAmount{get; set;}
        public string LawsNumber{get; set;}
	}

	public class ReferenceDescriptor<T>
	{
        public T Id{get; set;}
        public string Text{get; set;}

        public override string ToString()
        {
            if (!string.IsNullOrEmpty(Text))
                return "(" +Id.ToString()+")" +Text;
            else if (!string.IsNullOrEmpty(Id.ToString()))
                return Id.ToString();
            else
                return base.ToString();
        }
	}
}