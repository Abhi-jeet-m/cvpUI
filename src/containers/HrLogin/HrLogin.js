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
import Logs from "../../views/Pages/Login/Logs";
import { URL } from "../../Constant";
import Loader from "react-loader";
import $ from "jquery";

export default class HrLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loaded: true,
    };
  }

  componentDidMount() {
    // alert("jgjhg")
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      sessionStorage.setItem("userIP", data.ip);
      // console.log(data.ip)
    });
  }

  setInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "username") {
      this.setState({ username: value });
    }
    if (name === "password") {
      this.setState({ password: value });
    }
  };

  keyEnter = (e) => {
    if (e.charCode === 13) {
      this.hrLogin();
    }
  };

  hrLogin = () => {
    if (this.state.username.length !== 0) {
      if (this.state.password.length !== 0) {
        let jsonData = { 
          usertype: "hr",
          empid: "",
          password: this.state.password,
          username: this.state.username,
          empGroup: "",
        };
        this.setState({ loaded: false });
        fetch(URL.hrLogin, {
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
              // console.log(respJson);
              let isAuthenticated = true;
              sessionStorage.setItem("isAuthenticated", isAuthenticated);
              sessionStorage.setItem("username", this.state.username);
              sessionStorage.setItem("authToken", respJson.authToken);
              sessionStorage.setItem("roleId", respJson.roleId);
              sessionStorage.setItem("privilegeCode", respJson.privilegeCode);
              sessionStorage.setItem("company", respJson.company);
              sessionStorage.setItem("empGroup", respJson.empGroup);

              var drodwn = JSON.stringify(respJson.dropDown);
              if (respJson.hasOwnProperty("dropDownforCompany")) {
                var dropDownforCompany = JSON.stringify(
                  respJson.dropDownforCompany
                );
                sessionStorage.setItem(
                  "dropDownforCompany",
                  dropDownforCompany
                );
              }

              // var dropdwn=respJson.dropDown.json();
              sessionStorage.setItem("dropDown", drodwn);

              this.setState({ loaded: true });
              if (this.state.username === "cbmahesh") {
                this.props.history.push("/CVP/dsctokenSign");
              } else {
                this.props.history.push("/CVP/reports");
              }
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
        alert("Enter Password...");
      }
    } else {
      alert("Enter Username...");
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
            <h1>Digital Signing Agreement Portal</h1>
          </div>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h4>Login</h4>
                      <br />
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="User Name"
                          name="username"
                          autoComplete="off"
                          value={this.state.username}
                          onChange={this.setInput}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4" id="otp">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="off"
                          value={this.state.password}
                          onChange={this.setInput}
                          onKeyPress={this.keyEnter}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4 mt-2"
                            id="loginBtn"
                            onClick={this.hrLogin}
                          >
                            Login
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
