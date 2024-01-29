import React, { Component, Suspense } from "react";
import { Table, Input, Col, Row, Button } from "reactstrap";
import { AppHeader } from "@coreui/react";

import { URL } from "../../Constant";
import $ from "jquery";
import "../../scss/jquery.dataTables.css";
import "../../scss/style.scss";
import { Checkbox } from "react-bootstrap";
require("datatables.net-buttons/js/dataTables.buttons.min.js")(); //# HTML 5 file export
require("datatables.net-buttons/js/buttons.html5.js")(); //# HTML 5 file export
require("datatables.net-buttons/js/buttons.print.js")(); //# Print view button

const DefaultHeader = React.lazy(() =>
  import("../PledgeInfoDoc/DefaultHeader")
);
var Loader = require("react-loader");
var dt = require("datatables.net");
var datetime = require("datetime-moment");
let dataList = [];
export default class ApproveNameUpdation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: "",
      // password: "",
      loaded: true,
      updateType: "",
    };
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  componentDidMount() {
    this.getNameUpdationList();
  }

  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/hrlogin");
  }

  getNameUpdationList = () => {
    this.setState({ loaded: false });
    let jsonData = {
      // "group": group,
      // "company": company,
      // "signOrder": signorder,
      // "signing": signing,
      username: sessionStorage.getItem("username"),
      authToken: sessionStorage.getItem("authToken"),
      // "docCode": docCode
    };
    fetch(URL.bcRequestsforUpdatingNames, {
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
          dataList = respJson.list;
          //console.log(dataList);
          this.setState({ loaded: true });
          $("#listtable").DataTable().destroy();
          $("#listtable").DataTable({
            buttons: [
              {
                extend: "csv",
                filename: "BCNameList-",
                //+ fromDate.replace(/-/g, '') + '-' + toDate.replace(/-/g, ''),
                // customize: function (csv) {
                //     return "My header\n\n"+  csv;
                //  }
              },
              {
                extend: "print",
              },
            ],

            ordering: false,
            pagingType: "full_numbers",
            data: dataList,
            columns: [
              {
                render: function (data, type, full, meta) {
                  var result = encodeURI(JSON.stringify(full));

                  let strDateTime = full.REQUESTED_TIME;
                  var myDate = new Date(strDateTime);
                  let requestedTime = myDate.toLocaleString();
                  // let str1= requestedTime
                  // tempDate = Convert.ToDateTime(str1)
                  // let st2=tempDate.ToString(yyyy-MM-dd)
                  // console.log(st2);
                  //type="checkbox"
                  // return '<input type="radio" id=' + full.EMP_ID + '  name=' + full.MOBILE_AADHAAR + ' value= ' + result + '></input>'
                  return (
                    '<input type="radio" id=' +
                    full.EMP_ID +
                    '  name="selectRecord"  value= ' +
                    result +
                    "></input>"
                  );
                },
              },
              { data: "EXISTING_NAME" },
              { data: "EMP_ID" },
              { data: "NAME_OF_BANK" },
              { data: "STATE" },
              { data: "EMP_NAME" },
              {
                defaultContent: "-",
                data: "REQUESTED_TIME",

                render: function (data, type, full, meta) {
                  let strDateTime = full.REQUESTED_TIME;

                  var myDate = new Date(strDateTime);
                  let year = myDate.getFullYear();
                  let day = "";
                  let month = "";
                  if (myDate.getMonth() + 1 < 10) {
                    month = "0" + (myDate.getMonth() + 1);
                  } else {
                    month = myDate.getMonth() + 1;
                  }
                  if (myDate.getDate() < 10) {
                    day = "0" + myDate.getDate();
                  } else {
                    day = myDate.getDate();
                  }
                  // let requestedTime =  myDate.toLocaleString()
                  let requestedTime =
                    year +
                    "-" +
                    month +
                    "-" +
                    day +
                    myDate.toLocaleString().split(",")[1];

                  return requestedTime;
                },
              },
              {
                data: "MOBILE_AADHAAR",
                defaultContent: "-",
              },
            ],
          });
        } else {
          alert(respJson.statusDetails);
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(" try again...");
      });
  };

  checkAll() {
    var checkboxes = document.querySelectorAll(`input[type='checkbox']`);
    if (document.getElementById("approveAllCheck").checked) {
      for (var i = 0; i < checkboxes.length; i++) {
        if (
          checkboxes[i].type === "checkbox" &&
          checkboxes[i].id !== "approveAllCheck"
        ) {
          checkboxes[i].checked = true;
        }
      }
    } else {
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox") {
          checkboxes[i].checked = false;
        }
      }
    }
  }

  ApproveList() {
    var list = [];
    var approvalList = [];
    var radioBtn = document.querySelector(`input[name='selectRecord']:checked`);
    //var radioBtn = document.querySelector(`input[name='selectRecord']`);
    if (radioBtn == null) {
      alert("Please select any record.");
      return;
    }
    var isChecked = false;
    // preparing list format for approving name change request
    for (var i = 0; i < dataList.length; i++) {
      var record = dataList[i];
      // if (record.emailID.trim() === "null") {
      //     record.emailID = ""
      // }
      var send = {
        empid: record.EMP_ID.trim(),
        group: record.EMP_GROUP,
        name: record.EMP_NAME,
        updateType: record.UPDATE_REQ_TYPE,
      };
      list.push(send);
    }

    for (let j = 0; j < list.length; j++) {
      if (radioBtn.id == list[j].empid) {
        isChecked = true;
        approvalList.push(list[j]);
      }
    }

    if (isChecked) {
      let Msg = "BC request";
      var r = window.confirm(
        "Updating" +
          " " +
          approvalList.length +
          " " +
          Msg +
          ". Press OK to continue"
      );
      if (r === true) {
        let jsonData = {
          username: sessionStorage.getItem("username"),
          authToken: sessionStorage.getItem("authToken"),
          approvalList: approvalList,
          // "list": list
        };
        this.setState({ loaded: true });
        fetch(URL.bcNamesapprovedList, {
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
              alert(responseJson.statusDetails);
              window.location.reload(false);
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
            sessionStorage.clear();
            this.props.history.push("/CVP/hrlogin");
          });
      }
    } else {
      alert("Please select a record to Approve!");
    }
  }

  RejectList() {
    var list = [];
    var rejectionList = [];
    var radioBtn = document.querySelector(`input[name='selectRecord']:checked`);

    // var radioBtn = document.querySelector(`input[name='selectRecord']`);
    if (radioBtn == null) {
      alert("Please select any record.");
      return;
    }
    var isChecked = false;
    // preparing list format for approving name change request
    for (var i = 0; i < dataList.length; i++) {
      var record = dataList[i];
      // if (record.emailID.trim() === "null") {
      //     record.emailID = ""
      // }
      var send = {
        empid: record.EMP_ID.trim(),
        group: record.EMP_GROUP,
        name: record.EMP_NAME,
        updateType: record.UPDATE_REQ_TYPE,
      };
      list.push(send);
    }
    for (let j = 0; j < list.length; j++) {
      if (radioBtn.id == list[j].empid) {
        isChecked = true;
        rejectionList.push(list[j]);
      }
    }

    if (isChecked) {
      let Msg = "BC request ";
      var r = window.confirm(
        "Rejecting" +
          " " +
          rejectionList.length +
          " " +
          Msg +
          ". Press OK to continue"
      );
      if (r === true) {
        let jsonData = {
          username: sessionStorage.getItem("username"),
          authToken: sessionStorage.getItem("authToken"),
          rejectionList: rejectionList,
          // "list": list
        };
        this.setState({ loaded: true });
        fetch(URL.bcNamesRejectionList, {
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
              alert(responseJson.statusDetails);
              window.location.reload(false);
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
            sessionStorage.clear();
            this.props.history.push("/CVP/hrlogin");
          });
      }
    } else {
      alert("Please select a record to reject.!");
    }
  }

  printTableData = () => {
    $("#listtable").DataTable().buttons(["0"]).trigger();
  };

  render() {
    return (
      <div className="app sidebar-show">
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
          <h3 style={{ textAlign: "center" }}> BC Name Change Request List </h3>
          <Table
            hover
            bordered
            striped
            responsive
            id="listtable"
            style={{ textAlign: "left", width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                  {/* <input type="checkbox" id="approveAllCheck" name="approveAllCheck" onChange={() => { this.checkAll() }}  /> */}
                </th>
                <th>BC Name in Records </th>
                <th>MID</th>
                <th>Name of the bank</th>
                <th>State</th>
                <th>BC Name as per Aadhaar</th>
                <th>Requested Time</th>
                <th>Phone No.</th>
              </tr>
            </thead>
          </Table>
          <br />
          <table style={{ marginLeft: "70%" }}>
            <tbody>
              <tr>
                <td>
                  <Button
                    color="primary"
                    id="Approve"
                    className="px-4"
                    onClick={() => {
                      this.ApproveList();
                    }}
                  >
                    Approve Request
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    color="primary"
                    id="Reject"
                    className="px-4"
                    onClick={() => {
                      this.RejectList();
                    }}
                  >
                    Reject Request
                  </Button>
                  &nbsp;&nbsp;
                  {/* //  block outline  */}
                  <Button
                    color="primary"
                    id="ExportasCSV"
                    onClick={this.printTableData}
                    className="px-4"
                  >
                    Export
                  </Button>
                  &nbsp;&nbsp;
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      </div>
    );
  }
}
