import React, { Component } from "react";

export default class AnnexureECORP extends Component {
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
                  ANNEXURE - A ( BUSINESS CORRESPONDENT AGENT COMMISSION)
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
                  UNION BANK OF INDIA (eCORP)
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
                  THRESHOLD LEVEL FIXED INCENTIVE
                </b>
              </td>
            </tr>

            <tr colspan="3" style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Criteria</b>
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
                &gt;100 Transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Work on all working days . BCA shall do txns in Minimum of 50
                unique accounts transactions in a month to eligible Threshold
                level fixed incentive
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
                  VARIABLE INCENTIVE
                </b>
              </td>
            </tr>

            <tr colspan="3" style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Sl.No.</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Criteria</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                BCA Portion
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
                  paddingLeft: "10px",
                }}
              >
                1 to 100 transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                25/ Txns
              </td>
              <td
                rowspan="7"
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>
                  <u>In-eligible txns are not considered for commissions:</u>
                </b>
                <br />
                a) Amount less than Rs.100/-.
                <br />
                b) More than 2 txns in a particular account per day.
                <br />
                c) Txns in the accounts of BCA.
                <br />
                d) Self Txns.
                <br />
                e) Split Txns.
                <br/><br/><br/>
						  Offline activities subject to acceptance of the data by the bank branch</td>
             
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                2
              </td>

              <td
                style={{
                  border: "1px solid black",
                  paddingLeft: "10px",
                }}
              >
                201 to 500 transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2.4/ Txns
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
                &gt;500 transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4/ Txns
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "center" }}>
                4
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                SB Account Enrolment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20 per A/c
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
                PMSBY - Enrolment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.8
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
                PMJJBY - Enrolment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                12
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
                APY - Enrolment
              </td>
              <td
                style={{
                  border: "1px solid black",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                80
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
