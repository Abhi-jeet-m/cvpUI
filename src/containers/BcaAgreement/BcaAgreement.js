import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import { Button, InputGroup } from "reactstrap";
import Loader from "react-loader";
import DefaultHeader from "../PledgeInfoDoc/DefaultHeader";
import BcaAgreementContentOBC from "./BcaAgreementContentOBC";
import BcaAgreementcmnContentBOI from "./BcaAgreementcmnContentBOI";
import BcaAgreementcmnContentBOBUPSRLM from "./BcaAgreementcmnContentBOBUPSRLM";
import BcaAgreementcmnContent from "./BcaAgreementcmnContent";
import BcaAgreementcmnContentUJVN from "./BcaAgreementcmnContentUJVN";
import BcaAgreementKAGB from "./BcaAgreementKAGB";

import { URL } from "../../Constant";
import PDF from "../Instructions/PDF";
import $ from "jquery";

var empinfo = null;
class BCAAgreement extends Component {
  constructor() {
    super();
    var data = sessionStorage.getItem("additionalData");
    this.state = {
      // url : this.props.url,
      // empinfo : this.props.empinfo,
      additionalData: JSON.parse(data),
      loaded: true,
      isdisable: true,
      langselected: "",
    };
    sessionStorage.setItem("langselected", "");
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/bclogin");
  }

  setInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "selectedlang") {
      this.setState({ selectedlang: value });
    }
    this.viewlang();
  };

  viewlang = () => {
    var document = $("#group :selected").val();
    if (
      document === "KANNADA" ||
      document === "HINDI" ||
      document === "TELUGU" ||
      document === "TAMIL" ||
      document === "BENGALI"
    ) {
      this.selectedlang();
    } else {
      this.selectedlang1();
    }
    this.setState({ langselected: document });

    //  let doccode="Show agreement in my language";
    //  if(document ==="KANNADA" ){
    //    doccode="KAN";
    //  }else if(document === "HINDI"){
    //    doccode="HIN";
    //  }else if( document === "TELUGU"){
    //    doccode="TEL";
    //  }else if(document === "TAMIL"){
    //  doccode="TAM"
    //  }else{
    //    doccode="Show agreement in my language"
    //  }

    let jsonData = {
      document: document,
      docCode: sessionStorage.getItem("docCode"),
      authToken: sessionStorage.getItem("authToken"),
    };

    fetch(URL.viewlangFile, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((responseJson) => {
        if (responseJson.status === "SUCCESS") {
          if (responseJson.fileName === "ENGLISH") {
            this.setState({ loaded: true });
          } else {
            var path = responseJson.langFilePath;
            var fileName = responseJson.fileName;
            //console.log(path)
            //for local use
            //var res = path.replace("\\", "@")

            //for production use
            var res = path.replace("/", "@");

            this.setState({ loaded: true });
            sessionStorage.setItem("LangPath", res);
            var jsonobj = {};
            jsonobj["empid"] = sessionStorage.getItem("empid");
            jsonobj["empcompany"] = sessionStorage.getItem("empcompany");
            jsonobj["authToken"] = sessionStorage.getItem("authToken");
            jsonobj["type"] = sessionStorage.getItem("type");
            jsonobj["docCode"] = sessionStorage.getItem("docCode");
            jsonobj["empGroup"] = sessionStorage.getItem("empGroup");
            jsonobj["PDFPath"] = sessionStorage.getItem("LangPath");
            let empinfojson = JSON.stringify(jsonobj);
            empinfo = btoa(empinfojson);
            let pdfurl = URL.getpledgedoc + empinfo;
            //let  pdfurl = "/CVP/downloadPledgeInfo"  + empinfo
            var win = window.open();
            // win.document.title="Sample"
            //document.getElementById("project_frame").contentWindow.document.title="MY TITLE";
            win.document.write("<title>" + fileName + "</title>");
            win.document.write(
              '<embed title="PDF preview" type="application/pdf"  src= ' +
              pdfurl +
              ' width="100%" height="100%" />'
            );
          }
        } else {
          this.setState({ loaded: true });
          alert(responseJson.statusDetails);
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
  };

  componentDidMount() {
    var body = {
      docCode: sessionStorage.getItem("docCode"),
      empCode: sessionStorage.getItem("empid"),
      empname: sessionStorage.getItem("empname"),
      companyCode: sessionStorage.getItem("empcompany"),
      authToken: sessionStorage.getItem("authToken"),
      empGroup: sessionStorage.getItem("empGroup"),
    };
    this.setState({ loaded: false });
    fetch(URL.getlangList, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status === "SUCCESS") {
          var drodwn = JSON.stringify(responseJson);
          sessionStorage.setItem("dropDown", drodwn);
          // var obj=sessionStorage.getItem("dropDown")
          //var y=obj.lanList
          var object1 = JSON.parse(drodwn);
          var y = object1.lanList;
          var doc2 = document.getElementById("group");
          var i;
          for (i = 0; i < y.length; i++) {
            var option1 = document.createElement("option");
            option1.text = y[i];
            doc2.add(option1);
          }

          this.setState({ loaded: true });
        } else {
          this.setState({ loaded: true });
          alert(responseJson.statusDetails);
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
  }

  selectedlang = () => {
    document.getElementById("loacllang").style.display = "";
    document.getElementById("loacllanglabel").style.display = "";
  };

  // checkbocvalue=()=>{

  //        var checkbox = document.getElementById("loacllang")
  //     if (checkbox.checked === false ) {
  //        sessionStorage.setItem("langselected","");
  //          this.props.history.push("/CVP/witnessInfo")
  //         } else if(checkbox.checked === true){
  //            sessionStorage.setItem("langselected",this.state.langselected);
  //            var r = window.confirm("The local language translation is only for reference. Please click 'OK' button to proceed with signing or 'Cancel' to go back and change any option'")
  //     if (r === true) {
  //     this.props.history.push("/CVP/witnessInfo")
  //     }
  //      }
  // }

  selectedlang1 = () => {
    document.getElementById("loacllang").style.display = "none";
    document.getElementById("loacllanglabel").style.display = "none";
  };

  witnessPage = () => {
    //this.checkbocvalue();

    var checkbox = document.getElementById("loacllang");
    if (checkbox.checked === false) {
      sessionStorage.setItem("langselected", "");
      this.props.history.push("/CVP/witnessInfo");
    } else if (checkbox.checked === true) {
      sessionStorage.setItem("langselected", this.state.langselected);
      var r = window.confirm(
        "The local language translation is only for reference. Please click 'OK' button to proceed with signing or 'Cancel' to go back and change any option'"
      );
      if (r === true) {
        this.props.history.push("/CVP/witnessInfo");
      }
    }
  };

  proceedEsign = () => {
    var checkbox = document.getElementById("conditions");

    if (checkbox.checked === false) {
      this.setState({
        isdisable: true,
      });
    } else if (checkbox.checked === true) {
      this.setState({
        isdisable: false,
      });
    }
  };

  render() {
    var docCode = sessionStorage.getItem("docCode");
    // alert("docCode " + docCode)
    var bcaAgreement;
    if (docCode === "BCAA") {
      bcaAgreement = <BcaAgreementContentOBC />;
    } else if (
      docCode === "BCAAUBIN" ||
      docCode === "BCAAANDB" ||
      
      docCode === "BCAAKVGB" ||
      docCode === "BCAASBIN" ||
      docCode === "BCAAPUNB" ||
      docCode === "BCAAECORP" ||
      docCode === "BCAACBIN" ||
      docCode === "BCAABOBFI" ||
      docCode === "BCAAUCO" ||
      docCode === "BCAAKVBL" ||
      docCode === "BCAALAVB" ||
      docCode === "BCAAARYB" ||
      docCode === "BCAATMBL" ||
      docCode === "BCAAIOB" ||
      docCode === "BCAABRKGB" ||
      docCode==="BCAAPSB"||
      docCode === "BCAASBIN2023"

    ) {
      bcaAgreement = <BcaAgreementcmnContentBOI />;
    } else if (docCode === "BCAABOI" || docCode === "BCAAALLA") {
      bcaAgreement = <BcaAgreementcmnContentBOI />;
    } else if (docCode === "BCAABOBUPSRLM") {
      bcaAgreement = <BcaAgreementcmnContentBOBUPSRLM />;

    } else if (docCode === "BCAAUJVN") {
      bcaAgreement = <BcaAgreementcmnContentUJVN />;
    }
    else if (docCode === "BCAAKAGB") {
      bcaAgreement = <BcaAgreementKAGB />;
    }
    return (
      <div className="app">
        <Loader
          loaded={this.state.loaded}
          lines={13}
          radius={20}
          corners={1}
          rotate={0}
          direction={1}
          color="#000"
          speed={1}
          trail={60}
          shadow={true}
          hwaccel={false}
          className="spinner loader"
          zIndex={2e9}
          top="50%"
          left="50%"
          scale={1.0}
          loadedClassName="loadedContent"
        />
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={(e) => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <div className="middle">
            <br />
            <label for="lang" style={{ marginLeft: "73%" }}>
              <b>Language</b> :
            </label>
            &nbsp;
            <select
              id="group"
              name="selectedlang"
              onChange={this.setInput}
              style={{ marginTop: "3%", width: "250px", height: "40px" }}
            ></select>
            <div className="pledgedoc-container" style={{ marginTop: "1%" }}>
              {bcaAgreement}
            </div>
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="acceptance"
                id="loacllang"
                value="loacllangterms"
                style={{
                  display: "none",
                  marginLeft: "5%",
                  width: "30px",
                  height: "16px",
                }}
                onChange={this.proceedEsign}
              ></input>
              <label
                for="acceptance"
                id="loacllanglabel"
                style={{ display: "none", fontSize: "17px" }}
              >
                <b>
                  Include {this.state.langselected} version as part of agreement
                  for reference.
                </b>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="acceptance"
                id="conditions"
                value="terms"
                style={{ marginLeft: "5%", width: "30px", height: "16px" }}
                onChange={this.proceedEsign}
              ></input>
              <label for="acceptance" style={{ fontSize: "17px" }}>
                <b>
                  I have read and understood the agreement, and all annexures,
                  and agree to sign the agreement.
                </b>
              </label>
            </div>
            <br />
            <div>
              <Button
                color="primary"
                className="px-4"
                id="withesign"
                disabled={this.state.isdisable}
                onClick={this.witnessPage}
              >
                Witness Information
              </Button>
              <br />
              <br />

              <div className="note">
                <h4>
                  Please contact the office for completing the signing process
                  in case of the following.
                </h4>
                <ul>
                  <li>
                    <b>If the mobile number is not linked with Aadhaar</b>
                  </li>
                  <li>
                    <b>
                      If you do not wish to perform online eSigning using
                      Aadhaar/VID
                    </b>
                  </li>
                  <li>
                    <b>If you face any other difficulties.</b>
                  </li>
                </ul>
              </div>
              <br />
              {/* <input type="submit" className="submit1" name="submit" value="Download and Sign" id="withoutaadhar" hidden/>
              <input type="submit" className="submit1" name="submit" value="Upload signed document" id="offlinecopy" hidden/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BCAAgreement;
