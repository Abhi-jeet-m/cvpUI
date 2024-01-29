import { Input, InputGroup, Button } from "reactstrap";

import "./witnessInfo.css";
import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import Loader from "react-loader";
import DefaultHeader from "../PledgeInfoDoc/DefaultHeader";
import TermsandConditions from "./TermsandConditions";
import HandSign from "../HandSign/HandSign";

import $ from "jquery";
import { URL } from "../../Constant";
class WitnessSigning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      signerMobile: "",
      mobileOTP: "",
      signDisplayInfo: "",
      signerName: "",
      docID: "",
      TandC: "",
      openFirstModal: false,
      isdisable: true,
      otpdisable: true,
      resendOTPDisable: true,
    };
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  componentWillMount() {
    if (
      this.props.location.frompath === "/CVP/witnessInfo" ||
      this.props.location.frompath === "/CVP/response"
    ) {
      sessionStorage.setItem(
        "witnessName",
        this.props.location.state.details.signerName
      );
      this.setState({
        signerMobile: this.props.location.state.details.signerMobile,
        signDisplayInfo: this.props.location.state.details.signDisplayInfo,
        signerName: this.props.location.state.details.signerName,
      });
    } else {
      this.props.history.push("/CVP/documentList");
    }
  }

  signOut(e) {
    e.preventDefault();
    if (sessionStorage.getItem("type") === "BC") {
      this.props.history.push("/CVP/bclogin");
      sessionStorage.clear();
    } else if (sessionStorage.getItem("type") === "EMP") {
      this.props.history.push("/CVP/emplogin");
      sessionStorage.clear();
    } else {
      this.props.history.push("/CVP/bclogin");
      sessionStorage.clear();
    }
  }

  setInput = (e) => {
    let regNum = new RegExp(/^[0-9]*$/);
    let value = e.target.value;
    let name = e.target.name;
    if (name === "mobileOTP") {
      if (regNum.test(e.target.value)) {
        this.setState({ mobileOTP: value });
      } else {
        return false;
      }
    }
  };

  toWitnesssSigning = () => {
    var handSignImg = sessionStorage.getItem("handSignImg");
    if (handSignImg !== null) {
      if (handSignImg.length > 2500 && (handSignImg.includes("data:image") && handSignImg.includes("base64"))){
        if (this.state.mobileOTP.length !== 0) {
          var signerData = {
            signerName: this.state.signerName,
            signerMobile: this.state.signerMobile,
          };
          var witnessInfo = {
            signDisplayInfo: this.state.signDisplayInfo,
            authToken: sessionStorage.getItem("authToken"),
            empid: sessionStorage.getItem("empid"),
            empGroup: sessionStorage.getItem("empGroup"),
            // "referenceno":this.state.refno,
            docCode: sessionStorage.getItem("docCode"),
            signOrder: sessionStorage.getItem("signOrder"),
            signedFilePath: sessionStorage.getItem("signedFilePath"),
            empCompany: sessionStorage.getItem("empcompany"),
            userIP: sessionStorage.getItem("userIP"),
            signerData: signerData,
            docID: this.state.docID,
            mobileOTP: this.state.mobileOTP,
            handSignImg: sessionStorage.getItem("handSignImg"),
          };
          this.setState({ loaded: false });
          fetch(URL.witnessEsign, {
            method: "POST",
            cache: "no-cache",
            async: false,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(witnessInfo),
          })
            .then((resp) => {
              return resp.json();
            })
            .then((respJson) => {
              if (respJson.status === "SUCCESS") {
                //here for otp based signing the response will be in the form of jSon so making a URL format response and pushing it to response page
                let filename =
                  "?filename=" +
                  respJson.filename +
                  "&txnid=" +
                  btoa(respJson.token) +
                  "&signerNames=" +
                  btoa(respJson.signerNames);
                this.setState({ loaded: true });
                let data = {
                  filename: filename,
                };
                this.props.history.push({
                  pathname: "/CVP/response",
                  frompath: "/CVP/witnessSigning",
                  state: {
                    details: data,
                  },
                });
              } else {
                if (
                  respJson.statusDetails.includes("Validation Failed") ||
                  respJson.statusDetails.includes("Expired")
                ) {
                  alert(respJson.statusDetails);
                  this.setState({ loaded: true });
                } else {
                  alert("Signing Failed.Try again later");
                  this.props.history.push("/CVP/documentList");
                }
              }
            })
            .catch((e) => {
              this.setState({ loaded: true });
              alert("Failed to connect...");
            });
        } else {
          alert("Please Enter the OTP");
        }
      } else {
        alert("Please Sign or upload valid signature");
      }
    } else {
      alert("Please Sign or upload signature");
    }
  };

  resndOTPforWitnessEsign = () => {
    var signerData = {
      signerName: this.state.signerName,
      signerMobile: this.state.signerMobile,
    };
    var witnessInfo = {
      // selectedMode: this.state.selectedMode,
      // loginname: sessionStorage.getItem("username"),
      docID: this.state.docID,
      authToken: sessionStorage.getItem("authToken"),
      empid: sessionStorage.getItem("empid"),
      empGroup: sessionStorage.getItem("empGroup"),
      docCode: sessionStorage.getItem("docCode"),
      signOrder: sessionStorage.getItem("signOrder"),
      signedFilePath: sessionStorage.getItem("signedFilePath"),
      empCompany: sessionStorage.getItem("empcompany"),
      userIP: sessionStorage.getItem("userIP"),
      signerData: signerData,
    };
    this.setState({ loaded: false });
    fetch(URL.resendOTPforWitnessEsign, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(witnessInfo),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((respJson) => {
        if (respJson.status === "SUCCESS") {
          this.setState({ loaded: true });
        } else {
          alert(respJson.statusDetails);
          this.setState({ loaded: true });
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert("Failed to connect...");
      });
  };

  generateOTPforWitnessEsign = () => {
    document.getElementById("mobilenumber").readOnly = true;
    $("#otpLabel").removeAttr("hidden");
    $("#mobilemsg").removeAttr("hidden");
    $("#mobileOTP").removeAttr("hidden");
    $("#HandSign").removeAttr("hidden");
    $("#submitBtn").removeAttr("hidden");
    this.setState({ otpdisable: true, resendOTPDisable: false });
    var signerData = {
      signerName: this.state.signerName,
      signerMobile: this.state.signerMobile,
    };
    var witnessInfo = {
      authToken: sessionStorage.getItem("authToken"),
      empid: sessionStorage.getItem("empid"),
      empGroup: sessionStorage.getItem("empGroup"),
      docCode: sessionStorage.getItem("docCode"),
      signOrder: sessionStorage.getItem("signOrder"),
      signedFilePath: sessionStorage.getItem("signedFilePath"),
      empCompany: sessionStorage.getItem("empcompany"),
      userIP: sessionStorage.getItem("userIP"),
      signerData: signerData,
    };
    this.setState({ loaded: false });
    fetch(URL.generateOTPforWitnessEsign, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(witnessInfo),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((respJson) => {
        if (respJson.status === "SUCCESS") {
          this.setState({ loaded: true, docID: respJson.docID });
        } else {
          alert(respJson.statusDetails);
          this.setState({ loaded: true });
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert("Failed to connect...");
      });
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
    {
      this.enablegenerateOTP();
    }
  };

  //for disabling generate OTP button
  enablegenerateOTP = () => {
    if (this.state.isdisable === true) {
      this.setState({
        otpdisable: false,
      });
    } else {
      this.setState({
        otpdisable: true,
      });
    }
  };

  render() {
    const { openFirstModal } = this.state;
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
            <div id="witnessContainer" className="witness-container">
              <TermsandConditions></TermsandConditions>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="acceptance"
                id="conditions"
                onChange={this.proceedEsign}
              ></input>
              {/* value="terms"  */}
              <label style={{ fontSize: "17px" }}>
                <b>
                  I have read the Instructions and agree to proceed with signing.
                </b>
              </label>
              </div>
              <div>
                {/* <input
                  type="checkbox"
                  name="family"
                  id="conditions"
                  onChange={this.proceedEsign}
                ></input>
                <label style={{ fontSize: "17px" }}>
                <b>
                  I ,Narayanswami Father of Hema N read the Instructions and agree to proceed with signing.
                </b>
              </label>
              <br /> 
              <input
                  type="checkbox"
                  name="family"
                  id="conditions"
                  onChange={this.proceedEsign}
                ></input>
                <label style={{ fontSize: "17px" }}>
                <b>
                  I ,Latha Mother of Hema N read the Instructions and agree to proceed with signing.
                </b>
              </label> */}





            </div>
            <InputGroup id="mobilenumgroup">
              <label id="mobileLabel">
                <b>Mobile Number :</b>&nbsp;
              </label>
              <Input
                type="text"
                placeholder="Enter OTP"
                name="mobilenumber"
                id="mobilenumber"
                autoComplete="off"
                value={this.state.signerMobile}
              />
              &nbsp;&nbsp;&nbsp;
              <Button
                color="primary"
                disabled={this.state.otpdisable}
                id="getotpbtn"
                className="px-0"
                title="OTP based Resend OTP"
                onClick={this.generateOTPforWitnessEsign}
              >
                <b> Get OTP</b>
              </Button>
              <Button
                color="link"
                disabled={this.state.resendOTPDisable}
                id="resendotpbtn"
                className="px-0"
                title="OTP based Resend OTP"
                onClick={this.resndOTPforWitnessEsign}
              >
                {" "}
                Resend OTP
              </Button>
            </InputGroup>
            <br />

            <InputGroup id="mobileOTPgroup">
              <label id="otpLabel" hidden>
                <b>Mobile OTP :</b>&nbsp;
              </label>
              <Input
                type="text"
                placeholder="Enter OTP"
                name="mobileOTP"
                id="mobileOTP"
                autoComplete="off"
                maxLength="6"
                minLength="6"
                value={this.state.mobileOTP}
                onChange={this.setInput}
                hidden
              />
              <span id="HandSign" hidden>
                {" "}
                <HandSign></HandSign>
              </span>
            </InputGroup>
            <br />

            <Button
              color="primary"
              className="px-4"
              id="submitBtn"
              onClick={this.toWitnesssSigning}
              hidden
            >
              Proceed with Witness Signing
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default WitnessSigning;
