import { Dropdown } from "bootstrap";
import React, { Component } from "react";

export default class AnnexureKGB extends Component {
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
              <td colspan="4" style={{ textAlign: "center" }}>
                <b style={{ fontSize: "10px", paddingTop: "10px" }}>
                  ANNEXURE - A (BUSINESS CORRESPONDENT AGENT COMMISSION)
                </b>
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="4" style={{ textAlign: "center" }}>
                <b
                  style={{
                    fontSize: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  KARNATAKA GRAMIN BANK
                </b>
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th colspan="6" style={{ textAlign: "center" }}>
                <b
                  style={{
                    fontSize: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  THRESHOLD LEVEL FIXED INCENTIVE
                </b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Criteria</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>BCA Portion in Rs.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Remarks</b>
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                1
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                {" "}
                Below 100 Transactions
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
              <td
                rowspan="4"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Serve all working days, BCA shall do a Minimum of 25 unique
                account transactions in a month to get eligible for threshold-level fixed
                incentive as per the criteria
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
                101 to 250 Transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
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
                251 to 350 Transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2800
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
                &gt;351 Transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4,000
              </td>
            </tr>

            {/* <tr style={{border:"1px solid black"}}> */}
            <th
              colspan="4"
              style={{ border: "1px solid black", textAlign: "center" }}
            >
              <b
                style={{
                  fontSize: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                VARIABLE INCENTIVE
              </b>
            </th>
            {/* </tr> */}

            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Sl.No.
              </th>
              <th style={{ border: "1px solid black", textAlign: "center",width:"25%" }}>
                Criteria
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                BCA Portion in Rs.
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Remarks
              </th>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                1
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Handling Charges
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
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Online - (in-eligible Txns), Amount Less than Rs.100/-, More than 2
                txns in a particular account per day, More than Rs.10,000/-(Including
                Dr.& Cr) in a particular account per day, transactions in the accounts
                of BCA, transactions done in accounts of in-eligible products (ex CA,
                OD, and CC.)
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }} rowSpan={4}>
                2
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
                rowSpan={4}
              >
                PMJJBY - Enrolment<br></br>
                Q1 -<br></br>
                Q2 -<br></br>
                Q3 -<br></br>
                Q4 -
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <br></br>
                Rs.6/-
              </td>
              <td
                rowspan="6"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Offline activities
              </td>
            </tr>
            <tr> <td
              style={{
                border: "1px solid black",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              Rs.24/-
            </td></tr>
            <tr> <td
              style={{
                border: "1px solid black",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              Rs.18/-
            </td></tr>
            <tr> <td
              style={{
                border: "1px solid black",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              Rs.12/-
            </td></tr>

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
                PMSBY - Enrolment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.0.80/-
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
                APY - Enrolment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.40/-
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
