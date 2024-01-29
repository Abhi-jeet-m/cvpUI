import { Dropdown } from "bootstrap";
import React, { Component } from "react";

export default class AnnexureUCO extends Component {
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
          <b>
            Annexure-A <br />
            Business Correspondent Agent Commission
          </b>{" "}
        </p>
        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <th
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  width: "10%",
                }}
              >
                Sl.No.
              </th>
              <th
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  width: "60%",
                }}
              >
                Criteria
              </th>
              <th
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  width: "30%",
                }}
              >
                BCA Portion
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Fixed Charges per month (Minimum Threshold) ( Minimum 22 days
                Login & 200 Transactions)
                <br />
                <div style={{ textAlign: "Left" }}>
                  FI locations
                  <br />
                </div>
                <div style={{ textAlign: "Left" }}>
                  Urban FI location
                  <br />
                </div>
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <br />
                Rs.5000/-
                <br />
                Rs.7500/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Transactions Charges
                <br />
                &gt;= 200 Transaction to 250 Txns <br />
                &lt; 251 transactions
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Re.1/-
                <br />
                Rs.1.50
              </td>
            </tr>

            <tr style={{ border: "1px 0px 0px 0px" }}>
              <th
                colspan="3"
                style={{ border: "1px solid black", textAlign: "center" }}
              >
                Non SSA Locations (Expansion of BC Services)
                <br />
                Metro, Rural, Semi Urban, Un-banked Rural and Urban Locations
              </th>
            </tr>
          </tbody>
        </table>

        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <th
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                FEATURES
              </th>
              <th
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                BCA PORTION
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                a) Fixed Charges for Metro & Urban BC
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                No fixed charges
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                b) Fixed Charges for Semi Urban & Rural BC
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                No fixed charges{" "}
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                c) Variable charges - Cash Handling & Transaction charges (cash
                in cash out)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash in & Cash out - 0.64% on transaction value
                <br />
                Cash in (deposit) - Max Rs. 80/- per transaction
                <br />
                Cash in (withdrawal) - Max Rs. 40/- per transaction
                <br />
              </td>
            </tr>

            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Additional charges</b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Current/Saving Bank account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                e-KYC based SB account opening - Rs. 40/- per account
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Recurring Deposit (RD) account opening
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 40/- per account
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Fixed Deposit (FD) account opening
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of Deposit amount (subject to min Rs. 80/- to Max Rs.
                800/-)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                TD account opening
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of Deposit amount (subject to min Rs. 80/- to Max Rs.
                800/-)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                NEFT
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.64% on transaction value (Max Rs. 80/-)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                IMPS
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.64% on transaction value (Max Rs. 80/-)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                BBPS (Bharat Bill payment System) - Utility Bill payment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- per transaction
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Third party Insurance enrollment (General Insurance)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 40/- per enrollment
              </td>
            </tr>

            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Asset Sourcing</b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Canvassing KCC/GCC
              </td>
              <td
                rowspan="6"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Lead/Loan Origination Rs. 80/- per lead (On Conversion)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Soft Lead generation (Any loan leads generated)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Business loan sourcing
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Vehicle loan sourcing
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Home loan sourcing
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Gold loan sourcing
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                {" "}
                Gold Loan verification
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 80/- per loan
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Social Security Schemes (PMJJBY,PMSBY,APY etc.,)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                BCA will be paid 80% on commission earned by the BC against
                receipt of the payment by the bank.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "Left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Note:Transactions will not consider for computing the commission
                <br />
                a. Low Value transactions
                <br />
                b. Split transactions
                <br />
                c. Accommodate transactions
                <br />
                d. Self transactions
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
