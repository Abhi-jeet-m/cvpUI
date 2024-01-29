import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import DefaultHeader from "../PledgeInfoDoc/DefaultHeader";
import Loader from "react-loader";
import { URL } from "../../Constant";
import { Button, Input } from "reactstrap";

class WitnessInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      witnessName: "",
      phoneNumber: "",
      address: "",
      district: "",
      state: "",
      isdisable: true,
      docCode: "",
      signOrder: "",
      refno: "",
      signedFilePath: "",
      loaded: true,
      username: ""

    };
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentWillMount() {
    sessionStorage.removeItem("handSignImg");
    //   if (this.props.location.frompath === 'response') {
    //     this.setState({
    //       docCode: this.props.location.state.details.docCode,
    //       signOrder: this.props.location.state.details.signOrder,
    //       signedFilePath: this.props.location.state.details.signedFilePath,
    //       refno: this.props.location.state.details.refno
    //     })
    //   }else {
    //       this.props.history.push("/CVP/bcLogin")
    //   }
  }
  componentDidMount() {
    if (sessionStorage.getItem("signOrder") === "0") {
      document.getElementById("firstSign").style.display = "";
    }
    if (sessionStorage.getItem("signOrder") === "1") {
      document.getElementById("witnessBtn").style.display = "";
      // document.getElementById("familyTable").style.display = 'none';
    } else {
      document.getElementById("firstSign").style.display = "";
    }
  }
  onCloseOTPModal = () => {
    this.setState({ openOTPModal: false });
  };

  setInput = (e) => {
    let regName = new RegExp(/^[A-Za-z._ ]*$/);
    let regPassword = new RegExp(/^[A-Za-z0-9!.@#,\$%\^&-_ ]*$/);
    let regNum = new RegExp(/^[0-9]*$/);
    // let regNum = new RegExp(/^[6789][0-9]{9}$/);
    let value = e.target.value;
    let name = e.target.name;

    if (name === "witnessName") {
      if (regName.test(e.target.value)) {
        this.setState({ witnessName: value });
      } else {
        return false;
      }
    }

    if (name === "phoneNumber") {
      if (regNum.test(e.target.value)) {
        this.setState({ phoneNumber: value });
      } else {
        return false;
      }
    }
    if (name === "address") {
      if (regPassword.test(e.target.value)) {
        this.setState({ address: value });
      } else {
        return false;
      }
    }
    if (name === "district") {
      if (regName.test(e.target.value)) {
        this.setState({ district: value });
      } else {
        return false;
      }
    }
    if (name === "state") {
      if (regName.test(e.target.value)) {
        this.setState({ state: value });
      } else {
        return false;
      }
    }
  };

  //getting terms and condition for performing  OTP based siging for Witness
  getTermsandConditions = () => {
    if (
      this.state.witnessName.length !== 0 &&
      this.state.witnessName.trim() !== ""
    ) {
      if (
        this.state.phoneNumber.length !== 0 &&
        this.state.phoneNumber.trim() !== ""
      ) {
        // if (
        //   sessionStorage.getItem("bcMobileNum") ==
        //     this.state.phoneNumber &&
        //   sessionStorage.getItem("bcuserName") == this.state.witnessName
        // ) {
        if (
          this.state.address.length !== 0 &&
          this.state.address.trim() !== ""
        ) {
          if (
            this.state.district.length !== 0 &&
            this.state.district.trim() !== ""
          ) {
            if (
              this.state.state.length !== 0 &&
              this.state.state.trim() !== ""
            ) {
              var signDisplayInfo =
                "Digitally signed with OTP, by" +
                "\n" +
                this.state.witnessName +
                "\n" +
                "Mobile : " +
                this.state.phoneNumber +
                "\n" +
                "Address : " +
                this.state.address +
                "\n" +
                this.state.district +
                "," +
                this.state.state +
                "\n";
              let data = {
                signerMobile: this.state.phoneNumber,
                signerName: this.state.witnessName,
                signDisplayInfo: signDisplayInfo,
              };
              this.props.history.push({
                pathname: "/CVP/witnessSigning",
                frompath: "/CVP/witnessInfo",
                state: {
                  details: data,
                },
              });
            } else {
              alert("Please enter state");
            }
          } else {
            alert("Please enter district..!");
          }
        } else {
          alert("Please enter address");
        }
        // } else {
        //   alert("BC and witness cannot be the same person");
        // }
      } else {
        alert("Please enter phone number..!");
      }
    } else {
      alert("Please enter the witness name..!");
    }
  };

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

  withesign = () => {
    // let regNum = new RegExp(/^[0-9]*$/);
    let regNum = new RegExp("^[6789][0-9]{9}$");
    let message="";
    var familyInfoTOPdf = {};
    var relationship = [];
    let validations = true;
    // var fathername = document.getElementById("fathername").value.trim();
    // var fatherphno = document.getElementById("fatherphno").value.trim();
    // var mothername = document.getElementById("mothername").value.trim();
    // var motherphno = document.getElementById("motherphno").value.trim();
    // var spousename = document.getElementById("spousename").value.trim();
    // var spousephno = document.getElementById("spousephno").value.trim();
    // var childname = document.getElementById("childname").value.trim();
    // var childphno = document.getElementById("childphno").value.trim();
    // var child2name = document.getElementById("child2name").value.trim();
    // var child2phno = document.getElementById("child2phno").value.trim();


    // // atleast one checkbox needs to be checked
    // if (document.getElementById("checkboxSingle").checked === false && document.getElementById("checkbox1").checked === false && document.getElementById("checkbox2").checked === false && document.getElementById("checkbox3").checked === false && document.getElementById("checkbox4").checked === false && document.getElementById("checkbox5").checked === false) {
    //   alert("Atleast one family member's details is mandatory")
    // }
    // else {
    //   if (document.getElementById("checkboxSingle").checked === false) {
    //     if (document.getElementById("checkbox1").checked === true) {
    //       if (fathername === "" || fatherphno === "" || fatherphno.length < 10|| !regNum.test(fatherphno)) {
    //         validations = false;
    //         if (fathername === "") {
    //           message = "inavalid name , please check your father's name"
    //         }
    //         if (fatherphno === "" || fatherphno.length < 10 || !regNum.test(fatherphno)) {

    //           message = "Invalid Phone number, please check your father's phone number"
    //         }
    //         message = "please check father details input"
    //       }
    //       else {
    //         var temp = { "relationship": "Father", "name": fathername, "phno": fatherphno }
    //         relationship.push(temp);
    //       }
    //     }
    //     if (document.getElementById("checkbox2").checked === true) {
    //       if (mothername === "" || motherphno === "" || motherphno.length < 10|| !regNum.test(motherphno)) {
    //         validations = false;
    //         if (mothername === "") {
    //           message = "inavalid name , please check your mother's name"
    //         }
    //         if (motherphno === "" || motherphno.length < 10 || !regNum.test(motherphno)) {
    //           message = "Invalid Phone number, please check your mother's phone number"
    //         }
    //       }
    //       else {
    //         var temp = { "relationship": "Mother", "name": mothername, "phno": motherphno }
    //         relationship.push(temp);
    //       }

    //     }
    //     if (document.getElementById("checkbox3").checked === true) {
    //       if (spousename === "" || spousephno === "" || spousephno.length < 10|| !regNum.test(spousephno)) {
    //         validations = false;
    //         if (spousename === "") {
    //           message = "invalid name , please check your spouse's name"
    //         }
    //         if (spousephno === "" || spousephno.length < 10 || !regNum.test(spousephno)) {
    //           message = "Invalid Phone number, please check your spouse's phone number"
    //         }
    //       }
    //       else {
    //         var temp = { "relationship": "Spouse", "name": spousename, "phno": spousephno }
    //         relationship.push(temp);
    //       }

    //     }
    //     if (document.getElementById("checkbox4").checked === true) {
    //       if (childname === "" || childphno === "" || childphno.length < 10|| !regNum.test(childphno)) {
    //         validations = false;
    //         if (childname === "") {
    //           message = "invalid name, please check your child's name"
    //         }
    //         if (childphno === "" || childphno.length < 10 || !regNum.test(childphno)) {
    //           message = "Invalid Phone number, please check your child's phone number"
    //         }
    //       }
    //       else {
    //         var temp = { "relationship": "First child", "name": childname, "phno": childphno }
    //         relationship.push(temp);
    //       }

    //     }
    //     if (document.getElementById("checkbox5").checked === true) {
    //       if (child2name === "" || child2phno === "" || child2phno.length < 10|| !regNum.test(child2phno)) {
    //         validations = false;
    //         if (child2name === "") {
    //           message = "invalid name, please check your child's name"
    //         }
    //         if (child2phno === "" || child2phno.length < 10 || !regNum.test(child2phno)) {
    //           message = "Invalid Phone number, please check your child's phone number"
    //         }

    //       }
    //       else {
    //         var temp = { "relationship": "Second child", "name": child2name, "phno": child2phno }
    //         relationship.push(temp);
    //       }

    //     }
    //     console.log(relationship)

    //     familyInfoTOPdf = { "isFamilyPresent": true, "familyDetails": relationship, "username": this.state.username }

    //   }
    //   else {

    //     familyInfoTOPdf = { "isFamilyPresent": false, "familyDetails": relationship, "username": this.state.username }
    //   }
      // console.log(validations)

      // if (validations === true) {
        console.log(familyInfoTOPdf)
        var data =
          "Digitally signed with OTP, by" +
          "\n" +
          this.state.witnessName +
          "\n" +
          "Mobile : " +
          this.state.phoneNumber +
          "\n" +
          "Address : " +
          this.state.address +
          "\n" +
          this.state.district +
          ", " +
          this.state.state +
          "\n";
        if (
          this.state.witnessName.length !== 0 &&
          this.state.witnessName.trim() !== ""
        ) {
          if (
            this.state.phoneNumber.length !== 0 &&
            this.state.phoneNumber.trim() !== ""
          ) {
            if (this.state.phoneNumber.length === 10) {
              if (
                this.state.address.length !== 0 &&
                this.state.address.trim() !== ""
              ) {
                if (
                  this.state.district.length !== 0 &&
                  this.state.district.length !== ""
                ) {
                  if (
                    this.state.state.length !== 0 &&
                    this.state.state.length !== ""
                  ) {
                    var signerData = {
                      signerName: this.state.witnessName,
                      signerMobile: this.state.phoneNumber,
                    };
                    sessionStorage.setItem(
                      "signerData",
                      JSON.stringify(signerData)
                    );

                    sessionStorage.setItem("signDisplayInfo", data);
                    sessionStorage.setItem("witnessName", this.state.witnessName);
                    sessionStorage.setItem("phoneNumber", this.state.phoneNumber);
                    let jsonData = {
                      langselected: sessionStorage.getItem("langselected"),
                      empid: sessionStorage.getItem("empid"),
                      empcompany: sessionStorage.getItem("empcompany"),
                      authToken: sessionStorage.getItem("authToken"),
                      type: sessionStorage.getItem("type"),
                      docCode: sessionStorage.getItem("docCode"),
                      empGroup: sessionStorage.getItem("empGroup"),
                      familyInfo: familyInfoTOPdf

                    };
                    this.setState({ loaded: false });
                    console.log(validations)

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
                          var path = respJson.PDFPath;
                          console.log(respJson.username)
                          this.setState({ username: respJson.username })
                          console.log(this.state.username)
                          console.log(familyInfoTOPdf)
                          familyInfoTOPdf.username = this.state.username
                          console.log(familyInfoTOPdf)
                          //for local use
                          //var res = path.replace("\\", "@")

                          //for production use
                          var res = path.replace("/", "@");
                          sessionStorage.setItem("PDFPath", res);
                          this.props.history.push({
                            pathname: '/CVP/instructions',
                            state: familyInfoTOPdf
                          });

                          this.setState({ loaded: true });
                        } else {
                          // alert(respJson.statusDetails);
                          this.setState({ loaded: true });
                        }
                      })
                      .catch((e) => {
                        alert("Failed to connect...");
                        this.setState({ loaded: true });
                      });
                  } else {
                    alert("Please enter state");
                  }
                } else {
                  alert("Please enter district..!");
                }
              } else {
                alert("Please enter the address..!");
              }
            } else {
              alert("Please enter valid phone number..!");
            }
          } else {
            alert("Please enter phone number..!");
          }
        } else {
          alert("Please enter the witness name..!");
        }

    //   }
    //   else {
    //     alert(message)
    //   }
    // }

  };

  // check1listFunc = () => {
  //   if (document.getElementById("checkbox1").checked === true) {
  //     document.getElementById("fathername").removeAttribute("disabled")
  //     document.getElementById("fatherphno").removeAttribute("disabled")
  //     // document.getElementById("fathername").setAttribute("disabled","false");
  //     // document.getElementById("fatherphno").setAttribute("disabled","false");
  //     document.getElementById("fathername").setAttribute("required", "true");
  //     document.getElementById("fatherphno").setAttribute("required", "true");
  //   }
  //   else {
  //     document.getElementById("fathername").value = ""
  //     document.getElementById("fatherphno").value = ""
  //     document.getElementById("fathername").disabled = !this.checked
  //     document.getElementById("fatherphno").disabled = !this.checked
  //   }

  // }

  // check2listFunc = () => {
  //   if (document.getElementById("checkbox2").checked === true) {
  //     document.getElementById("mothername").removeAttribute("disabled")
  //     document.getElementById("motherphno").removeAttribute("disabled")
  //     // document.getElementById("fathername").setAttribute("required",true);
  //     // document.getElementById("fatherphno").setAttribute("required",true);
  //   }
  //   else {
  //     document.getElementById("mothername").value = ""
  //     document.getElementById("motherphno").value = ""
  //     document.getElementById("mothername").disabled = !this.checked
  //     document.getElementById("motherphno").disabled = !this.checked
  //   }


  // }

  // check3listFunc = () => {
  //   if (document.getElementById("checkbox3").checked === true) {
  //     document.getElementById("spousename").removeAttribute("disabled")
  //     document.getElementById("spousephno").removeAttribute("disabled")
  //   }
  //   else {
  //     document.getElementById("spousename").value = ""
  //     document.getElementById("spousephno").value = ""
  //     document.getElementById("spousename").disabled = !this.checked
  //     document.getElementById("spousephno").disabled = !this.checked
  //   }



  // }

  // check4listFunc = () => {
  //   if (document.getElementById("checkbox4").checked === true) {
  //     document.getElementById("childname").removeAttribute("disabled")
  //     document.getElementById("childphno").removeAttribute("disabled")
  //   }
  //   else {
  //     document.getElementById("childname").value = ""
  //     document.getElementById("childphno").value = ""
  //     document.getElementById("childname").disabled = !this.checked
  //     document.getElementById("childphno").disabled = !this.checked
  //   }




  // }

  // check5listFunc = () => {
  //   if (document.getElementById("checkbox5").checked === true) {
  //     document.getElementById("child2name").removeAttribute("disabled")
  //     document.getElementById("child2phno").removeAttribute("disabled")
  //   }
  //   else {
  //     document.getElementById("child2name").value = ""
  //     document.getElementById("child2phno").value = ""
  //     document.getElementById("child2name").disabled = !this.checked
  //     document.getElementById("child2phno").disabled = !this.checked
  //   }

  // }
  // checklistsingle = () => {
  //   // alert("check box 6")
  //   if (document.getElementById("checkboxSingle").checked === true) {

  //     document.getElementById("checkbox1").disabled = !this.checked
  //     document.getElementById("fathername").value = ""
  //     document.getElementById("fatherphno").value = ""
  //     document.getElementById("fathername").disabled = !this.checked
  //     document.getElementById("fatherphno").disabled = !this.checked

  //     document.getElementById("checkbox2").disabled = !this.checked
  //     document.getElementById("mothername").value = ""
  //     document.getElementById("motherphno").value = ""
  //     document.getElementById("mothername").disabled = !this.checked
  //     document.getElementById("motherphno").disabled = !this.checked

  //     document.getElementById("checkbox3").disabled = !this.checked
  //     document.getElementById("spousename").value = ""
  //     document.getElementById("spousephno").value = ""
  //     document.getElementById("spousename").disabled = !this.checked
  //     document.getElementById("spousephno").disabled = !this.checked

  //     document.getElementById("checkbox4").disabled = !this.checked
  //     document.getElementById("childname").value = ""
  //     document.getElementById("childphno").value = ""
  //     document.getElementById("childname").disabled = !this.checked
  //     document.getElementById("childphno").disabled = !this.checked


  //     document.getElementById("checkbox5").disabled = !this.checked
  //     document.getElementById("child2name").value = ""
  //     document.getElementById("child2phno").value = ""
  //     document.getElementById("child2name").disabled = !this.checked
  //     document.getElementById("child2phno").disabled = !this.checked
  //   }
  //   else {

  //     document.getElementById("checkbox1").checked = false
  //     document.getElementById("checkbox1").removeAttribute("disabled")

  //     document.getElementById("checkbox2").checked = false
  //     document.getElementById("checkbox2").removeAttribute("disabled")

  //     document.getElementById("checkbox3").checked = false
  //     document.getElementById("checkbox3").removeAttribute("disabled")

  //     document.getElementById("checkbox4").checked = false
  //     document.getElementById("checkbox4").removeAttribute("disabled")

  //     document.getElementById("checkbox5").checked = false
  //     document.getElementById("checkbox5").removeAttribute("disabled")

  //   }


  // }


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
            <div className="witness-container">
              <h2 style={{ marginLeft: "32%", paddingBottom: "2%" }}>
                <u>Witness Information</u>
              </h2>
              <div className="witnessTable" style={{ marginLeft: "12%" }}>
                <table style={{ width: "80%" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "3%", height: "25px" }}>
                        Witness Name :
                      </td>
                      <td style={{ width: "20%" }}>
                        <Input
                          type="text"
                          id="witnessName"
                          name="witnessName"
                          placeholder="Enter the Name"
                          value={this.state.witnessName}
                          onChange={this.setInput}
                          autoComplete="off"
                          maxLength="45"
                          required={true}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Phone Number :</td>
                      <td>
                        <Input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Enter Mobile Number"
                          value={this.state.phoneNumber}
                          onChange={this.setInput}
                          maxLength="10"
                          required={true}
                          autoComplete="off"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Address :</td>
                      <td>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Enter Address"
                           maxLength="45"
                          value={this.state.address}
                          onChange={this.setInput}
                          required={true}
                          autoComplete="off"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>District :</td>
                      <td>
                        <Input
                          type="text"
                          name="district"
                          placeholder="Enter District"
                          maxLength="24"
                          value={this.state.district}
                          onChange={this.setInput}
                          required={true}
                          autoComplete="off"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>State :</td>
                      <td>
                        <Input
                          type="text"
                          name="state"
                          placeholder="Enter State"
                          maxLength="24"
                          value={this.state.state}
                          onChange={this.setInput}
                          required={true}
                          autoComplete="off"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br /> <br />
              <b>
                To Proceed with witness signing, the witness person should have
                the mobile to receive OTP. Please make sure the mobile is
                present with witness before proceeding.
              </b>
              <br />
              <br />

              <br />
              <br />


              {/* <div className="familyTable" id="familyTable" style={{ marginLeft: "7%" }}>

                <h2 style={{ marginLeft: "27%", paddingBottom: "2%" }}>
                  <u>Family Information</u>
                </h2>




                <table style={{ width: "100%", marginLeft: "10%" }}>
                  <tr>
                    <td style={{ width: "1%", height: "25px", marginRight: "5%" }}>
                      <th>
                        Select
                      </th>

                    </td>
                    <td style={{ width: "3%", height: "25px", marginLeft: "5%" }}>
                      <th>
                        Relationship
                      </th>


                    </td>
                    <td style={{ width: "5%", height: "25px" }}>
                      <th>
                        Name
                      </th>



                    </td>
                    <td style={{ width: "5%", height: "25px" }}>
                      <th>
                        Phone Number
                      </th>

                    </td>
                    <tr></tr>
                  </tr>
                  <tr>
                    <td>
                      <Input style={{ marginLeft: "1%" }} type="checkbox" id="checkbox1" onClick={this.check1listFunc} ></Input>
                    </td>
                    <td width={3} style={{ width: "1%", height: "50px", columnCount: 1 }}>
                      Father
                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="fathername" placeholder="Enter Name" disabled="true" minLength={10} />

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>

                      <Input type="text" id="fatherphno" name="phoneNumber" placeholder="Enter Phno" maxLength="10" disabled="true" />

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "2%", height: "50px", columnCount: 2 }}>
                      <Input style={{ marginLeft: "1%" }} id="checkbox2" type="checkbox" onClick={this.check2listFunc} />
                    </td>
                    <td style={{ width: "3%", height: "50px", columnCount: 2 }}>
                      Mother
                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="mothername" placeholder="Enter Name" disabled="true" />

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="motherphno" placeholder="Enter Phno" maxLength="10" disabled="true" />

                    </td> <td style={{ width: "3%", height: "25px", columnCount: 2 }}>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "2%", height: "50px", columnCount: 2 }}>
                      <Input style={{ marginLeft: "1%" }} id="checkbox3" type="checkbox" onClick={this.check3listFunc} />
                    </td>
                    <td style={{ width: "3%", height: "50px", columnCount: 2 }}>
                      Spouse
                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="spousename" placeholder="Enter Name" disabled="true" />

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="spousephno" placeholder="Enter Phno" maxLength="10" disabled="true" />

                    </td> <td style={{ width: "3%", height: "25px", columnCount: 2 }}>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "2%", height: "50px", columnCount: 2 }}>
                      <Input style={{ marginLeft: "1%" }} type="checkbox" id="checkbox4" onClick={this.check4listFunc} />
                    </td>
                    <td style={{ width: "3%", height: "50px", columnCount: 2 }}>
                      First child

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="childname" placeholder="Enter Name" disabled="true" />

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="childphno" placeholder="Enter Phno" maxLength="10" disabled="true" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "2%", height: "50px", columnCount: 2 }}>
                      <Input style={{ marginLeft: "1%" }} type="checkbox" id="checkbox5" onClick={this.check5listFunc} />
                    </td>
                    <td style={{ width: "3%", height: "50px", columnCount: 2 }}>
                      Second child

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="child2name" placeholder="Enter Name" disabled="true" required="false" />

                    </td>
                    <td style={{ width: "3%", height: "25px", columnCount: 2 }}>
                      <Input type="text" id="child2phno" placeholder="Enter Phno" maxLength="10" disabled="true" required="false" />

                    </td>
                  </tr>

                </table>
                <br></br>
                <div>
                  <Input style={{ marginLeft: "7.5%" }} id="checkboxSingle" type="checkbox" onClick={this.checklistsingle} />
                  <text style={{ marginLeft: "22%" }}>I have no family, I am the single person of the family. </text>

                </div>

              </div> */}

              <br /><br />

              <Button
                color="primary"
                className="witnessBtn"
                style={{ display: "none", marginLeft: "32%" }}
                id="witnessBtn"
                onClick={this.getTermsandConditions}

              >
                Proceed with Signing
              </Button>
              <br />
              <Button
                color="primary"
                className="witnessBtn"
                style={{ display: "none" }}
                id="firstSign"
                onClick={this.withesign}
              >
                Proceed with Aadhaar eSign
              </Button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WitnessInfo;
