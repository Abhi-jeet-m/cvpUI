import React, { Component } from "react";

export default class AnnexureARYB extends Component {
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
          <tbody style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Service</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                BCA Share in Rs.
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
                1
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Fixed Charges for SSA Location</b>
              </td>
              <td></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Minimum 125 transactions in the month and for maintenance of the
                infrastructure required for fixed locations and also for the
                recurring expenses for running the BC outlet smoothly.
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1000
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                BCA to ensure that the Doorstep Banking is provided to the
                customers as envisaged in FIP
              </td>
              <td></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Variable Incentive</b>
              </td>
              <td></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                A/c Opening SB No frill/SB with Zero deposit or deposit up to
                Rs.499/-
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                8
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                A/c Opening SB No frill/SB with Zero deposit or deposit up to
                Rs.500 or above.
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
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>a. Cash Deposit</b>
              </td>
              <td></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40% of amount of transaction with min Rs.1.6 and Max Rs.16/-
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1.6-16
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>b. Cash Withdrawal</b>
              </td>
              <td></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40% of amount of transactions with min Rs.1.6 and Max Rs.16/-
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1.6-16
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>c. Remittances (Including non home transaction)</b>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Customer to be charges at the rate of Rs.20/- to be shared BC
                Rs.20/-
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br />

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
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Activity Detail</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>BCA Share in Rs.</b>
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
                1
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Incentive under PMSBY
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.80
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
                2
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Incentive under PMJJBY
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Q1-Rs.24/-
                <br />
                Q-2 Rs.18/-
                <br />
                Q-3-Rs.12/-
                <br />
                Q-4 Rs.6/-
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
                3
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Incentive under APY
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                40
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            textAlign: "center",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          <b>BC/BF compensation payable list</b>{" "}
        </div>
        <table
          style={{
            fontSize: "15px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              <b>Sl.No.</b>
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              <b>Particulars</b>
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              <b>Unit</b>
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              <b>
                Incentives ( All the remuneration to be Rounded off be Rounded)
              </b>
            </th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>
              <b>BCA Share</b>
            </th>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowSpan="4"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1
              </td>
              <td
                rowSpan="4"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Financing for New A/cs under Term Loans/Cash Credits (Only for
                New customers KCC accounts)
              </td>
              <td
                rowSpan="4"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Maximum Rs.3.00 Lac per proposal
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                a) 0.23% of the sanctioned and disbursed loan amount subject
                following
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.23
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
                i) Minimum Rs.112.50/- and Maximum Rs.525/-
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.112.5 - Rs.525
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
                ii) In case of Loan proposal of Solar Water Pump System Rs.750/-
                per case
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                750
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
                b) for mobilization of new PMJDY OD Limit accounts Rs.18.75/-
                per account incentive will be paid
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                18.75
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
                2
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                For Renewal of CC/OD/KCC Limits
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                For existing accounts, service charges are payable if the
                services are availed by customers @0.10% of credit limits
                subjects to following
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                i) Minimum of Rs.75/- and Maximum of Rs.187.50 per account (
                Repayment of renewal of limit)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                75 - 187.5
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowSpan="6"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>SHG/JLG:</b>
              </td>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>SHG</b>
              </td>
              <td></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                For Formation and promotion of SHG/JLG including credit linkage
              </td>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                i)Rs.300/- per SHG on promotion and saving linkage.
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                300
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                ii)Rs.300/- per SHG on credit linkage
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                300
              </td>
            </tr>


            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>JLG</b>
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
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                iii)Rs.300/- per JLG on promotion and credit linkage
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                300
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                iv) Rs. 300/- per JLG after one year of linkage on 1st full
                repayment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                300
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
                4
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Marketing of Solar Home Light Systems and generating Loan
                proposals and monitoring of the sets
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.112.5 on sourcing application and Rs.112.50 for maintenance
                in one year
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                112.5
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                rowSpan="4"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                a)Recovery of Loans/Advances excluding KCC renewed on same day (
                Through regular followup only)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Based on amount recovered with his efforts: ( The BCs are
                strictly advised not be take possession of assets etc. For
                recovery because it is regulatory provisions for debit recovery
                agent only)
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                i)Substandard accounts-0.75%
                <br />
                ii) Doubtful: 1.5%,
                <br />
                iii)Loss assets : 2.25%, <br />
                iv) Written of accounts : 3.75% of the amount recovered
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.75%, 1.5%, 2.25% & 3.75%
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
                a)NPA KCC account renewed on same day
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                i) Substandard account-0.38%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.38
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                ii) Doubtful-0.75%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.75
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
                b) Recovery in Divergent KCC accounts
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.18% of the recovery amounty
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.18%
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
                6
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Marketing of 3rd party products like insurance ( both life & non
                life) under tie up arrangement with Bank
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Based on amount of Premium collected from sold by BC
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Bank will publish the %age time to time
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
                7
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Delivery of recovery notices to borrower as per branch
                instructions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Based on number of recovery notices delivered
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.7.5/- recovery notices
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7.5
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
                8
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Mobilization of Deposit
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Based on balances in FI accounts and also mobilization of Term
                Deposits for bank
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.18% (maximum Rs.750/-) of Term deposit for 3 years and above
                in a single account
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.18% ( Max Rs.750/-)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
