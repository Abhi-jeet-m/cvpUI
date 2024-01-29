import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import { Button, Table, Input, InputGroup, Row } from "reactstrap";
import { URL } from "../../Constant";
import Modal from "react-responsive-modal";
import $ from "jquery";
import "../../scss/jquery.dataTables.css";
import "../../scss/style.scss";
import "./dscToken.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


import MaterialTable, { MTableToolbar } from "@material-table/core";

import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { Delete, MoreVert, MoreHoriz, BorderColor } from "@material-ui/icons";
import { height } from "@mui/system";

const DefaultHeader = React.lazy(() =>
  import("../PledgeInfoDoc/DefaultHeader")
);
var Loader = require("react-loader");
var dt = require("datatables.net");
var datetime = require("datetime-moment");
export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loaded: true,
      updateIp: "",
      enteredIP: "",
      group: "ALLA",
      dataList: [],
      rowData: {},
      isSigningPerformed:false
    };
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentDidMount() {
    // Dynamiically to fetch dropdowns values
    var obj = sessionStorage.getItem("dropDown");
    var object1 = JSON.parse(obj);

    // dynamically adding group
    var y = object1.groupList;
    // console.log(document.getElementById("group"));
    var doc2 = document.getElementById("group");
    var i;
    for (i = 0; i < y.length; i++) {
      var option1 = document.createElement("option");
      option1.text = y[i];
      option1.value = y[i];
      doc2.add(option1);
    }

    // dynamically adding company
    var doc3 = document.getElementById("company");
    var option2 = document.createElement("option");
    option2.text = object1.empCompany;
    option2.value = object1.empCompany;
    doc3.add(option2);
    // console.log();

    // this.getSignedList();
    this.getEmplList();
  }

  onCloseOTPModal = () => {
    this.setState({ openOTPModal: false });
  };

  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/hrlogin");
  }
  updateUserStatus = (rowData) => {
    let Status;
    var msg = "";
    if (rowData.empStatus == "0") {
      Status = "1";
      msg = "Do you want to enable user ID" + " : " + rowData.empid;
    } else {
      Status = "0";
      msg = "Do you want to disable user ID" + " : " + rowData.empid;
    }
    confirmAlert({
      message: msg,
      buttons: [
        {
          label: "Confirm",
          className: "confirmBtn",
          onClick: () => {
            let data = {
              authToken: sessionStorage.getItem("authToken"),
              empStatus: Status,
              empID: rowData.empid,
              userIp: sessionStorage.getItem("userIP"),
            };



            fetch(URL.updateUserStatus, {
              method: "POST",
              cache: "no-cache",
              async: false,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => {
                return response.json();
              })
              .then((responseJson) => {
                if (responseJson.status === "SUCCESS") {
                  confirmAlert({
                    message: responseJson.statusDetails,
                    buttons: [
                      {
                        label: "OK",
                        className: "confirmBtn",
                        onClick: () => {
                          window.location.reload(true);
                        },
                      },
                    ],
                  });
                  this.setState({ loaded: true });
                } else {
                  this.setState({ loaded: true });
                  if (responseJson.statusDetails === "Session Expired!!") {
                    sessionStorage.clear();
                    this.props.history.push("/CVP/hrlogin");
                  } else {
                    alert(responseJson.statusDetails);
                  }
                }
              })
              .catch((e) => {
                this.setState({ loaded: true });
                alert(e);
              });
          },
        },
        {
          label: "Cancel",
          className: "cancelBtn",
          onClick: () => { },
        },
      ],
    });
  };
  getEmplList = () => {
    var group = $("#group :selected").val();
    // console.log(group);
    let jsonData = {
      group: group,
      username: sessionStorage.getItem("username"),
      authToken: sessionStorage.getItem("authToken"),
    };
    this.setState({ loaded: false });
    fetch(URL.getEmplList, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status === "SUCCESS") {
          this.setState({ dataList: responseJson.list });
          this.setState({ loaded: true });
        } else {
          this.setState({ loaded: true });
          if (responseJson.statusDetails === "Session Expired!!") {
            sessionStorage.clear();
            this.props.history.push("/CVP/hrlogin");
          } else {
            alert(responseJson.statusDetails);
          }
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
  };

  setInput = (e) => {
    let regName = new RegExp(/^[A-Za-z0-9._ ]*$/);
    let value = e.target.value;
    let name = e.target.name;

    if (name === "enteredIP") {
      if (regName.test(e.target.value)) {
        this.setState({ enteredIP: value });
      } else {
        return false;
      }
    }
  };
  homeNavigation = () => {
    this.props.history.push("/CVP/dsctokenSign");
  };
  //to unHide modal to collect reason to delete user account
  openModal = () => {
    document.getElementById("modalreason").style.display = "block"
  }
  //to Hide modal to collect reason to delete user account
  closeModal = () => {
    document.getElementById("modalreason").style.display = "none";
  }

//delete user - unhides modal 
  deleteUser = (rowData) => {
    this.setState({ "rowData": rowData })
    document.getElementById("modalreason").style.display = "block"
  }
  //to accept reason and make a call to server
  submitReason = () => {
    var group = $("#group :selected").val();
    var reason = document.getElementById("reasonField").value
    if (reason === "" || reason.length < 5 || reason.length > 100) {
      alert("Enter a valid reason")
    }
    else {
      this.closeModal();
      console.log(reason)

//separate funtion for data creation ----

      let data = {
        authToken: sessionStorage.getItem("authToken"),
        empID: this.state.rowData.empid,
        empGrp: group,
        userIp: sessionStorage.getItem("userIP"),
        reason: reason,
        // recussiveCall: this.state.isSigningPerformed
      };
      console.log(data)
      this.setState({loaded:false})
      fetch(URL.deleteBC, {
        method: "POST",
        cache: "no-cache",
        async: false,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status === "Success") {
            if(responseJson.statusDetails === "Siginng is performed"){
              confirmAlert({
                message: "Agreement is signed, are you sure you want to remove BC?",
                buttons: [
                  {
                    label: "Remove",
                    className: "confirmBtn",
                    onClick: () => {
                     this.setState({ "isSigningPerformed": responseJson.isSigningPerformed })
                    //  this.submitReason2();
                    let dataAfterConfirmation = {
                           authToken: sessionStorage.getItem("authToken"),
                           encypInputs:responseJson.inputs,
                           recussiveCall:true,
                           encypUserdetail:responseJson.userdetail
                        };
                        this.setState({loaded:false})
                        fetch(URL.deleteBC, {
                          method: "POST",
                          cache: "no-cache",
                          async: false,
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(dataAfterConfirmation),
                        })
                        .then((response) => {
                          return response.json();
                        })
                        .then((responseJson) => {
                          if (responseJson.status === "Success") {
                            this.setState({loaded:true})
                            confirmAlert({
                              message: responseJson.statusDetails,
                              buttons: [
                                {
                                  label: "OK",
                                  className: "confirmBtn",
                                  onClick: () => {
                                    window.location.reload(true);
                                  },
                                },
                              ],
                            });
              
                          }
                          });

                    },
                  },
                  {
                    label: "Cancel",
                    className: "confirmBtn",
                    onClick: () => {},
                  }
                ],
              });

            }
            else{
              confirmAlert({
                message: responseJson.statusDetails,
                buttons: [
                  {
                    label: "OK",
                    className: "confirmBtn",
                    onClick: () => {
                      window.location.reload(true);
                    },
                  },
                ],
              });

            }




            
            this.setState({ loaded: true });
          } else {
            this.setState({ loaded: true });
            if (responseJson.statusDetails === "Session Expired!!") {
              sessionStorage.clear();
              this.props.history.push("/CVP/hrlogin");
            } else {
              alert(responseJson.statusDetails);
            }
          }
        })
    }
  }




  // submitReason2=()=>{
  //   let data = {
  //     authToken: sessionStorage.getItem("authToken"),
  //     empID: this.state.rowData.empid,
  //     empGrp: group,
  //     userIp: sessionStorage.getItem("userIP"),
  //     reason: reason,
  //     // recussiveCall: this.state.isSigningPerformed
  //   };

  // }


  render() {
    const columns = [
      {
        title: "BC Name",
        field: "empname",
        cellStyle: {
          paddingLeft: "1%",
          width: "30%",
          textAlign: "left",
        },
      },
      {
        title: "MID",
        field: "empid",
        cellStyle: {
          paddingLeft: "0%",
          width: "2%",
          textAlign: "left",
        },
      },
      {
        title: "Phone No.",
        field: "mobileNo",
        cellStyle: {
          paddingLeft: "1%",
          width: "2%",
          textAlign: "left",
        },
      },
      {
        title: "Email",
        field: "emailID",
        cellStyle: {
          paddingLeft: "0%",
          width: "20%",
          textAlign: "left",
        },
        render: (rowData) => {
          if (
            rowData.emailID.trim().length <= 0 ||
            rowData.emailID.trim() === "null"
          ) {
            return "-";
          } else {
            return rowData.emailID;
          }
        },
      },
      {
        title: "Status",
        field: "empStatus",
        cellStyle: {
          width: "10%",
          textAlign: "left",
        },
        render: (rowData) => {
          if (rowData.empStatus === "1") {
            return "Active";
          } else if (rowData.empStatus === "2") {
            return "Removed";
          }
          else {
            return "Disabled";
          }
        },
      },
      {
        title: "Actions",
        field: "empStatus",
        cellStyle: {        
          width: "30%",
          textAlign: "left",
        },
        //         <Button variant="outlined" startIcon={<DeleteIcon />}>
        //   Delete
        // </Button>
        render: (rowData) => {
          if (rowData.empStatus === "1") {
            return (
              <div>
                <a
                  style={{ color: "blue" }}
                  type="button"
                  onClick={(row) => this.updateUserStatus(rowData)}>
                  Disable
                </a>
                /
                <a
                  type="button"
                  style={{ color: "red", marginLeft: "60%" }}
                  onClick={(row) => this.deleteUser(rowData)}>
                  Remove
                </a>
              </div>

            );
          }
          else if (rowData.empStatus === "2") {
            return (
              <div>-</div>
            );

          }
          else {
            return (
              <div>
                <a
                  style={{ color: "green" }}
                  type="button"
                  onClick={(row) => this.updateUserStatus(rowData)}>
                  Enable
                </a>
                /
                <a
                  type="button"
                  style={{ color: "red", marginLeft: "60%" }}
                  onClick={(row) => this.deleteUser(rowData)}>
                  Remove
                </a>

              </div>



            );
          }
        },
      },

    ];
    const data = this.state.dataList;
    const { openOTPModal } = this.state;
    return (
      <div className="app sidebar-show">

        <div class="modal" id="modalreason" tabindex="-1" role="dialog" display="none" style={{ backdropFilter: "blur(8px)" }}>
          <div class="modal-dialog-centered modal-sm" style={{ marginLeft: "35%" }}>
            <div class="modal-content" style={{ borderWidth: "0.2rem", borderColor: "black" }} >
              <div class="modal-body">
                <h4>Confirmation for removal</h4>
                <table style={{ width: "120%" }}>
                  <tr><td><b>User ID</b></td><td>: {this.state.rowData.empid}</td></tr>
                  <tr><td><b>BC Name</b></td><td>: {this.state.rowData.empname}</td></tr>
                  <tr>
                    <td><label><b>Reason</b></label></td>
                    <td><textarea minLength={15} maxLength={100} type="text" id="reasonField" style={{ width: "80%", backgroundColor: "#EBF4FA" }}></textarea></td>
                  </tr>
                </table>
                <button type="button" class="btn btn-primary" onClick={this.submitReason} style={{ marginLeft: "15%" }}>Confirm</button>
                <button type="button" class="btn btn-primary" onClick={this.closeModal} style={{ marginLeft: "15%" }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal Content</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>




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
        <div className="list-container">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "93%" }}>
                  <Modal
                    className="modal-container"
                    open={openOTPModal}
                    onClose={this.onCloseOTPModal}
                    center={true}
                  >
                    <div className="para-text" id="otpmodalpara-text">
                      <div className="para-content">
                        <Row id="otpmodalrow">
                          <InputGroup className="mb-3">
                            <label id="existingIPLabel">
                              Existing IP: &nbsp;
                            </label>
                            <Input
                              type="text"
                              placeholder=""
                              id="existingIP"
                              name="mobileotp"
                              maxLength="15"
                              required={true}
                              value={this.state.updateIp}
                              autoComplete="off"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <label id="newIPLabel">New IP: &nbsp;</label>
                            <Input
                              type="text"
                              id="enteredIP"
                              name="enteredIP"
                              placeholder="Enter the IP Address"
                              value={this.state.enteredIP}
                              onChange={this.setInput}
                              autoComplete="off"
                              maxLength="15"
                              required={true}
                            ></Input>
                          </InputGroup>

                          <Button
                            color="primary"
                            id="submitIpAddress"
                            className="px-0"
                            onClick={this.updateBcCellIP}
                          >
                            Submit
                          </Button>
                        </Row>
                      </div>
                    </div>
                  </Modal>
                  Company :&nbsp;
                  <select
                    id="company"
                    name="selectedcompany"
                    disabled
                    style={{ width: "8%" }}
                  >
                    {/* <option id="i25bca" value="i25BCA">i25BCA</option> */}
                  </select>
                  &nbsp; &nbsp; Group :&nbsp;
                  <select
                    id="group"
                    name="selectedgroup"
                    onChange={() => this.getEmplList()}
                    style={{ width: "8%", marginBottom: "6px" }}
                  ></select>
                </td>
                <td style={{ paddingRignt: "0%", textAlign: "right" }}></td>
                <td>
                  {" "}
                  <button
                    class="btn btn-primary "
                    style={{ textAlign: "center", marginBottom: "2px" }}
                    onClick={() => this.homeNavigation()}
                  >
                    <i style={{ color: "white" }} class="icon-home icon-3x">
                      {" "}
                      Home
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <MaterialTable
            columns={columns}
            data={data}
            options={{
              rowStyle: (x) => {
                if (x.tableData.id % 2) {
                  return { backgroundColor: "#ddd" };
                } else {
                  return { backgroundColor: "#f2f2f2" };
                }
              },

              search: true,
              // searchFieldVariant: "outlined",
              thirdSortClick: false, //------not to Allow unsorted state on third header click------------------
              actionsColumnIndex: -1, //-----------Align actions column at right side of the Table--------------
              padding: "dense", //-----------Adjust table row height------------------------------------
              sorting: true, //-----------In-built Sorting operation enabled------------------------
              showTitle: false, //-----------make table title invisible--------------------------------

              headerStyle: {
                borderTop: "2px inset ",
                top: 0,
                borderTopWidth: "2px",
                backgroundColor: "#0000ff",
                color: "white",
                opacity: "0.5",
                fontWeight: "normal",
                fontSize: "16px",
                paddingLeft: "auto",
                borderBottom: "2px inset ",
                textAlign: "left",
              },
              searchFieldStyle: {
                marginTop: "0px",
                paddingTop: "0px",
                paddingRight: "0px",
                color: "Black",
                top: "0px",
                marginBottom: "23px",
                border: "outset",
              },

              pageSize: 10,
              pageSizeOptions: [10, 15, 20],
            }}
            components={{
              Toolbar: (props) => {
                return (
                  <div style={{ backgroundColor: "#ddd", height: "38px" }}>

                    <MTableToolbar {...props} />
                  </div>
                );
              },
            }}
          />
          <br></br>
        </div>



      </div>
    );





  }
}
