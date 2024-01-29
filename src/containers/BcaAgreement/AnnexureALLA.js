import { Dropdown } from "bootstrap";
import React, { Component } from "react";

export default class AnnexurePUNB extends Component {
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
              <td style={{ textAlign: "center" }}>
                <b style={{ fontSize: "10px", paddingTop: "10px" }}>
                  Annexure A – ‘Commission for BC Services’
                </b>
              </td>
            </tr>
        

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>A. Fixed Pay Component to Bank Mitra Commission Structure</b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  During the 1st Six Months from the date of activation of
                  outlet, Minimum 250 Customer accounts comprising SB Accounts,
                  Retail Deposits would be eligible for Rs.4000/- p.m. Fixed pay
                  or on proportion basis working at least 25 days in a month.
                  The number of non-working days less than 25 shall be deducted
                  @Rs.500/- per day as penalty. The date of activation would be
                  the date of first transaction.
                </li>
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
                <li>
                  During the 1st six months of the kiosk operation or after six
                  months at least 500 transactions per month along with at least
                  10 customer enrolment in a month in the form of SB, Retail
                  Deposits, PMJJBY, PMSBY or APY or any other products launched
                  time to time by bank. Only carrying out transactions would not
                  be eligible for fixed pay remuneration of Rs.4000/- p.m. Bank
                  Mitras carrying out only minimum 500 transactions or above
                  would be paid Rs.2000/- fixed per month or on proportionate
                  basis.
                </li>
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
                <li>
                  If the variable component of commission including incentive of
                  Bank Mitra’s are Rs.25,000/- or more they shall not be
                  eligible for fixed pay component of Rs.4000/-
                </li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>B. Account Opening</b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  Rs.16/- per SB account enrolment opened through any mode shall
                  be payable to Bank Mitra.
                </li>
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
                <li>Rs.8/- per RD/FD/DDP/MIP enrolment</li>
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
                <li>As per various slab rate for PMJJBY-Max Rs.24/-</li>
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
                <li>Rs.0.80/- for PMSBY</li>
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
                <li>Rs.40/- per Fresh enrolment in APY; Rs.20 per renewal</li>
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
                System based check in place that the closed accounts re-opened
                by any Bank Mitras shall not be eligible for commission. The
                RD/FD/DDP accounts opened by Bank Mitras in their own CIF shall
                not be eligible for commission. All other KYC/PMLA guidelines
                including submission of PAN or Form 60 for Rs.50000/- or above
                deposit shall be continued to be applicable at kiosk points.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>
                  C. Cash Deposit other than AEPS & Cash Deposit (AEPS On us)
                </b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Up to Rs.12.50 Lakh:</b>
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
                <li>0.32% of the transaction amount</li>
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
                <b>Above Rs.12.50 Lakh but less than equal to Rs.50 Lakh:</b>
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
                <li>0.16% of the transaction amount </li>
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
                <b>
                  <li>Above Rs.50 Lakh:</li>
                </b>
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
                <li>0.08% of the transaction amount </li>
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
                <li>Third Party deposit permitted </li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <li>
                Intra Day Limit on Deposits fixed at Rs.10000/- (20,000) per day
                per customer with maximum number of transactions fixed at Ten
                (10) per month and fixed at Two (2) per day. This is applicable
                to all accounts including PMJDY.{" "}
              </li>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  Per transaction ticket size limit Rs.10,000/- (Maximum per
                  Transaction)
                </li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>
                  D. Cash Deposit (AEPS Off us)- Acquirer & Issuer (Currently
                  Service is not available)
                </b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  0.32% of the amount; Min. Rs.0.80/- & Max. of Rs.8/- per
                  transaction
                </li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingleft: "10px",
                }}
              >
                <li>
                  Max Rs.10,000/- per account per day with maximum number of
                  transactions fixed at 1.
                </li>
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
                <li>No Third-Party Deposit and Only AEPS platform</li>
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
                <li> Per transaction ticket size Rs.10,000/- </li>
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
                <li>
                  No commission shall be payable if any BC does deposit in
                  his/her own account maintained in other banks.
                </li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>E. Cash Withdrawal (AEPS On us & Rupay Card)</b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Up to Rs.12.50 Lakh:</b>
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
                <li>0.32% of the transaction amount</li>
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
                <b>Above Rs.12.50 Lakh but less than equal to Rs.50 Lakh:</b>
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
                <li>0.16% of the transaction amount </li>
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
                <b>
                  <li>Above Rs.50 Lakh:</li>
                </b>
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
                <li>0.08% of the transaction amount </li>
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
                <li>
                  {" "}
                  Withdrawal limit per customer per day has been fixed Rs.
                  10,000 from Kiosk channel with max Two (2) transactions per
                  day per customer
                </li>
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
                <li>No Third Party withdrawal is permitted.</li>
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
                <li>Per transaction ticket size Rs.10,000/-</li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>
                  F. Cash Withdrawal (AEPS off us & Rupay Card)-Acquirer &
                  Issuer
                </b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  0.32% of the amount; Min. Rs.0.80/- & Max. of Rs.8/- per
                  transaction
                </li>
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
                <li>
                  Max Rs.10,000/- per account per day with maximum transactions
                  per day per customer restricted to 2.
                </li>
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
                <li>No Third-Party withdrawal and Only AEPS/Rupay platform</li>
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
                <li> Per transaction ticket size Rs.10,000/- </li>
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
                <li>
                  No commission shall be payable if any BC does withdrawal in
                  his/her own account maintained in other banks.
                </li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>
                  H. Remittance/Fund Transfer within bank and outside the Bank
                  with Aadhaar No./IMPS
                </b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  0.80% of the amount; Min. Rs.0.80/- & Max. of Rs.12/- per
                  transactionn
                </li>
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
                <li>IMPS-Only Transfer platform shall be added.</li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <b>I. Deposit to Term Loan Accounts</b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>0.32% of the transactions amount in Non Hilly areas.</li>
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
                <li>0.48% of the transactions amount in Hilly areas.</li>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <b>J. Transactions in restricted accounts</b>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <li>
                  No Commission is payable in transactions in CC/OD, KCC,
                  Current Accounts and as per Ineligible Transaction marked at
                  bank level etc.
                </li>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}
