import React, { Component } from "react";

export default class AnnexureBOB extends Component {
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
          <b>Annexure A</b>– ‘Commission for BCA Services’
        </p>
        <table
          style={{
            fontSize: "15px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black" }}>
            <tr colspan="3" style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Services</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                BCA Portion
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowspan="2"
                style={{ border: "1px solid black", textAlign: "center" }}
              >
                1
              </td>
              <td
                rowspan="2"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Opening of saving bank account under non e-KYC
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per account, If not funded immediately
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- per account, If funded immediately
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowspan="5"
                style={{ border: "1px solid black", textAlign: "center" }}
              >
                2
              </td>
              <td
                rowspan="5"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Opening of saving bank account under e-KYC
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per account, If not funded immediately
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- per account, If initial deposit of Rs. 10 to Rs. 100.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 12/- per account, If initial deposit of Rs. 101 to Rs. 500.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 16/- per account, If initial deposit of Rs. 501 to Rs. 750.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 20/- per account, If initial deposit above Rs. 750.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                3
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Opening of Recurring Deposit account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- per account
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                4
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Opening of Fixed Deposit account (Max. 1 Lakh per a/c through
                transfer only)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of deposit amount; (Min. Rs. 0.80/- & Max of Rs. 16/- per
                a/c)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                5
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Deposit other than AEPS (Max 20,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min. Rs. 0.80/- & Max of Rs. 20/- per
                Transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                6
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Deposit (AEPS on-us) (Max 20,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min. Rs. 0.80/- & Max of Rs. 20/- per
                Transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                7
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Deposit (Using Rupay Card & AEPS off-us) (Max 10,000 per
                a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min. Rs. 0.80/- & Max of Rs. 16/- per
                Transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                8
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Withdrawal other than AEPS (Max 10,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min. Rs. 0.80/- & Max of Rs. 16/- per
                Transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                9
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash withdrawal using AEPS on-us & RuPay card on-us (Max 20,000
                per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min. Rs. 0.80/- & Max of Rs. 20/- per
                Transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                10
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash withdrawal using AEPS off-us & RuPay card off-us (Max
                10,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min. Rs. 0.80/- & Max of Rs. 16/- per
                Transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                11
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Remittance/Fund transfer within Bank and outside the bank with
                Aadhaar Number (Max 20,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.80% of the amount; (Min. Rs. 0.80/- & Max of Rs. 8/- per
                transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                12
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Remittance/Fund transfer through NEFT,etc. (Max 10,000 per a/c
                per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min Rs. 0.80/- & Max of Rs. 16/- per
                transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                13
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                IMPS Txns (Cash) (Max 10,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min Rs. 0.80/- & Max of Rs. 16/- per
                transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                14
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                IMPS Txns (Transfer) (Max 10,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min Rs. 0.80/- & Max of Rs. 8/- per
                transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                15
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Deposit in to Loan accounts (Max 49,000 per a/c per day)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the amount; (Min Rs. 0.80/- & Max of Rs. 16/- per
                transaction)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                16
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Pass Book Printing
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 0.80/- per occasion (proposed)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                17
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Aadhaar Seeding
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 2.40/- per account duly verified by branch in CBS
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowspan="5"
                style={{ border: "1px solid black", textAlign: "center" }}
              >
                18
              </td>
              <td
                rowspan="5"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMJJBY (for fresh online enrolment)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <span style={{ marginRight: "40px" }}>Enrolled IN </span>
                <span>Incentive Payable</span>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <span style={{ marginRight: "40px" }}>1st Quarter </span>
                <span>Rs. 24/- per policy</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <span style={{ marginRight: "40px" }}>2nd Quarter </span>
                <span>Rs. 18/- per policy.</span>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <span style={{ marginRight: "40px" }}>3rd Quarter </span>
                <span>Rs. 12/- per policy</span>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <span style={{ marginRight: "40px" }}>4th Quarter</span>
                <span>Rs. 6/- per policy</span>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                19
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMJJBY Auto renewal
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4.8/- per renewal (renewals from June-May enrolment period
                onwards)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                20
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMSBY (for fresh online enrolment)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 0.80/- per policy
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                21
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                APY (for fresh online enrolment)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                As prescribed by the Bank for each financial year
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                22
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Request for new cheque book
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per cheque book
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                23
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Stop payment for cheque
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per cheque Leaf
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                24
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Apply for Rupay Debit Card
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- per card
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                25
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Bharat Bill Payment Systems (BBPS)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the transaction amount; (Min Rs. 0.80/- & Max of Rs.
                8/- per successful transaction)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
