import React, { Component, Suspense } from 'react'
import { AppHeader } from '@coreui/react';
import Loader from 'react-loader'
import DefaultHeader from '../PledgeInfoDoc/DefaultHeader'
import { URL } from '../../Constant';

let docList = [];
let langCode=[];
class DocumentList extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      isdisable: false,
      Fee: 0,
      Records: 0
    }
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
    let Fee;
    let Records;
    var body = {
      "empCode": sessionStorage.getItem("empid"),
      "empname": sessionStorage.getItem("empname"),
      "companyCode": sessionStorage.getItem("empcompany"),
      "authToken": sessionStorage.getItem("authToken"),
      "empGroup": sessionStorage.getItem("empGroup")
    };
    this.setState({ loaded: false })
    fetch(URL.getDocList, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json()
    }).then((responseJson) => {
      if (responseJson.status === "SUCCESS") {
        docList = responseJson.docList;
           
        Fee = responseJson.penatlyFee;
        Records = responseJson.Records;
        if (Fee > 0) {
          document.getElementById("penaltyMsg").style.display = ""
          document.getElementById("noteMsg").style.display = ""
        }
        this.setState({ Fee: Fee })
        this.setState({ loaded: true })
      }
      else {
        this.setState({ loaded: true })
        alert(responseJson.statusDetails)
      }
    }).catch(e => {
      this.setState({ loaded: true })
      alert(e)
    })
  }

   signOut(e) {
    e.preventDefault()
    if (sessionStorage.getItem("type") === "BC") {
      this.props.history.push("/CVP/bclogin")
      sessionStorage.clear()
    } else {
      this.props.history.push("/CVP/empLogin")
      sessionStorage.clear()
    }
  }
  

  documentType = (docCode) => {
    // if (docCode === "BCAA") {
    //   sessionStorage.setItem("docCode", docCode);
    // }
    // if (docCode === "CVP") {
    //   sessionStorage.setItem("docCode", docCode);
    // }
    sessionStorage.setItem("docCode", docCode);
  }

  renderTableData() {
    return docList.map((data, i) => {
      // let href;
      // let download = <a href={URL.downloadDoc + "/" + data.txnID} id="download">Download</a>
      // if (data.docCode === "BCAA" && data.signOrder === 0) {
      //   sessionStorage.setItem("signOrder", data.signOrder)
      //   href = "/CVP/bcaAgreement"
      // }
      // if (data.docCode === "BCAA" && data.signOrder === 1) {
      //   sessionStorage.setItem("signOrder", data.signOrder)
      //   sessionStorage.setItem("txnID", data.txnID)
      //   sessionStorage.setItem("docCode", data.docCode)
      //   href = "/CVP/witnessInfo"

      // }
      // if (data.docCode === "BCAA" && data.signOrder === 2) {
      //   sessionStorage.setItem("signOrder", data.signOrder)
      //   href = ""
      // }
      // if (data.docCode === "CVP") {
      //   href = "/CVP/pledgeInfoDoc"
      // }
      // let status
      // if (data.signOrder === 0) {
      //   status = "Please sign"
      //   download = ""

      // }
      // if (data.signOrder === 1) {
      //   status = "Witness Sign Pending"

      // }
      // if (data.signOrder === 2 || data.signOrder >= 2) {
      //   status = "Signing Completed"
      //   href = ""
      // }
      let href;
      let status
      let PenatlyFee;
      let PenatlyAmount;
      let download = <a href={URL.downloadDoc + "/" + data.txnID} id="download">Download</a>
      if ((data.docCode !== "CVP" || data.docCode !== "CVP2") && data.signOrder === 0) {

        sessionStorage.setItem("signOrder", data.signOrder)
        href = "/CVP/bcaAgreement"
        status = "Please sign"
        download = ""
        PenatlyFee = "Penatly Fee: "

      }
      if ((data.docCode !== "CVP"|| data.docCode !== "CVP2")  && data.signOrder === 1) {
        sessionStorage.setItem("signOrder", data.signOrder)
        sessionStorage.setItem("txnID", data.txnID)
        sessionStorage.setItem("docCode", data.docCode)
        href = "/CVP/witnessInfo"
        status = "Witness Sign Pending"
        PenatlyFee = "Penatly Fee: "

      }
      // if (data.docCode != "CVP" && data.signOrder === 2) {
      //   sessionStorage.setItem("signOrder", data.signOrder)
      //   href = ""
      // }
      if ((data.docCode === "CVP" || data.docCode === "CVP2") && data.signOrder === 0) {
        href = "/CVP/pledgeInfoDoc"
        status = "Please sign"
        download = ""
        PenatlyFee = "Penatly Fee: "

      } else if ((data.docCode === "CVP" || data.docCode === "CVP2") && data.signOrder >= 1) {
        href = ""
        status = "Signing Completed"
        PenatlyFee = ""

      }

      // if (data.signOrder === 0) {
      //   status = "Please sign"
      //   download = ""

      // }
      // if (data.signOrder === 1 && data.docCode != "CVP") {
      //   status = "Witness Sign Pending"

      // } else{
      //   status = "Signing Completed"
      // }
      if (
        data.signOrder >= 2 &&
        (data.docCode !== "CVP" || data.docCode !== "CVP2")
      ) {
        sessionStorage.setItem("signOrder", data.signOrder);
        status = "Signing Completed";
        href = "";
        PenatlyFee = "";
      }
      return (
        <tr key={i}>
          <td style={{ width: "0%", padding: "10px" }}>{i + 1}.</td>
          <td style={{ paddingRight: "2%" }}>
            <a href={href} id="document" onClick={() => this.documentType(data.docCode)}>{data.docName}</a></td>
          <td style={{ marginLeft: "2%" }}>{status}</td>
          <td style={{ paddingLeft: "6%" }}>{download}</td>
          {/* <td style={{ paddingLeft: "2%",marginRight: "0%" },{color:"red"}}>{PenatlyFee+this.state.Fee} Rs because previous signing has been
          rejected due to name miss match.</td> */}
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="app">
        <Loader loaded={this.state.loaded} lines={13} radius={20} corners={1} rotate={0} direction={1} color="#000" speed={1} trail={60} shadow={true} hwaccel={false} className="spinner loader" zIndex={2e9} top="50%" left="50%" scale={1.00} loadedClassName="loadedContent" />
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <div className="middle" >
            <br />
            <div className="pledgedoc-container">
              <h2 style={{ textAlign: "center" }}>Pending Actions/Notifications</h2><br />
              <table id="tabledata" style={{ width: "75%", fontSize: "18px", marginLeft: "10%" }}>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              </table>
              <br></br>
              <p id="penaltyMsg" style={{ marginLeft: "10%", color: "red", display: "none" }}>Pay pending penalty fees of Rs. {this.state.Fee}/- for the previous rejected signing due to name mismatch.</p>
              <p id="noteMsg" style={{ marginLeft: "10%", color: "red", display: "none", marginTop: "-15px" }}>Note: Name and mobile number change request can be raised from the login page.</p>
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DocumentList