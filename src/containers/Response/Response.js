import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import PDF from "../Instructions/PDF";
import { URL } from "../../Constant";
import DefaultHeader from "../PledgeInfoDoc/DefaultHeader";
import { Button } from "reactstrap";
import Loader from "react-loader";

var empinfo = null;

export default class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      render: false,
      docCode: "",
      filename1: this.props.location.search,
      signOutMsg:
        "Submission of the signed agreement is completed. You can download a copy of the signed agreement from this page for your future reference. You can sign out from this page now by clicking the 'Sign Out' button.",
    };
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentWillMount() {
    if (this.props.location.frompath === "/CVP/witnessSigning") {
      this.setState({
        filename1: this.props.location.state.details.filename,
      });
    }
  }

  componentDidMount() {
    //   if(sessionStorage.getItem("type") === "CVP") {
    //        this.setState({ typeName: "Submission of the pledge is completed. A copy of your signed pledge has been mailed to your mail ID registered with HR." })
    //   }
    if (
      sessionStorage.getItem("docCode") === "CVP" ||
      sessionStorage.getItem("docCode") === "CVP2"
    ) {
      this.setState({
        signOutMsg:
          "Submission of the pledge is completed. A copy of your signed pledge has been mailed to your mail ID registered with HR.",
      });
    }
    //let filename1 = this.props.location.search;

    let filedetail = this.state.filename1.split("filename=")[1];
    if (filedetail.indexOf("Error") >= 0) {
      // alert("error in the file name")
      this.props.history.push("/CVP/failed");
    } else {
      if (filedetail.indexOf("@") >= 0) {
        this.setState({ loaded: false });
        let refno = filedetail.split("@")[1].split(".")[0];
        fetch(URL.signedpledgedoc + filedetail, {
          method: "GET",
          async: false,
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })
          .then((respJson) => {
            if (respJson.statuscode === "00") {
              empinfo = refno;
              this.setState({ render: true });
              if (respJson.signOrder >= 2) {
                document.getElementById("witnessBtn").style.display = "none";
                document.getElementById("signOut").style.display = "";
              }

              if (respJson.signOrder === 1) {
                this.setState({
                  signOutMsg:
                    "Digital Signing from service provider is completed. Please proceed with witness signing by clicking 'Proceed with Witness Signing' button.",
                });
              }
              if (
                (respJson.signOrder === 1 &&
                  sessionStorage.getItem("docCode") === "CVP") ||
                sessionStorage.getItem("docCode") === "CVP2"
              ) {
                this.setState({
                  signOutMsg:
                    "Submission of the pledge is completed. A copy of your signed pledge has been mailed to your mail ID registered with HR.",
                });
                document.getElementById("witnessBtn").style.display = "none";
                document.getElementById("signOut").style.display = "";
              }
              sessionStorage.setItem("docCode", respJson.docCode);
              sessionStorage.setItem("signOrder", respJson.signOrder);
              this.setState({ loaded: true });
            } else {
              this.setState({ loaded: true });
              alert(respJson.statusmsg);
              this.props.history.push("/CVP/documentList");
            }
          })
          .catch((e) => {
            this.setState({ loaded: true });
            alert("Failed to connect try again...");
          });
      } else {
        alert("Signing Failed. Please try after sometime!!!");
        if (sessionStorage.getItem("type") === "BC") {
          this.props.history.push("/CVP/bclogin");
          sessionStorage.clear();
        } else if (sessionStorage.getItem("type") === "EMP") {
          this.props.history.push("/CVP/empLogin");
          sessionStorage.clear();
        } else {
          this.props.history.push("/CVP/bclogin");
          sessionStorage.clear();
        }
      }
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
      this.props.history.push("/CVP/emplogin");
      sessionStorage.clear();
    }
  }

  logOut = () => {
    console.log("docCode:"+sessionStorage.getItem("docCode"))
    if (
      sessionStorage.getItem("docCode") === "CVP" ||
      sessionStorage.getItem("docCode") === "CVP2"
    ) {
      this.props.history.push("/CVP/emplogin");
      sessionStorage.clear();
    }else  if (sessionStorage.getItem("type") === "BC") {
      this.props.history.push("/CVP/bclogin");
      sessionStorage.clear();
    } else if (sessionStorage.getItem("type") === "EMP") {
      this.props.history.push("/CVP/empLogin");
      sessionStorage.clear();
    } else {
      this.props.history.push("/CVP/bclogin");
      sessionStorage.clear();
    }
  };

  //getting terms and condition for performing  OTP based siging for Witness
  getTermsandConditions = () => {
    let data = {
      signerMobile: sessionStorage.getItem("phoneNumber"),
      signerName: sessionStorage.getItem("witnessName"),
      signDisplayInfo: sessionStorage.getItem("signDisplayInfo"),
    };
    this.props.history.push({
      pathname: "/CVP/witnessSigning",
      frompath: "/CVP/response",
      state: {
        details: data,
      },
    });
  };

  render() {
    if (this.state.render) {
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
            top="45%"
            left="50%"
            scale={1.0}
            loadedClassName="loadedContent"
          />
          <AppHeader fixed>
            <Suspense fallback={this.loading()}>
              <DefaultHeader onLogout={(e) => this.signOut(e)} />
            </Suspense>
          </AppHeader>
          <div className="app-container">
            <PDF url={URL.signedpreview} empinfo={empinfo} />
            <div className="SignOut-msg">
              <h5>{this.state.signOutMsg}</h5>
            </div>
            <Button
              color="primary"
              className="px-4"
              id="witnessBtn"
              onClick={this.getTermsandConditions}
              style={{ marginLeft: "45%", marginTop: "1%" }}
            >
              Proceed with Witness Signing
            </Button>
            <Button
              color="primary"
              style={{ marginLeft: "45%", marginTop: "1%", display: "none" }}
              id="signOut"
              className="px-4"
              onClick={this.logOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      );
    }
    return (
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
        top="45%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />
    );
  }
}
