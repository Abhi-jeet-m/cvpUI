import React, { Component } from "react";

export default class AnnexureIOB extends Component {
  constructor() {
    super();
    var data = sessionStorage.getItem("additionalData");
    this.state = {
      additionalData: JSON.parse(data),
      arr: sessionStorage.getItem("langCode"),
      selectedlang: "ENG",
    };
  }

  render() {
    return (
      <div style={{ fontFamily: "Times New Roman" }}>
        <p style={{ textAlign: "center" }}>
          <b style={{ fontSize: "14px", paddingTop: "10px" }}>
            Annexure-A
            <br />
            Business Correspondent Agent Commission
          </b>
        </p>
        <table
          style={{
            fontSize: "15px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <thead style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Sl.No
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              Services/Criteria
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              BCA commission in Rs.
            </th>
          </thead>
      
          <tbody style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
              <td style={{border:"1px solid black", textAlign:"center"}}>1</td>
              <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong>E_KYC enrolement</strong>: Each enrolment</p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>12</td>
            </tr>

            <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>2</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong><u>Financial Transactions</u>-</strong> Cost per transactions for Financial Transactions and for Non-Financial transactions such as Mini Statement and Balance Inquiry <strong>no commission will be paid. </strong> 
					      (The number of transactions done in a day per customer will be considered as one transaction only irrespective of the numbers either withdrawal or deposit for payment of commission)</p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>3.12</td>
				    </tr>
				
				    <tr>
					    <td style={{border:"1px solid blac", textAlign:"center"}}>3</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong><u>Fixed commission</u></strong> per BCA in a month based on the below eligibility criteria <strong>BC agent should do Minimum 300 Transactions</strong> in a month eligible for Fixed Commission.<br/> 
              (All transactions considered for Fixed commission should be financial transactions only. i.e. smart card, AEPS and ATM transactions. (The number of transactions done in a day per customer will be considered as one transaction only irrespective of the numbers either withdrawal or deposit for payment of commission)</p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>1600</td>
				    </tr>
				
            <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>4</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong>Commission for Other Services: <u>Recovery of NPA</u></strong><br/> 
						    1.25% to 2% of amount recovered. <br/>
						    The slab rate of commission payable to BCAs towards recovery of NPA is shown below: <br/>
						    Up to Rs.50000 <br/>
						    50001-1,00,000 <br/>
						    1,00,001 to 5,00,000 <br/>
						    More than 5,00,000 <br/>
						    <strong>Accounts which are classified as Doubtful and Loss assets are only eligible at present. Bank may decide on commission for Sub-standard and standard account at a later date</strong></p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>1%<br/>1.2%<br/>1.4%<br/>1.6%</td>
				    </tr>

            <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>5</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong><u>Opening Term Deposit:</u></strong><br/>0.50% of the amount deposited for a period not less than 6 months. 
                The maximum commission towards canvassing of Deposit should not exceed Rs.1500/- per BCA per month irrespective of amount and number of Deposit canvassed. 
                The total commission eligible is to be arrived at after considering the maximum celling for deposit canvassed for the month and to be paid at the end of six month. 
                For pre-mature closure of deposit within 6 months, the eligible total commission will be reworked and if it is more than the celing i.e. Rs.1500/- no deduction needs to be made. 
                Otherwise proportionate commission has to be deducted after six months. No commission is eligible for renewal of deposit and deposits of maturity of below 6 months</p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>0.4%(Maximum Rs.1200/-)</td>
				    </tr>

            <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>6</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p>Collection and preliminary processing of loan applications including verification of information /data
						    1% of the loan amount for all types of loans except agr.jewel loans/Jewel loans, Loan against NSC/IVP/LIC policies and shares, loan against Deposits and loans in the names of Staff members and BCA etc.,<br/> 
						    The Maximum commission towards canvassing of such loans should not exceed Rs.1500/- per BCA per month irrespective of amount of loan canvassed and no. of accounts.</p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>0.8%(Maximum Rs.1200/-)</td>
				    </tr>

            <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>7</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong><u>Jan Suraksha Products Viz., Per enrolment of PMJJBY, PMSBY and APY</u></strong><br/> PMJJBY<br/> PMSBY<br/> APY</p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>24<br/>0.80<br/>40</td>
				    </tr>
				
				    <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>8</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px", paddingLeft:"10px"}}><p><strong>Disbursement of Social Securities Scheme</strong></p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>Commission will be paid as per Financial Transactions only</td>
				    </tr>
				
				    <tr>
					    <td style={{border:"1px solid black", textAlign:"center"}}>9</td>
					    <td style={{border:"1px solid black", textAlign:"left", paddingRight:"10px",paddingLeft:"10px"}}><p><strong>IOB Suraksha per enrolment</strong></p></td>
					    <td style={{border:"1px solid black", textAlign:"center"}}>4</td>
				    </tr>
          </tbody>
        </table>
        <div style={{fontSize:"10px"}}><strong>Note 2: a.</strong> Service Charge and criteria may revise at any time by the bank. <strong>b.</strong> Self, Accommodative, Split and Low value transactions are not accepting for computing the commission. <strong>c.</strong> Minimum 25 days Login with 100 unique customers to be transacted in a month</div>
      </div>
    );
  }
}
