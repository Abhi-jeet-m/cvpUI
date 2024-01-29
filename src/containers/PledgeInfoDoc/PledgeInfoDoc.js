import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import { Button } from "reactstrap";
import $ from "jquery";
import { URL } from "../../Constant";
import DefaultHeader from "./DefaultHeader";
import Loader from "react-loader";

class PledgeInfoDoc extends Component {
  constructor() {
    super();
    this.state = {
      empName: sessionStorage.getItem("empname"),
      empId: sessionStorage.getItem("empid"),
      empCompany: sessionStorage.getItem("empcompany"),
      empCompanyFullName: sessionStorage.getItem("companyFullName"),
      loaded: true,
      cvpSigning:true
    };
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/empLogin");
  }

  generatePDF() {
    let jsonData = {
      empid: sessionStorage.getItem("empid"),
      empcompany: sessionStorage.getItem("empcompany"),
      authToken: sessionStorage.getItem("authToken"),
      type: sessionStorage.getItem("type"),
      docCode: sessionStorage.getItem("docCode"),
      empGroup: sessionStorage.getItem("empGroup"),
      // familyInfo:{"cvp":true}
    };
    this.setState({ loaded: false });
    fetch(URL.getPDFPath, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((respJson) => {
        if (respJson.status === "SUCCESS") {
          // alert("SUCCESS")
          var path = respJson.PDFPath;
           console.log(path)
          //for local use
          var res = path.replace("\\", "@");

          //for production use
          //var res = path.replace("/", "@")

          sessionStorage.setItem("PDFPath", res);
          // this.props.history.push("/CVP/instructions");
          this.props.history.push({
            pathname: '/CVP/instructions',
            state: this.state.cvpSigning
          });
          this.setState({ loaded: true });
        } else {
          // alert("faliure")
          // alert(respJson.statusDetails);
          this.setState({ loaded: true });
        }
      })
      .catch((e) => {
        alert("Failed to connect...");
        this.setState({ loaded: true });
      });
  }
  withesign = () => {
    var x = $("[name=terms1]");
    var count = x.length;
    for (var i = 0; i < x.length; i++) {
      if (x[i].checked === true) {
        if (count > 0) {
          count = count - 1;
        }
      }
    }
    if (count !== 0) {
      alert("Please agree to all Core Values to proceed !!");
    } else {
      if (sessionStorage.getItem("isAuthenticated")) {
        this.generatePDF();
        // this.props.history.push('/CVP/instructions')
      }
    }
  };

  render() {
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
            <div className="pledgedoc-container">
              <h1 className="pledgedoc-title"> Core Value Pledge </h1>
              <p>
                I, {this.state.empName}, employee of {this.state.empCompanyFullName} (
                {this.state.empCompany}) with employee ID {this.state.empId},
                stand committed towards imbibing and demonstrating{" "}
                {this.state.empCompany}'s core values consistently. My personal
                values shall remain subordinate to {this.state.empCompany}'s
                core values. When in doubt about the demonstration or
                application of an {this.state.empCompany} corevalue in any
                situation, I shall approach my supervisor/management for advice
                and guidance.
              </p>
              <p>
                By signing the individual statements below, I commit to imbibe
                and demonstrate core values while performing the roles and
                responsibilities I have been entrusted with. I am aware that
                there will be consequences to non-adherence, especially that
                breach of personal integrity implies separation from{" "}
                {this.state.empCompany}.
              </p>
              <h4>A. Personal Integrity</h4>
              <p>
                I shall always do the right things for {this.state.empCompany}{" "}
                by demonstrating personal integrity consistently when dealing
                with stakeholders of {this.state.empCompany}.Stakeholders
                include colleagues,customers,vendors and other
                people/organizations that interact with {this.state.empCompany}{" "}
                for business or social reasons.
              </p>
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  1. I shall be honest and ethical in all dealings with{" "}
                  {this.state.empCompany}'s stakeholders.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  2. I shall obey the laws of the land where{" "}
                  {this.state.empCompany} operates from.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  3. I shall be transparent and fair in all my dealings with
                  stakeholders of {this.state.empCompany}.
                </div>
              </div>
              <br />
              <br />
              <h4>B. Team Integrity</h4>
              <p>
                I shall consistently collaborate for the success of my team and
                cross-functional teams by demonstrating team integrity in true
                spirit. Collective success is more important that my personal
                success.
              </p>
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  1. I shall build relationships based on trust and shall carry
                  out work that has been entrusted to us as a team and as an
                  organization.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  2. I shall respect my colleagues unconditionally and shall
                  refrain from being judgmental.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  3. I shall collaborate with all my peers across{" "}
                  {this.state.empCompany} for their success, leading to
                  organizational success.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  4. I shall set high standards of performance for myself and my
                  team, shall provide timely feedback and shall be less tolerant
                  to low performance.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  5. I shall treat merit as the criterion when deciding or
                  influencing rewards and when implementing organizational
                  policies.
                </div>
              </div>
              <br />
              <br />
              <h4>C. Innovative Spirit</h4>
              <p>
                I am proud of the fact that {this.state.empCompany} has grown
                and has created a significant social impact by continuously
                investing in new ideas, technologies and processes as deemed fit
                for continuously evolving markets and expectations. In this
                regard, I shall demonstrate my innovative spirit by encouraging
                new ideas and by being constantly aware of current and upcoming
                technologies and processes while performing my role in the
                organization.
              </p>
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  1. I shall remain focused on making improvements to
                  technologies and processes to carry out work expected of me
                  and my team.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  2. If I should come across an opportunity worthy of
                  organizational assessment for investment, I shall bring it to
                  the attention of my supervisor/management.
                </div>
              </div>
              <br />
              <br />
              <h4>D. Professionalism</h4>
              <p>
                Guided by a sense of pride in self and work, I shall demonstrate
                individual professional behaviour on all occasions in order to
                ensure collective results for {this.state.empCompany}.
              </p>
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  1. I shall meet all commitments made to internal and external
                  customers. I shall walk that extra mile too, if need be, to
                  meet commitments.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  2. I shall respond to my internal and external customers with
                  a sense of urgency.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  3. I shall take responsibility and be accountable for my
                  commitments and actions in order to meet my individual and
                  collective goals.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  4. I shall learn from failures and shall strive to bring
                  improvements to my work in order to avoid recurrence of
                  mistakes.
                </div>
              </div>
              <br />
              <br />
              <div className="terms-container">
                <div className="checkbox-container">
                  <input type="checkbox" name="terms1" id="terms" />
                </div>
                <div className="termtext">
                  5. I shall manage my time and priorities while respecting the
                  time and priorities of my colleagues and customers.
                </div>
              </div>
              <br />
              <br />
              <p>
                After having read and agreed to each statement hereinabove, I
                hereby commit to demonstrate {this.state.empCompany}'s core
                values with this sign-up.
              </p>
              <br />
              <br />
            </div>
            <br />
            <br />
            <div>
              <Button
                color="primary"
                className="px-4"
                id="withesign"
                onClick={this.withesign}
              >
                Proceed with Aadhaar eSign
              </Button>
              <br />
              <br />
              <h4 className="note">
                In case of difficulties in eSigning the pledge or if the mobile
                number is not linked with Aadhaar or you do not wish to perform
                online eSigning of pledge using Aadhaar/VID, please contact the
                HR for further information on how to proceed with submitting the
                pledge.
              </h4>
              <input
                type="submit"
                className="submit1"
                name="submit"
                value="Download and Sign"
                id="withoutaadhar"
                hidden
              />
              <input
                type="submit"
                className="submit1"
                name="submit"
                value="Upload signed document"
                id="offlinecopy"
                hidden
              />

              <form
                id="fileupload"
                method="POST"
                enctype="multipart/form-data"
                hidden
              >
                <input type="file" className="uploadpledge" name="file" />
                <input
                  type="button"
                  className="uploadpledge"
                  id="uploadpledge"
                  width="20%"
                  value="Upload"
                />
                <input type="hidden" id="inputs" name="inputDetails" />
              </form>
            </div>
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default PledgeInfoDoc;
