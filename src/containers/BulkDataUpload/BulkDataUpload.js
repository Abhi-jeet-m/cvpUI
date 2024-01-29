import Dropzone from "react-dropzone";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../../scss/jquery.dataTables.css";
import "./BulkDataUpload.css";
import "../DSCToken/dscToken.css";
import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";

import { AppHeader } from "@coreui/react";
//import { Button, Table } from 'reactstrap';
import {
  Button,
  Table,
  Card,
  CardHeader,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { URL } from "../../Constant";
import Modal from "react-responsive-modal";
import $ from "jquery";
import "../../scss/jquery.dataTables.css";
import "../../scss/style.scss";
import { width } from "@mui/system";
// import { all } from 'core-js/fn/promise';
const DefaultHeader = React.lazy(() =>
  import("../PledgeInfoDoc/DefaultHeader")
);

var Loader = require("react-loader");
var dt = require("datatables.net");
var buttons = require("datatables.net-buttons");

require("datatables.net-buttons/js/dataTables.buttons.min.js")(); //# HTML 5 file export
require("datatables.net-buttons/js/buttons.html5.js")(); //# HTML 5 file export
require("datatables.net-buttons/js/buttons.print.js")(); //# Print view button

var Loader = require("react-loader");

export default class BulkDataUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryRes: "",
      responseData: [],
      file: "",
      files: [],
      isdisable: true,
      loaded: false,
      uploadedFileName: "",
      uploadedFileSize: "",
      color: "",
      sessionCheck: false,
      downloadTemplate: "",
      groupNameList: [],
      groupCodeList: [],
      companyCodeList: [],
      companyNameList: [],
      GroupName: "",
      data: [],
      rCount: 0,
      moreInfoLink: "",
    };
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.setState({ loaded: true });
    // this.datatemplate();

    var tempId = "1";
    if (sessionStorage.getItem("username") === "cbmahesh") {
      tempId = "2";
    }
    var url =
      URL.downloadTemplate +
      btoa(sessionStorage.getItem("username")) +
      "/" +
      tempId +
      "/" +
      sessionStorage.getItem("authToken");
    this.setState({ downloadTemplate: url });
    // console.log(sessionStorage);

    var companyInfo = URL.getComapnyInfo + sessionStorage.getItem("authToken");

    fetch(companyInfo, {
      method: "GET",
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status == "SUCCESS") {
          // console.log(responseJson.data.companyCodeList);
          this.setState({
            companyCodeList: responseJson.data.companyCodeList,
            companyNameList: responseJson.data.companyNameList,
            groupCodeList: responseJson.data.groupCodeList,
            groupNameList: responseJson.data.groupNameList,
          });
          // console.log(this.state.groupNameList);
          // console.log(this.state.groupCodeList);
          // console.log(this.state.companyCodeList);
          // console.log(this.state.companyNameList);
          // dynamically adding company
          var doc3 = document.getElementById("companyCode");
          var compCodes = responseJson.data.companyCodeList;
          var compNames = responseJson.data.companyNameList;
          for (var j = 0; j < compNames.length; j++) {
            var option2 = document.createElement("option");
            option2.text = compNames[j];
            option2.value = compCodes[j];
            doc3.add(option2);
          }

          var y = responseJson.data.groupCodeList;

          var x = responseJson.data.groupNameList;
          // console.log(x);
          var doc2 = document.getElementById("groupCodes");

          for (var i = 0; i < y.length; i++) {
            var option1 = document.createElement("option");
            option1.text = x[i];
            option1.value = y[i];
            doc2.add(option1);
          }
        } else {
          if (responseJson.statusDetails === "Session Expired!") {
            this.setState({ sessionCheck: true });
            sessionStorage.clear();
            this.setState({ loaded: true });
            this.props.history.push("/cvp/hrlogin");
            // } else {
            //   confirmAlert({
            //     message: responseJson.statusDetails,
            //     buttons: [
            //       {
            //         label: "OK",
            //         className: "confirmBtn",
            //         onClick: () => {
            //           window.location.reload();
            //         },
            //       },
            //     ],
            //   });
            //   // alert(responseJson.statusDetails)
            //   this.setState({ loaded: true });
          }
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
    // console.log(sessionStorage);
    // if (!this.state.sessionCheck) {
    // console.log("its inside component did mount");

    document.getElementById("DataUpload-button").style.backgroundColor =
      "rgba(96, 218, 185, 0.78)";
    // console.log("its inside component did mount1");

    document.getElementById("DataUpload-button").style.cursor = "no-drop";
    // }
    // console.log("its inside component did mount2");
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  // datatemplate = () => {
  //   var Data = [];
  //   $("#BulkDataUploadTable").DataTable().destroy();
  //   $("#BulkDataUploadTable").dataTable({
  //     buttons: [
  //       {
  //         extend: "csv",
  //         filename: "BulkDataUploadTemplate",
  //       },
  //       {
  //         extend: "print",
  //       },
  //     ],
  //     data: Data,

  //     columns: [
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },

  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //       { data: "" },
  //     ],
  //   });
  // };

  BulkDataUpload() {
    var role_id = sessionStorage.getItem("roleId");
    // console.log(sessionStorage);
    if (role_id in [1, 2, 3]) {
      this.setState({ loaded: false });

      var companyCode = $("#companyCode :selected").val();
      var GroupCode = $("#groupCodes :selected").val();
      var GroupName = $("#groupCodes :selected").text();
      if (companyCode !== "i25BCA" && GroupCode != companyCode) {
        confirmAlert({
          message: `Invalid Group code for the Company: ${companyCode}`,
          buttons: [
            {
              label: "OK",
              className: "confirmBtn",
              onClick: () => {
                this.setState({ loaded: true });
              },
            },
          ],
        });
      } else {
        var csvFile = this.state.files[0];
         this.setState({
           GroupName: $("#groupCodes").find("option:selected").text(),
         });
         // reading csv to get how many records are present and proceed to call.
        Papa.parse(csvFile, {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: this.updateData,
        });
      }
    } else {
      confirmAlert({
        message: "Permission Denied",
        buttons: [
          {
            label: "OK",
            className: "confirmBtn",
            onClick: () => {},
          },
        ],
      });
    }
  }
  updateData(result) {
    
    const data = result.data;
    // console.log(this.state.GroupName);
    sessionStorage.setItem("rCount", data.length);
    var mmsg =
      "Uploaded file name: " +
      this.state.files[0].name +
      ",\n" +
      "Number of records: " +
      result.data.length +
      ",\n" +
      "Selected Group: " +
      this.state.GroupName +
      ",\n" +
      "Click on OK to proceed";
    // console.log(mmsg);
    confirmAlert({
      message: mmsg,
      buttons: [
        {
          label: "Cancel",
          className: "cancelBtn",
          onClick: () => {
            window.location.reload();
          },
        },
        {
          label: "OK",
          className: "confirmBtn",
          onClick: () => {
            this.bulkDataUpload();
          },
        },
      ],
    });
  }
  onDrop(files) {
    // console.log(files);
    if (files.length > 0) {
      if (files[0].name.length < 128) {
        var fileName = files[0].name;
        var name1 = fileName.split(".csv");
        if (name1.length > 2) {
          confirmAlert({
            message: "Invalid File name ",
            buttons: [
              {
                label: "ok",
                className: "confirmBtn",
                onClick: () => {},
              },
            ],
          });
          return null;
        }

        var file = files[0];
        var filesize = files[0].size;
        var filesizeinKB = filesize / 1024;
        this.setState({
          files: files,
          isdisable: false,
          uploadedFileName: fileName,
          uploadedFileSize: filesizeinKB.toFixed(2) + " KB",
        });
        document.getElementById("DataUpload-button").style.backgroundColor =
          "#1DD1A1";

        document.getElementById("DataUpload-button").style.cursor = "pointer";
        document.getElementById("moreInfoClick").style.display = "none";
        document.getElementById("templateDownloadLink").style.display = "";
      } else {
        confirmAlert({
          message: "Please select CSV File only...",
          buttons: [
            {
              label: "ok",
              className: "confirmBtn",
              onClick: () => {},
            },
          ],
        });
      }
    }
  }

  bulkDataUpload = () => {
    // console.log("i am called");
    let obj = {
      authToken: sessionStorage.getItem("authToken"),
      userIP: sessionStorage.getItem("userIP"),
      groupCode: $("#groupCodes :selected").val(),
      company: $("#companyCode :selected").val(),
      companyName: $("#companyCode").find("option:selected").text(),

      groupName: $("#groupCodes").find("option:selected").text(),
    };
   
    const formData = new FormData();
    formData.append("file", this.state.files[0]);
    formData.append("inputDetails", JSON.stringify(obj));
    fetch(URL.BulkDataUpload, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((responseJson) => {
        document.getElementById("moreInfoClick").style.display = "";
        document.getElementById("templateDownloadLink").style.display = "none";
        document.getElementById("DataUpload-button").style.backgroundColor =
          "rgba(96, 218, 185, 0.78)";
        // console.log("its inside component did mount1");

        document.getElementById("DataUpload-button").style.cursor = "no-drop";
        this.setState({ isdisable: true });

        if (responseJson.status == "SUCCESS") {
          this.setState({ loaded: true });
          document.getElementById("msgforDataUploaded").innerHTML =
            responseJson.status +
            ", " +
            this.state.files[0].name +
            ", " +
            responseJson.statusDetails;
          this.setState({
            moreInfoLink: responseJson.filePath,
            color: "green",
          });
          confirmAlert({
            message: responseJson.statusDetails,
            buttons: [
              {
                label: "OK",
                className: "confirmBtn",
                onClick: () => {},
              },
            ],
          });
        } else {
          if (responseJson.statusDetails === "Session Expired!") {
            this.setState({ sessionCheck: true });
            sessionStorage.clear();
            this.setState({ loaded: true });
            this.props.history.push("/cvp/hrlogin");
          } else {
            document.getElementById("msgforDataUploaded").innerHTML =
              responseJson.status +
              ", " +
              this.state.files[0].name +
              ", " +
              responseJson.statusDetails;
            this.setState({
              moreInfoLink: responseJson.filePath,
            });

            confirmAlert({
              message: responseJson.statusDetails,
              buttons: [
                {
                  label: "OK",
                  className: "confirmBtn",
                  onClick: () => {},
                },
              ],
            });
            this.setState({ loaded: true, color: "red" });
          }
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
  };

  isCSVSelected() {
    if (this.state.isdisable) {
      return (
        <div>
          <span className="drop-csv">Drop CSV here </span>
          <i className="fas fa-file-csv" style={{ fontSize: "24px" }}></i>
          <br />
          <span className="drop-csv">OR</span>
          <br />
          <span className="drop-csv">
            <input
              class="btn btn rounded-pill"
              style={{
                width: "112px",
                fontSize: "inherit",
                backgroundColor: "gray",
                color: "white",
              }}
              value="Upload CSV"
            />
          </span>
        </div>
      );
    } else {
      return <span className="drop-csv">{this.state.files[0].name}</span>;
    }
  }

  printTableTemplate = () => {
    $("#BulkDataUploadTable").DataTable().buttons(["0"]).trigger();
  };
  downloadTemplate = () => {
    var tempId = "1";
    if (sessionStorage.getItem("username") === "cbmahesh") {
      tempId = "2";
    }

    fetch(
      URL.downloadTemplate +
        btoa(sessionStorage.getItem("username")) +
        "/" +
        tempId +
        "/" +
        sessionStorage.getItem("authToken"),
      {
        method: "GET",
      }
    );
  };

  // moreInfoLink = () => {
  //   var StatusCheckUrl =
  //     URL.getDataUploadStatus +
  //     btoa(this.state.moreInfoLink) +
  //     "/" +
  //     sessionStorage.getItem("authToken");
  //   fetch(StatusCheckUrl, {
  //     method: "GET",
  //   });
  // };
  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/hrlogin");
  }
  homeNavigation = () => {
    this.props.history.push("/CVP/dsctokenSign");
  };
  render() {
    return (
      <div>
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
        <div>
          <div
            style={{
              paddingLeft: "4%",
              paddingTop: "6%",
              display: "flex",
              paddingRight: "2%",
              justifyContent: "space-between",
            }}
          >
            <div>
              {" "}
              Company :&nbsp;
              <select
                id="companyCode"
                name="selectedcompanys"
                style={{ width: "20%" }}
              >
                {/* <option id="i25bca" value="i25BCA">i25BCA</option> */}
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Group
              :&nbsp;
              <select
                id="groupCodes"
                name="selectedgroups"
                // onChange={this.getSignedList}
                style={{ width: "35%" }}
              ></select>
            </div>
            <div>
              <button
                class="btn btn-primary"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                onClick={() => this.homeNavigation()}
              >
                <i style={{ color: "white" }} class="icon-home icon-3x">
                  {" "}
                  Home
                </i>
              </button>{" "}
            </div>
          </div>

          <div>
            <h3 style={{ textAlign: "center", marginTop: "2%" }}>
              Bulk Data Upload For BCA
            </h3>
          </div>
          <div className="csv-lg-container">
            <div className="csv-container" id="csv-container1">
              <section className="">
                <div className="dropzone">
                  <h5>Upload CSV file for Bulk Data Upload</h5>
                  <Dropzone
                    type="file"
                    accept={[".csv"]}
                    className="inner-content"
                    onDrop={this.onDrop.bind(this)}
                  >
                    <div className="text-container">{this.isCSVSelected()}</div>
                  </Dropzone>
                </div>
              </section>
            </div>

            <div className="next-nav">
              <button
                className="upload-button"
                class="btn btn rounded-pill btn-lg"
                id="DataUpload-button"
                disabled={this.state.isdisable}
                onClick={this.BulkDataUpload.bind(this)}
              >
                <span>Bulk Data Upload &#8594;</span>
              </button>
            </div>
            <div id="templateDownloadLink" style={{ marginTop: "10px" }}>
              {" "}
              Download Data Upload Template &#8594;
              <a href={this.state.downloadTemplate} title="download">
                click here{" "}
              </a>{" "}
              <br /><br/>
              Download Data Validation Guide &#8594;
                <a
                  href="/files/Data_upload_validation.csv"
                  Download="Data_upload_validation.csv"
                  type="csv"
                >
                  click here
                </a>
              
            </div>
          </div>
          <div
            id="downloadCvsLink"
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "inline-flex" }}>
              {" "}
              <h5
                id="msgforDataUploaded"
                style={{ color: this.state.color }}
              ></h5>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                id="moreInfoClick"
                style={{ display: "none" }}
                href={
                  URL.getDataUploadStatus +
                  btoa(this.state.moreInfoLink) +
                  "/" +
                  sessionStorage.getItem("authToken")
                }
                title="moreInfo"
              >
                {" "}
                Click for moreInfo{" "}
              </a>
            </div>

            <div id="moreInfoClick" style={{ display: "none" }}>
              <a
                href={
                  URL.getDataUploadStatus +
                  btoa(this.state.moreInfoLink) +
                  "/" +
                  sessionStorage.getItem("authToken")
                }
                title="moreInfo"
              >
                {" "}
                Click for moreInfo{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
