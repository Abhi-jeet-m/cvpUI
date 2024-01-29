import React, { Component } from "react";

export default class AnnexureCBIN extends Component {
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
        <table
          style={{
            fontSize: "15px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="3" style={{ textAlign: "center" }}>
                <b style={{ fontSize: "10px", paddingTop: "10px" }}>
                  Annexure-A
                </b>
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="3" style={{ textAlign: "center" }}>
                <b
                  style={{
                    fontSize: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  Business Correspondent Agent Commission
                </b>
              </td>
            </tr>

            <tr colspan="3" style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>PARTICULARS</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                BCA PORTION
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
                A/c Opening
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                a. Rs.8/- for Activation of an account
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
                b. Rs.8/- for Rupay card issuance and activation of the card
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                2
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Deposit (Own Bank) Maximum txns amount of Rs.49000/- per
                day
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of txns amount Max Rs.40/- per CIF
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
                Cash Deposit (Other Bank) AEPS/ RUPAY Card txns
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of txns amount Max Rs.9.6/-
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
                {" "}
                Cash Withdrawal (Own Bank) Maximum txns amount of Rs.49000/- per
                day
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of txns amount Max Rs.40/- per CIF
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
                Cash Withdrawal (Other Bank) Maximum txns amount of Rs.10000/-
                per txn
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of txns amount Max Rs.9.6/-
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
                Fund Transfer (Own Bank) Maximum txns amount of Rs.10000/- per
                txn
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of txns amount Max Rs.8/-
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
                Fund Transfer (Other Bank - AEPS / RUPAY Card) Maximum txns
                amount of Rs.10000/- per txn
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of txns amount Max Rs.8/-
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
                TDR/RD Opening{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                The Incentives are payable for canvassing/facilitating deposits
                to the branches
                <br />6 month to less than 12 months - 0.12% (max of 16/- per
                funded account) 12 months and above - 0.16% (max of 16/- per
                funded account)
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
                Renew of TD
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
                10
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                IMPS / NEFT
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per txn
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
                Enroll for PMSBY
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 0.80/- per enrollment
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
                Enroll for PMJJBY
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 24/- per enrollment
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
                Enroll for APY
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 40/- per enrollment
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
                Incentives for fresh deposit business canvassed during the
                quarter(incremental) : Incentives is payable quarterly
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Increase up to 1 Lakh : Rs 125/-
                <br />
                Increase of above 1 Lakh to 2 Lakhs : Rs 300/-
                <br />
                Increase of above 2 Lakhs to 5Lakhs : Rs 500/-
                <br />
                Increase of above 5 Lakhs to 10 Lakhs : Rs 1000/-
                <br />
                Increase of above 10 Lakhs to 25 Lakhs : Rs 1500/-
                <br />
                Increase of above 25 Lakhs : Rs 2500/-
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
                Fixed Commissions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Below 25 txns - Nil
                <br />
                26 to 50 txns - 500/-
                <br />
                51 to 100 txns - 750/-
                <br />
                above 100 txns - 1000/-
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
                Aadhaar Seeding{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per successful a/c
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
                Mobile Seeding{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per account
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                18
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Passbook Updating/printing
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per passbook printed per customer
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
                Cheque Collection
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per cheque
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
                Mini Statement{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Nil
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
                BBPS
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 1.6/- per successful txns
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
                Pension Life Certificate authentication through Jeevan Pramaan
                (Aadhaar enabled)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 1.6/- per successful submission
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
                Request new cheque book
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
                24
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Stop payment of cheque
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
                25
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                SUKANYA SAMRIDDHI SCHEME Enrollment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 16/- per funded account
                <br />
                Rs. 8/- per txns with max Rs 16/- per month
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                26
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PPF
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 10/- per funded account
                <br />
                Rs. 8/- per txns with max Rs 16/- per month
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                27
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Recovery collection up to bank approved limit
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                In Substandard A/c - 0.80% of amount recovered Doubtful A/c -
                1.6% of amount recovered Written off A/c - 8% of amount
                recovered Note : The existing a/c with outstanding balance of Rs
                10 Lakh and below as on 31 mar 2020 or as decided by the bank ,
                may be considered for allotment to BC, However got written off
                a/c, the above cap may not be stipulated.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                28
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Request for SMS alert / email statement (if mobile no./email is
                already registered)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Nil
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                29
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Apply for RUPAY debit cards
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per successful card issuance and activation
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                30
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Block Rupay Card
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/- per successful card block
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                31
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                General Insurance
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20% of commissions received to the Bank
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                32
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Life Insurance
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20% of commissions received to the Bank
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                33
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Health Insurance
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20% of commissions received to the Bank
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                34
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Loan Sourcing
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of the disbursed amount subject to maximum amount of Rs
                8000/- per application, No commission will be payable for
                rejected loan application for whatsoever reason.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                35
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                SHG & JLG : For formations & promotion, Including credit linkage
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Not exceeding Rs.1000/- per SHG/JLG formed and credited linked
                with the Bank in stages
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td colspan="3" style={{ border: "1px solid black" }}>
                <b>Penalty</b>: i) Minimum 24 days Login in a month at least 1
                financial transactions per day : Nil
                <br />
                <span style={{ paddingLeft: "55px" }}>
                  ii) If login 20 – 23 days penalty of Rs.750/-
                  <br />
                </span>
                <span style={{ paddingLeft: "55px" }}>
                  {" "}
                  iii) If login 15 -19 days penalty of Rs.1500/-
                  <br />
                </span>
                <span style={{ paddingLeft: "55px" }}>
                  iv) If less than 15 days penalty of Rs.1500/- or amount of
                  fixed commission or whichever is higher
                </span>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td colspan="3" style={{ border: "1px solid black" }}>
                <b>
                  Service charges: Bank may revise the above rates at any time
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
