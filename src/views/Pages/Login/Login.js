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
import Logs from "./Logs";
import { URL } from "../../../Constant";
import $ from "jquery";
import Loader from "react-loader";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      empid: "",
      otp: "",
      selectedbank: "",
      selectedOption: "EMP",
      loaded: true,
    };
  }

  componentDidMount() {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      sessionStorage.setItem("userIP", data.ip);
    });
  }

  setInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "empid") {
      this.setState({ empid: value });
    }
    if (name === "otp") {
      this.setState({ otp: value });
    }
    if (name === "selectedbank") {
      this.setState({ selectedbank: value });
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

  generateOtp = () => {
    if (this.state.empid.length !== 0) {
      var jsonData = {
        usertype: "emp",
        empid: this.state.empid,
        password: "",
        username: "",
        empGroup: this.state.selectedbank,
        loginmode: "OTP",
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
          if (respJson.statusmsg === "SUCCESS") {
            document.getElementById("empid").readOnly = true;
            $("#empid").prop("readonly", true);
            $("#otp").removeAttr("hidden");
            $("#loginBtn").removeAttr("hidden");
            $("#mobileNumDisplay").removeAttr("hidden");
            $("#generateOtp").remove();
            this.setState({ loaded: true, mobileNum: respJson.mobilenum });
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
      alert("Enter Employee ID...");
    }
  };
  login = () => {
    if (this.state.otp.length !== 0) {
      var jsonData = {
        empid: this.state.empid,
        otp: this.state.otp,
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
            sessionStorage.setItem("type", "EMP");
            if (respJson.hasOwnProperty("companyFullName")) {
              sessionStorage.setItem("companyFullName", respJson.companyFullName);
            } else {
              sessionStorage.setItem("companyFullName", " ");
            }
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
      alert("Enter OTP...");
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
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
          <div>
            <Logs />
          </div>
          <div className="title row">
            <h1>Employee Information Portal</h1>
          </div>
          <br />
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h4>Login</h4>
                      <p className="text-muted">Login In to access</p>
                      <InputGroup className="mb-3" id="emp_id">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Employee ID"
                          name="empid"
                          id="empid"
                          autoComplete="off"
                          onKeyPress={this.empidEnter}
                          value={this.state.empid}
                          onChange={this.setInput}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4" id="otp" hidden>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="OTP"
                          name="otp"
                          autoComplete="off"
                          maxLength="6"
                          onKeyPress={this.otpEnter}
                          value={this.state.otp}
                          onChange={this.setInput}
                        />
                      </InputGroup>
                      <div id="mobileNumDisplay" hidden>
                        <span>OTP sent to: {this.state.mobileNum}</span>
                      </div>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            id="generateOtp"
                            onClick={this.generateOtp}
                          >
                            Generate OTP
                          </Button>
                          <br />
                          <Button
                            color="primary"
                            className="px-4"
                            id="loginBtn"
                            onClick={this.login}
                            hidden
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right" hidden>
                          <Button color="link" className="px-0">
                            Re-send OTP
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

export default Login;
