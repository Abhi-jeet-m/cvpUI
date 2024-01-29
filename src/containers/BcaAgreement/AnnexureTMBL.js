import { Dropdown } from "bootstrap";
import React, { Component } from "react";

export default class AnnuxureTMBL extends Component {
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
                BCA Portion in Rs.
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
                <b>FI Locations</b>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                a) Fixed Charges per month
                <br />
                b) Minimum 20 days Login
                <br />
                c) 120 Financial transactions
                <br />
                d) 50 Unique customer
                <br />
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.3000/-
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
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                e) Transactions incentive &gt;120 txns
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.5/- Per transactions
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
                <b>Urban Locations:</b>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
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
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                a) Fixed Charges
                <br />
                b) Minimum 20 days Login
                <br />
                c) 120 Financial Transactions
                <br />
                d) 50 Unique customer
                <br />
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                e) Semi urban, Rural
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.4000
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
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                f) Metro,Urban
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.7500
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
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                g) Transactions incentive &gt;120 txns
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs.4/- Per transactions
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
                Note:
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Transactions will not consider for computing the commission
                <br />
                a. Low Value transactions
                <br />
                b. Split transactions
                <br />
                c. Accommodate transactions
                <br />
                d. Self transactions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
