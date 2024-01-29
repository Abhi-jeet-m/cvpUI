import React, { Component } from "react";

export default class AnnexureUJVN extends Component {
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
            Money Mitra Commission
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
          <tr style={{ border: "1px solid black", textAlign: "center" }}>
            <b>Incentive Slab lakh wise</b>
          </tr>
          <tbody style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
              <th
                colspan="2"
                style={{ border: "1px solid black", textAlign: "center" }}
              >
                <b>Lakhs</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                <b>Slab For Thousands in %</b>
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Below Threshold in Rs.
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Above Threshold in Rs.
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Threshold Incentives in Rs.
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Next Threshold in Rs.
              </th>
              <th style={{ border: "1px solid black", textAlign: "center" }}>
                Total Payable to Money Mitra in Rs.
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
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Below 1 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.00%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
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
                1 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                400
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                400
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
                2 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                800
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                800
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
                3
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1200
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1200
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
                4
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
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
                5
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.40%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4100
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
                6
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4600
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
                7
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5100
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
                8
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                8 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5600
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
                9
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                9 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6100
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
                10
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                10 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6600
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
                11
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                11 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7100
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
                12
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                12 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7600
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
                13
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                13 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                8100
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
                14
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                14 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.50%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                8600
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
                15
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                15 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                9100
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
                16
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                16 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                10200
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
                17
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                17 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1200
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                11300
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
                18
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                18 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7000
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1800
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                12400
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
                19
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                19 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2400
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                13500
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
                20
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                14100
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
                21
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                21 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                3600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                14700
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
                22
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                22 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4200
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                15300
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
                23
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                23 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4800
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                15900
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
                24
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                24 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                5400
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                16500
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
                25
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                25 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                17100
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
                26
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                26 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                6600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                17700
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
                27
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                27 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7200
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                18300
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
                28
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                28 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7800
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                18900
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
                29
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                29 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                8400
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                19500
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
                30
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                30 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.60%
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1600
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                7500
              </td>

              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                2000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                9000
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                20100
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
