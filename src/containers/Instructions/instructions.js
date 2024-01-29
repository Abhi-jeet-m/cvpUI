import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import { Button } from "reactstrap";
import PDF from "./PDF";
import { URL } from "../../Constant";
import DefaultHeader from "../PledgeInfoDoc/DefaultHeader";
import Loader from "react-loader";



var empinfo = null;

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      typeName: "pledge",
      isdisable: "true",
      isFamilyPresent: false,
      familyTableData: [],
      username: "",
      dataToNsdl: {},
      length: 0,
      CoreValuePledge: false

    };
    var jsonobj = {};
    jsonobj["empid"] = sessionStorage.getItem("empid");
    jsonobj["empcompany"] = sessionStorage.getItem("empcompany");
    jsonobj["authToken"] = sessionStorage.getItem("authToken");
    jsonobj["type"] = sessionStorage.getItem("type");
    jsonobj["docCode"] = sessionStorage.getItem("docCode");
    jsonobj["empGroup"] = sessionStorage.getItem("empGroup");
    jsonobj["PDFPath"] = sessionStorage.getItem("PDFPath");
    empinfo = JSON.stringify(jsonobj);
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentDidMount() {
    var exp;
    const { state } = this.props.location;
    const inputs = state;
    console.log(inputs)
    // if(inputs.hascvp==false){
    if (inputs.hasOwnProperty('isFamilyPresent')) {
      // alert("family details present")


      if (inputs.isFamilyPresent == true) {
        this.setState({ isFamilyPresent: true, dataToNsdl: inputs, familyTableData: inputs.familyDetails, username: inputs.username })
        var familyArray = inputs.familyDetails;
        this.setState({ length: familyArray.length })
        for (var i = 0; i < familyArray.length; i++) {
          var temp = familyArray[i];


          if (temp.relationship === "Father") {
            this.setState({ fathername: temp.name })
          }
          if (temp.relationship === "Mother") {
            this.setState({ mothername: temp.name })
          }
          if (temp.relationship === "Spouse") {
            this.setState({ spousename: temp.name })
          }
          if (temp.relationship === "First child") {
            this.setState({ childname: temp.name })
          }
          if (temp.relationship === "Second child") {
            this.setState({ child2name: temp.name })
          }

        }

      }
      else {
        this.setState({ isFamilyPresent: false, isdisable: false, dataToNsdl: inputs, username: inputs.username })
      }
    }
    else {
      // alert("family details is not present")
      var temparory = { "input": inputs }
      this.setState({ isdisable: false, dataToNsdl: temparory, username: inputs.username, CoreValuePledge: true })
    }


    if (sessionStorage.getItem("type") === "BC") {
      this.setState({ typeName: "agreement" });
    }
    fetch(URL.getrefno, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: empinfo,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((respJson) => {
        if (respJson.statusmsg === "SUCCESS") {
          sessionStorage.setItem("referenceno", respJson.referenceno);
        } else {
          alert(respJson.statusmsg);
          if (sessionStorage.getItem("type") === "BC") {
            this.props.history.push("/CVP/bclogin");
            sessionStorage.clear();
          } else {
            this.props.history.push("/CVP/empLogin");
            sessionStorage.clear();
          }
        }
      })
      .catch((e) => {
        alert("Failed to connect...");
      });
  }

  signOut(e) {
    e.preventDefault();
    if (sessionStorage.getItem("type") === "BC") {
      this.props.history.push("/CVP/bclogin");
      sessionStorage.clear();
    } else {
      this.props.history.push("/CVP/empLogin");
      sessionStorage.clear();
    }
  }

  cancle = () => {
    this.props.history.push("/CVP/documentList");
  };

  tonsdl = () => {
    if (this.state.isFamilyPresent === true) {
      if (document.getElementById("checkbox").checked === true) {

        var r = window.confirm("Press OK if Aadhaar number is with you.");

        if (r === true) {
          let jsonData = {
            langselected: sessionStorage.getItem("langselected"),
            empid: sessionStorage.getItem("empid"),
            empname: sessionStorage.getItem("empname"),
            empcompany: sessionStorage.getItem("empcompany"),
            authToken: sessionStorage.getItem("authToken"),
            referenceno: sessionStorage.getItem("referenceno"),
            type: sessionStorage.getItem("type"),
            docCode: sessionStorage.getItem("docCode"),
            empGroup: sessionStorage.getItem("empGroup"),
            userIP: sessionStorage.getItem("userIP"),
            familyInfo: this.state.dataToNsdl
          };
          this.setState({ loaded: false });
          fetch(URL.tonsdl, {
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
              if (
                respJson.statuscode === "00" &&
                respJson.statusDetails === "NOT_ENOUGH_CREDITS"
              ) {
                alert("Insufficient Credits");
                this.props.history.push("/CVP/documentList");
              } else if (respJson.statuscode === "00") {
                console.log(respJson)
                let isAuthenticated = true;
                sessionStorage.setItem("isAuthenticated", isAuthenticated);
                sessionStorage.setItem("espXML", respJson.espXML);
                sessionStorage.setItem("aspURL", respJson.aspUrl);
                this.setState({ loaded: true });
                this.props.history.push("/CVP/success");
              } else {
                //alert(respJson.statuscode)
                this.setState({ loaded: true });
                alert(respJson.statusmsg);
              }
            })
            .catch((e) => {
              this.setState({ loaded: true });
              alert("Failed to connect...");
            });
        }
      }
      else {
        alert("Please check all the signing terms to proceed")
      }
    }
    else {
      var r = window.confirm("Press OK if Aadhaar number is with you.");
      let jsonData = {
        langselected: sessionStorage.getItem("langselected"),
        empid: sessionStorage.getItem("empid"),
        empname: sessionStorage.getItem("empname"),
        empcompany: sessionStorage.getItem("empcompany"),
        authToken: sessionStorage.getItem("authToken"),
        referenceno: sessionStorage.getItem("referenceno"),
        type: sessionStorage.getItem("type"),
        docCode: sessionStorage.getItem("docCode"),
        empGroup: sessionStorage.getItem("empGroup"),
        userIP: sessionStorage.getItem("userIP"),
        familyInfo: this.state.dataToNsdl
      };
      console.log(jsonData)
      this.setState({ loaded: false });
      fetch(URL.tonsdl, {
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
          if (
            respJson.statuscode === "00" &&
            respJson.statusDetails === "NOT_ENOUGH_CREDITS"
          ) {
            alert("Insufficient Credits");
            this.props.history.push("/CVP/documentList");
          } else if (respJson.statuscode === "00") {
            console.log(respJson)
            let isAuthenticated = true;
            sessionStorage.setItem("isAuthenticated", isAuthenticated);
            sessionStorage.setItem("espXML", respJson.espXML);
            sessionStorage.setItem("aspURL", respJson.aspUrl);
            this.setState({ loaded: true });
            this.props.history.push("/CVP/success");
          } else {
            //alert(respJson.statuscode)
            this.setState({ loaded: true });
            alert(respJson.statusmsg);
          }
        })
        .catch((e) => {
          this.setState({ loaded: true });
          alert("Failed to connect...");
        });
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

        <div className="app-container">
          <PDF url={URL.getpledgedoc} empinfo={btoa(empinfo)} />
          <div className="instruction-container" style={{ height: "12%" }}>
            <h6>
              This page will be redirected to NSDL page for digitally signing
              the {this.state.typeName}. Please read the consent in NSDL page
              carefully before accepting.
            </h6>
            <h6>
              Please keep your Aadhaar number ready. An OTP will be sent to your
              mobile number/email ID registered with Aadhaar.
            </h6>
          </div>

          <div>
            <br></br>
            {this.state.CoreValuePledge ? (
              <table></table>
            ) :
              <table style={{ marginLeft: "4%", width: "100%" }}>
                {this.state.isFamilyPresent ? (
                  <tbody>
                    {this.state.familyTableData.map((list, index) => {
                      if (index % 2 === 0) {
                        // render based on even element to know when to shift to next row
                        const nextIndex = index + 1;
                        return (
                          <tr key={index}>
                            <td style={{ width: "50%" }}>
                              <input
                                type="checkbox"
                                name="family"
                                id="checkbox"

                              />
                              <label>
                                I, <b> {list.name}</b> {list.relationship} of {this.state.username} read the instructions and agree to proceed with signing.
                              </label>
                            </td>
                            {nextIndex < this.state.familyTableData.length && (
                              <td>
                                <input
                                  type="checkbox"
                                  name="family"
                                  id={nextIndex}

                                />
                                <label>
                                  I, <b> {this.state.familyTableData[nextIndex].name}</b> {this.state.familyTableData[nextIndex].relationship} of {this.state.username} read the instructions and agree to proceed with signing.
                                </label>
                              </td>
                            )}
                          </tr>
                        );
                      } else {
                        //odd elemnt rendering already takencare above
                        return null;
                      }
                    })}
                  </tbody>
                ) : (
                  <tr>
                    {/* <td> */}
                    <td>
                      <input
                        type="checkbox"
                        name="family"
                        id="noFamily"

                      />
                      <label>
                        I,  {this.state.username} have no family ,I am the single person of the family.
                      </label>
                    </td>
                    {/* </td> */}
                  </tr>



                )}
              </table>

            }




          </div>
          {/* disabled={this.state.isdisable} */}
          <div>
            <Button color="primary" id="proceedButton" className="tonsdl" onClick={this.tonsdl}>
              Proceed
            </Button>
            <Button
              color="primary"
              style={{ marginTop: "1%", marginLeft: "5%" }}
              onClick={this.cancle}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>



    );


  }

}



export default Instructions;
