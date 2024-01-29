import React, { Component } from "react";

export default class AnnexureKVGB extends Component {
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
                  ANNEXURE - A ( BUSINESS CORRESPONDENT AGENT COMMISSION)
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
                  KARNATAKA VIKAS GRAMEENA BANK
                </b>
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Monthly BCA commission as per threshold transaction</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Financial Transactions</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                BCAs Portion in INR
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td rowspan="5" style={{ border: "1px solid black" }}></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0-249
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
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
                250-300
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2250
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
                301-500
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3000
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
                Above 500
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3375
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
                BC will be paid the above remuneration based on his/her
                achievement on the activities and accepted by the Bank in
                financial transactions during the month
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Customer mobilization(For BCA activities)</b>
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
                Savings Bank account opening
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Per Account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                16
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
                Recurring Deposit account opening
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Per Account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3
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
                Fixed Deposit account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Per Account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Customer Initiated cash transactions</b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowspan="2"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Handling charges ON-US transactions except SHG
                repayments(Cash In and Cash out)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash In: 0.40% In cash Amount
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
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
                Cash Out:0.40% In cash out amount
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
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
                Cash Handling charges OFF-US transactions(Cash In and Cash out)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20% of transaction amount with a maximum of Rs.5/-per
                transaction{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.20%
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
                SHG Repayments (Cash -In Only)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.10% on cash in amount{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.10%
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Customer Initiated Non cash transactions</b>
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
                Remittance/Fund transfer
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.4/- Per transaction{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4
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
                Aadhaar Number seeding through Micro ATM
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.3.5/- for each successfully updated record
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3.5
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
                Mobile Number seeding through Micro ATM
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.3.5/-for each successfully updated record
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3.5
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b style={{ color: "red" }}>
                  Note:
                  <br />
                  Not considering, SPLIT, SELF, ACCOMMODATIVE AND FICTICIOUS
                  TRANSACTIOINS while computing the Service Charges
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
