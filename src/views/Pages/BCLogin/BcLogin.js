import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { URL } from "../../../Constant";
import $ from "jquery";
import Loader from "react-loader";
import "./bclogin.css";

class BcLogin extends Component {
  constructor() {
    super();
    this.state = {
      empid: "",
      otp: "",
      verifyOtp: "",
      selectedbank: "",
      mobile: "",
      userName: "",
      //selectedOption: "BC",
      empName: "",
      mobAadhar: "",
      mobMessaging: "",
      userMail: "",
      empDOB: "",
      empPanNumber: "",
      loaded: true,
      updateType: "",
      details1: "N",
      emppan: "",
      mobilemsg: "",
      bankInfo: [],
    };
  }

  componentDidMount() {
    $("#generateOtp").removeAttr("hidden");
    $("#loginMsg1").removeAttr("hidden");
    $("#loginMsg2").removeAttr("hidden");
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      sessionStorage.setItem("userIP", data.ip);
    });

    fetch(URL.banksInfo, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((resp) => {
        return resp.json();
      })
      .then((respJson) => {
        if (respJson.status === "Success") {

          this.setState({ bankInfo: respJson.bankInfo })

          this.setState({ loaded: true });
        } else {
          alert(respJson.statusDetails);
          this.setState({ loaded: true });
        }
      })
      .catch((e) => {
        alert("Failed to connect...");
        this.setState({ loaded: true });
      });







  }

  setInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "empid") {
      this.setState({ empid: value });
    }
    if (name === "emppan") {
      this.setState({ emppan: value });
    }
    if (name === "otp") {
      this.setState({ otp: value });
    }
    if (name === "selectedbank") {
      this.setState({ selectedbank: value });
    }
  };

  setBCDetails = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let regNum1 = new RegExp(/^[(0/91)?[7-9][0-9]{9}]*$/);
    let regAcc = new RegExp(/^[A-Za-z0-9_-]*$/);
    let regName = new RegExp(/^[A-Za-z0-9._ ]*$/);
    let regNum = new RegExp(/^[0-9]*$/);
    if (name === "empName") {
      if (regName.test(value)) {
        this.setState({ empName: value });
      }
    }
    if (name === "mobAadhar") {
      if (regNum.test(value)) {
        this.setState({ mobAadhar: value });
      }
    }
    if (name === "mobMessaging") {
      if (regNum.test(value)) {
        this.setState({ mobMessaging: value });
      }
    }
    if (name === "empDOB") {
      this.setState({ empDOB: value });
    }

    if (name === "empPanNumber") {
      if (regAcc.test(value)) {
        this.setState({ empPanNumber: value });
      }
    }
    if (name === "verifyOtp") {
      this.setState({ verifyOtp: value });
    }
  };

  checkPanOrAccNum = (item) => {
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(item)) {
      return true;
    } else {
      return false;
    }
  };

  userUpdateType() {
    let updateType = "";
    let bcname = document.querySelector("#bcname");
    let bcmobileNum = document.querySelector("#bcmobileNum");
    if (bcmobileNum.checked == false && bcname.checked == false) {
      alert("please check any one box");
      return null;
    }

    if (bcmobileNum.checked && bcname.checked) {
      updateType = "11";
    } else if (bcname.checked) {
      updateType = "10";
    } else if (bcmobileNum.checked) {
      updateType = "01";
    }
    return updateType;
  }

  //   // $("#mobAadhar").css("border", "1px solid red")
  //   //$("#mobAadhar.span").next().text("please Enter Mobile NUmber")
  //   // $("#mobAadhar").next(".span").html(<br /> + "please Enter Mobile NUmber")

  submitdetails = () => {
    let bcname = document.querySelector("#bcname");
    let bcmobileNum = document.querySelector("#bcmobileNum");
    if (!$("#mobAadhar").val()) {
      alert("Please enter the mobile number");
      return null;
    }
    if (!$("#empDOB").val()) {
      alert("Please enter the DOB");
      return null;
    }
    if (!$("#empPanNumber").val()) {
      alert("Please enter the PAN/Settelment Acc No");
      return null;
    }

    if (bcmobileNum.checked == false && bcname.checked == false) {
      alert(
        "please select any one type of update/Both to update name and mobile number."
      );
      return null;
    }

    if (!$("#empName").val()) {
      alert("Please enter the name as per Aadhaar");
      return;
    }
    let updateType = this.userUpdateType();
    this.setState({ updateType: updateType });
    var jsonData = {
      empGroup: this.state.selectedbank,
      empId: this.state.empid,
      empPan: this.state.emppan,
      mobAadhar: this.state.mobAadhar,
      mobMessaging: this.state.mobMessaging,
      empDOB: this.state.empDOB,
      //"empPanNumber": this.state.empPanNumber,
      empName: this.state.empName,
      updateType: updateType,
    };
    if (this.checkPanOrAccNum(this.state.empPanNumber)) {
      jsonData.empPanNumber = this.state.empPanNumber;
    } else {
      jsonData.empPanNumber = Number(this.state.empPanNumber);
    }
    this.setState({ loaded: false });
    fetch(URL.userUpdateRequest, {
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
          if (respJson.statusDetails.includes("after")) {
            alert(respJson.statusDetails);
            window.location.reload(false);
          }

          if (respJson.statusDetails.includes("phone")) {
            alert(respJson.statusDetails);
            $("#verifyOtpFeild").removeAttr("hidden");
            $("#verifyOtp").removeAttr("hidden");
            document.getElementById("mobAadhar").readOnly = true;
            document.getElementById("mobMessaging").readOnly = true;
            document.getElementById("empDOB").readOnly = true;
            document.getElementById("empPanNumber").readOnly = true;
            document.getElementById("empName").readOnly = true;
            $("#group4").remove();
            $("#submitBtn").remove();
            $("#cancelBtn").remove();
            $("#aadharMsg").remove();
          }

          if (respJson.statusDetails.includes("mobile")) {
            $("#verifyOtpFeild").removeAttr("hidden");
            $("#verifyOtp").removeAttr("hidden");
            alert(respJson.statusDetails);
            document.getElementById("mobAadhar").readOnly = true;
            document.getElementById("mobMessaging").readOnly = true;
            document.getElementById("empDOB").readOnly = true;
            document.getElementById("empPanNumber").readOnly = true;
            document.getElementById("empName").readOnly = true;
            $("#group4").remove();
            $("#submitBtn").remove();
            $("#cancelBtn").remove();
            $("#aadharMsg").remove();
          }

          //  document.getElementById("userType1").readOnly = true
          //  document.getElementById("userType2").readOnly = true
          //document.getElementById("group4").readOnly = true

          this.setState({ loaded: true });
        } else {
          this.setState({ loaded: true });
          alert(respJson.statusDetails);

          if (respJson.statusDetails.includes("already")) {
            window.location.reload(false);
          }
          // window.location.reload(false);
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert("Updating failed try again...");
      });
  };

  VerifyMobile = () => {
    if (this.state.verifyOtp.length !== 0) {
      var jsonData = {
        empGroup: this.state.selectedbank,
        empId: this.state.empid,
        empPan: this.state.emppan,
        mobAadhar: this.state.mobAadhar,
        otp: this.state.verifyOtp,
        updateType: this.state.updateType,
      };

      this.setState({ loaded: false });
      fetch(URL.updateProfileOnOtp, {
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
            this.setState({ loaded: true });
            alert(respJson.statusDetails);
            window.location.reload(false);
          } else {
            this.setState({ loaded: true });
            alert(respJson.statusDetails);
          }
        })
        .catch((e) => {
          this.setState({ loaded: true });
          alert("Verifing failed try again...");
        });
    } else {
      alert("Enter OTP");
    }
  };

  onChecked = () => {
    if (this.state.details1 === "N") {
      this.setState({
        details1: "Y",
      });
    } else {
      this.setState({
        details1: "N",
      });
    }
  };

  generateOtp = () => {
    if (this.state.empid.length !== 0) {
      if (this.state.selectedbank !== "") {
        var jsonData = {
          usertype: "emp",
          empid: this.state.empid,
          password: "",
          username: "",
          empGroup: this.state.selectedbank,
          loginmode: "PAN",
        };
        this.setState({ loaded: false });
        fetch(URL.generateOtp, {
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
            // if (respJson.loginmode == "PAN") {
            var loginmode = "PAN";
            if (loginmode == "PAN") {
              this.setState({ mobilemsg: "Mobile No: " });
            } else {
              this.setState({ mobilemsg: "OTP sent to: " });
            }

            this.setState({
              mobile: respJson.mobilenum,
              userName: respJson.empName,
            });

            // sessionStorage.setItem("bcMobileNum", respJson.bcMobileNum);
            // sessionStorage.setItem("bcuserName", respJson.userName);
            if (respJson.statusmsg === "SUCCESS") {
              document.getElementById("bank").disabled = true;
              document.getElementById("empid").readOnly = true;
              $("#empid").prop("readonly", true);
              $("#bcpan").removeAttr("hidden");
              $("#otp").removeAttr("hidden");
              $("#mobile").removeAttr("hidden");

              $("#bcname1").removeAttr("hidden");
              $("#resendOtp").removeAttr("hidden");
              $("#loginBtn").removeAttr("hidden");
              $("#details1").removeAttr("hidden");
              $("#details").removeAttr("hidden");
              $("#updateBtn").removeAttr("hidden");
              $("#updateBCDeatialsMsg").removeAttr("hidden");
              $("#loginMsg1").removeAttr("hidden");
              $("#loginMsg2").removeAttr("hidden");
              $("#generateOtp").remove();

              this.setState({ loaded: true });
            } else {
              this.setState({ loaded: true });
              alert(respJson.statusmsg);
            }
          })
          .catch((e) => {
            this.setState({ loaded: true });
            alert("Login failed try again...");
          });
      } else {
        alert("Select the bank.");
      }
    } else {
      alert("Enter BC ID.");
    }
  };

  empidEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      this.generateOtp();
    }
  };

  otpEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      this.login();
    }
  };
  login = () => {
    if (this.state.emppan.length !== 0) {
      //if (this.state.otp.length !== 0) {
      if (this.state.details1 == "Y") {
        var jsonData = {
          empid: this.state.empid,
          empgroup: this.state.selectedbank,
          // otp: this.state.otp,
          emppan: this.state.emppan,
        };
        this.setState({ loaded: false });
        fetch(URL.login, {
          method: "POST",
          cache: "no-cache",
          async: false,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(jsonData),
        })
          .then((resp) => {
            return resp.json();
          })
          .then((respJson) => {
            if (respJson.statusmsg === "SUCCESS") {
              let isAuthenticated = true;

              sessionStorage.setItem("isAuthenticated", isAuthenticated);
              sessionStorage.setItem("empid", respJson.empid);
              sessionStorage.setItem("empname", respJson.name);
              sessionStorage.setItem("empcompany", respJson.company);
              sessionStorage.setItem("authToken", respJson.authToken);
              sessionStorage.setItem("empGroup", respJson.empGroup);
              sessionStorage.setItem("additionalData", respJson.additionalData);
              sessionStorage.setItem("type", "BC");
              this.props.history.push("/CVP/documentList");
              this.setState({ loaded: true });
            } else {
              this.setState({ loaded: true });
              alert(respJson.statusmsg);
            }
          })
          .catch((e) => {
            this.setState({ loaded: true });
            alert("Login failed try again...");
          });
      } else {
        alert("Please select the confirmation box to proceed");
      }
      // } else {
      //   alert("Enter OTP");
      // }
    } else {
      alert("Please enter the BC PAN.");
    }
  };

  updatedetails = () => {
    $("#loginMsg1").remove();
    $("#loginMsg2").remove();
    $("#otp").remove();
    $("#mobile").remove();
    $("#bcpan").remove();

    $("#bcname1").remove();
    $("#resendOtp").remove();
    $("#loginBtn").remove();
    $("#details1").remove();
    $("#details").remove();
    document.getElementById("cardgroupdiv").style.width = "110%";
    document.getElementById("bank").style.width = "495px";
    $("#updateBtn").remove();
    $("#updateBCDeatialsMsg").remove();
    $("#group1").removeAttr("hidden");
    $("#updateDetails").removeAttr("hidden");
    $("#group2").removeAttr("hidden");
    $("#group3").removeAttr("hidden");
    $("#group4").removeAttr("hidden");
    $("#group5").removeAttr("hidden");
    $("#group6").removeAttr("hidden");
    $("#submitBtn").removeAttr("hidden");
    $("#cancelBtn").removeAttr("hidden");
    $("#aadharMsg").removeAttr("hidden");
  };

  canceldetails = () => {
    window.location.reload(false);
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
        <Container>
          <div className="title row">
            <h1>Digital Signing Agreement Portal</h1>
          </div>
          <br />
          <Row className="justify-content-center">
            <Col md="8">
              {/* md="8" */}
              <CardGroup id="cardgroupdiv">
                <Card className="p-8">
                  <CardBody>
                    <Form>
                      <h4 id="loginMsg1" hidden>
                        Login
                      </h4>
                      {/* <p id="loginMsg2" className="text-muted" hidden >Login In to access</p> */}
                      <h4 id="updateDetails" hidden>
                        Update Details
                      </h4>
                      <InputGroup className="mb-3" id="bc_id">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="BC ID"
                          name="empid"
                          id="empid"
                          autoComplete="off"
                          onKeyPress={this.empidEnter}
                          value={this.state.empid}
                          onChange={this.setInput}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3" id="select_id">
                        <select
                          id="bank"
                          name="selectedbank"
                          autoComplete="off"
                          onChange={this.setInput}
                          style={{ width: "372px", height: "33px" }}
                        >
                           <option id="select" value="">Please Select the Bank</option>
                          
                          {this.state.bankInfo ? (
                            this.state.bankInfo.map((list, index) => {
                              return (
                                <option id={list.grpCode} value={list.grpCode}>
                                  {list.BankName}
                                </option>
                              )

                            })) : (

                            <></>
                          )

                          }


 




                          {/* <option id="select" value="">
                            Please Select the Bank
                          </option>
                          <option id="aryb" value="ARYB">
                            Aryavarth Bank
                          </option>
                          <option id="bobfi" value="BOBFI">
                            Bank of Baroda
                          </option>
                          <option id="bobupsrlm" value="BOBUPSRLM">
                            Bank of Baroda-UPSRLM
                          </option>
                          <option id="boi" value="BOI">
                            Bank of India
                          </option>
                          <option id="cbin" value="CBIN">
                            Central Bank of India
                          </option>
                          <option id="eaala" value="ALLA">
                            e-Allahabad Bank
                          </option>
                          <option id="andb" value="ANDB">
                            e-Andhra Bank
                          </option>
                          <option id="ecorp" value="eCORP">
                            e-Corporation Bank
                          </option>
                          <option id="iob" value="IOB">
                            Indian Overseas Bank
                          </option>
                          <option id="kagb" value="KAGB">
                            Karnataka Gramin Bank
                          </option>
                          <option id="kvgb" value="KVGB">
                            Karnataka Vikas Grameena Bank
                          </option>
                          <option id="kvbl" value="KVBL">
                            Karur Vysya Bank Limited
                          </option>

                          <option id="lavb" value="LAVB">
                            Lakshmi Vilas Bank
                          </option>

                          <option id="punb" value="PUNB">
                            Punjab National Bank
                          </option>
                          <option id="sbin" value="SBIN">
                            State Bank Of India
                          </option>
                          <option id="uco" value="UCO">
                            UCO Bank
                          </option>
                          <option id="ujvn" value="UJVN">
                            Ujjivan Small Finance Bank
                          </option>
                          <option id="ubi" value="UBIN">
                            Union Bank of India
                          </option>
                          <option id="tmbl" value="TMBL">
                            Tamilnadu Mercantile Bank Limited
                          </option>
                          <option id="brkgb" value="BRKGB">
                            Baroda Rajasthan Kshetriya Gramin Bank
                          </option> 
                         <option id="corp" value="CORP">Corporation Bank</option>
                          <option id="obc" value="OBC">Oriental Bank of Commerce</option>*/}




                        </select> 
                      </InputGroup>

                      <InputGroup className="mb-3" id="bcpan" hidden>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="PAN"
                          name="emppan"
                          id="emppan"
                          autoComplete="off"
                          maxLength="14"
                          minLength="13"
                          required={true}
                          value={this.state.bcpan}
                          onChange={this.setInput}
                        />
                      </InputGroup>

                      {/* <InputGroup className="mb-4" id="otp" hidden>
                        <InputGroupAddon addonType="prepend" >
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon> 
                        <Input type="password" placeholder="OTP" name="otp" autoComplete="off" maxLength="6"
                          onKeyPress={this.otpEnter} value={this.state.otp} onChange={this.setInput} />
                             <Button color="primary" className="px-2" id="resendOtp" onClick={this.generateOtp} hidden>Resend OTP</Button>
                      </InputGroup>  */}

                      <div id="bcname1" hidden>
                        <span>BC name is: {this.state.userName}</span>
                      </div>

                      <div id="mobile" hidden>
                        <span>
                          {this.state.mobilemsg} {this.state.mobile}
                        </span>
                      </div>
                      <div id="updateBCDeatialsMsg" hidden>
                        <p>
                          Note: Make Sure the name and mobile are as per Aadhaar
                          records. If the name doesn't match with Aadhaar,
                          Agreement Signing will be rejected and each rejection
                          will be charged ₹50.
                        </p>
                      </div>

                      <InputGroup className="mb-3" id="group1" hidden>
                        <label id="empName1">Name : &nbsp;</label>
                        <Input
                          type="text"
                          placeholder="Name as per Aadhaar"
                          name="empName"
                          id="empName"
                          autoComplete="off"
                          required={true}
                          value={this.state.empName}
                          maxLength="100"
                          onChange={this.setBCDetails}
                        />
                        {/* // <p className="span" style={{ color: "red" }}></p> */}
                      </InputGroup>
                      <InputGroup className="mb-3" id="group2" hidden>
                        <label id="mobAadhar1">
                          Aadhaar Phone.No. : &nbsp;
                        </label>
                        <Input
                          type="text"
                          placeholder="Mobile Number"
                          name="mobAadhar"
                          id="mobAadhar"
                          autoComplete="off"
                          maxLength="10"
                          required={true}
                          minLength="10"
                          value={this.state.mobAadhar}
                          onChange={this.setBCDetails}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3" id="group5" hidden>
                        <label id="empDOB1">D.O.B :&nbsp;</label>
                        <Input
                          type="date"
                          placeholder=" "
                          name="empDOB"
                          id="empDOB"
                          autoComplete="off"
                          required={true}
                          value={this.state.empDOB}
                          onChange={this.setBCDetails}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3" id="group3" hidden>
                        <label id="empPanNumber1">
                          PAN/Settelment Acc No. :&nbsp;
                        </label>
                        <Input
                          type="text"
                          placeholder="PAN/Settelment Acc No."
                          name="empPanNumber"
                          id="empPanNumber"
                          autoComplete="off"
                          maxLength="20"
                          minLength="13"
                          required={true}
                          value={this.state.empPanNumber}
                          onChange={this.setBCDetails}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3" id="group6" hidden>
                        <label id="mobMessaging1">
                          Alternative No. :&nbsp;
                        </label>
                        <Input
                          type="text"
                          placeholder="WhatsApp Number"
                          name="mobMessaging"
                          id="mobMessaging"
                          autoComplete="off"
                          maxLength="10"
                          required={true}
                          minLength="10"
                          value={this.state.mobMessaging}
                          onChange={this.setBCDetails}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3" id="group4" hidden>
                        <input id="bcname" type="checkbox" name="bcname" />
                        <label id="userType1">&nbsp;Update Name</label>
                        <input
                          id="bcmobileNum"
                          type="checkbox"
                          name="bcmobileNum"
                        />
                        <label id="userType2">&nbsp;Update Phone Number</label>
                      </InputGroup>
                      <InputGroup className="mb-4" id="verifyOtpFeild" hidden>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="OTP"
                          name="verifyOtp"
                          autoComplete="off"
                          maxLength="6"
                          value={this.state.verifyOtp}
                          onChange={this.setBCDetails}
                        />
                      </InputGroup>
                      <div id="aadharMsg" hidden>
                        <p>
                          Note: Please Enter the name and mobile number as per
                          Aadhaar records. Change of name and mobile number
                          change is allowed only once.
                        </p>
                      </div>
                      <Row>
                        <Col xs="12">
                          <Button
                            color="primary"
                            className="px-4"
                            id="verifyOtp"
                            onClick={this.VerifyMobile}
                            hidden
                          >
                            Verify OTP
                          </Button>
                          <Button
                            color="primary"
                            className="px-4"
                            id="generateOtp"
                            onClick={this.generateOtp}
                            hidden
                          >
                            Next
                          </Button>
                          {/* <Button color="primary" className="px-4" id="generateOtp" onClick={this.generateOtp} hidden >Generate OTP</Button> */}
                          <div>
                            <input
                              id="details1"
                              type="checkbox"
                              name="details1"
                              onChange={this.onChecked}
                              hidden
                            />
                            <label id="details" hidden>
                              {" "}
                              &nbsp;I have verified the details
                            </label>
                          </div>
                          <Button
                            color="primary"
                            className="px-2"
                            id="loginBtn"
                            onClick={this.login}
                            hidden
                          >
                            Proceed With Signing
                          </Button>
                          <Button
                            color="primary"
                            className="px-2"
                            id="updateBtn"
                            onClick={this.updatedetails}
                            hidden
                          >
                            Update Details
                          </Button>
                        </Col>
                        <Col xs="12">
                          <Button
                            color="primary"
                            className="px-4"
                            id="submitBtn"
                            onClick={this.submitdetails}
                            hidden
                          >
                            Submit
                          </Button>
                          <Button
                            color="primary"
                            className="px-4"
                            id="cancelBtn"
                            onClick={this.canceldetails}
                            hidden
                          >
                            Cancel
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BcLogin;
