import React,{Component} from 'react'

export default class AnnexureBOI

extends Component{
    constructor(){
        super();
        var data = sessionStorage.getItem("additionalData")
        this.state={
            additionalData : JSON.parse(data),
            arr: sessionStorage.getItem("langCode"),
            selectedlang:"ENG"
        }

    }   
    

    render(){
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
                      Annexure A – ‘Commission for BCA Services’
                    </b>
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    colspan="3"
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      textAlign: "center",
                    }}
                  >
                    <b>BANK OF INDIA</b>
                  </td>
                </tr>

                <tr colspan="3" style={{ border: "1px solid black" }}>
                  <th
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    <b>Sl.No</b>
                  </th>
                  <th
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    <b>Services</b>
                  </th>
                  <th
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    <b>BCA Commission</b>
                  </th>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Each APY enrollment
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.64/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Each PMSBY account opening
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Re.0.8/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Each PMJJBY account opening
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.24/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Mobile Seeding for each account
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px;",
                    }}
                  >
                    Rs.4/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Aadhaar Seeding for each account
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.4/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Each Rupay Activation
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.4/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Txn charges ( All Type) AEPS Onus, Off us, FT, IST, MT, SHG,
                    UPI )
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    0.4% of Txn amount but Max of Rs Rs.20/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
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
                    Each eKYC Account opening -PMJDY
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.16/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    9
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    RD
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.8/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    10
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    TD
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    0.4% of TD amount but Max of Rs Rs.20/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    11
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    NEFT
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    0.20% -Min Rs.4/- and Max Rs.8/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    12
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    IMPS
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    0.20% -Min Rs.4/- and Max Rs.8/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    13
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Stop Payment of Cheque
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.1.6/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    14
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    New Cheque book request
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.1.6/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    15
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Apply Rupay debit card{" "}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.1.6/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    16
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
                    Rs.8/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    17
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Passbook update
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.1.6/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    18
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Renewal RD /TDR / MIC
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.8/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    19
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Block debit card request
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.1.6/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    20
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Pension life certificate (Aadhaar Enabled)
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Rs.4/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    21
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Remittance - Intra Bank- IST
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    0.4% of Txn amount but Max Rs.16/-
                  </td>
                </tr>

                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    22
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Remittance - Inter Bank - (Thru UPI mode)
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    0.4% of Txn amount but Max Rs.16/-
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );  
    }
}