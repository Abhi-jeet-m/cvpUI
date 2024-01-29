import React, { Component, Suspense } from "react";
import { AppHeader } from "@coreui/react";
import { URL } from "../../Constant";
import $ from "jquery";
import Loader from "react-loader";

//import { isEmptyStatement } from '@babel/types';
import Pagination from "../pagination";
import { Button } from "reactstrap";
// import '../../scss/jquery.dataTables.css'
import "datatables.net";
const DefaultHeader = React.lazy(() =>
  import("../PledgeInfoDoc/DefaultHeader")
);
var tablelength = null;
// var dt = require( 'datatables.net' );

export default class Reports extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  constructor(props) {
    super(props);
    this.state = {
      selectedtype: "",
      selectedgroup: "",
      selectedcompany: "",
      selecteddocument: "",
      empData: [],
      tableHeader: "",
    };
  }

  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/hrlogin");
  }

  setInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "selectedgroup") {
      this.setState({ selectedgroup: value });
    }
    if (name === "selectedtype") {
      this.setState({ selectedtype: value });
    }
    if (name === "selectedcompany") {
      this.setState({ selectedcompany: value });
    }
    if (name === "selecteddocument") {
      this.setState({ selecteddocument: value });
    }
    this.getEmpList();
  };

  downloadcsv(csv, filename) {
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], { type: "text/csv" });
    //CSV file
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(csvFile, filename);
    } else {
      //download link
      downloadLink = document.createElement("a");
      //File name
      downloadLink.download = filename;
      //create a link to rhe file
      downloadLink.href = window.URL.createObjectURL(csvFile);
      //Hide download link
      downloadLink.style.display = "none";
      //add the link to dom
      document.body.appendChild(downloadLink);
      //click download link
      downloadLink.click();
    }
  }

  exportTableToCSV(filename) {
    //preventDefault()
    // alert(filename)
    var csv = [];
    var rows = document.querySelectorAll("#listtable tr");
    for (var i = 0; i < rows.length; i++) {
      var row = [],
        cols = rows[i].querySelectorAll("td,th");
      for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);
      csv.push(row.join(","));
    }
    //download csv file
    this.downloadcsv(csv.join("\n"), filename);
  }

  tablepagination() {
    window.tp = new Pagination("#tablePaging", {
      itemsCount: tablelength,
      onPageSizeChange: function (ps) {},
      onPageChange: function (paging) {
        //custom paging logic here
        var start = paging.pageSize * (paging.currentPage - 1),
          end = start + paging.pageSize,
          $rows = $("#listtable").find(".data");

        $rows.hide();

        for (var i = start; i < end; i++) {
          $rows.eq(i).show();
        }
      },
    });
  }

  getEmpList = () => {
    this.setState({ loaded: false });
    var value = $("#list :selected").val();
    var group = $("#group :selected").val();
    var company = $("#company :selected").val();
    var document = $("#docType :selected").val();
    var selected = $("#list :selected").text();
    $("#selectedtype").html(selected);
    let jsonData = {
      value: value,
      group: group,
      company: company,
      document: document,
      username: sessionStorage.getItem("username"),
      authToken: sessionStorage.getItem("authToken"),
    };
    $("#listtable tr").remove();
    fetch(URL.empList, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((resp) => {
        this.setState({ loaded: true });
        return resp.json();
      })
      .then((tablelist) => {
        if (tablelist === null || tablelist === "") {
          $("#totalcount").html("Total Count = 0/0");
        } else {
          $("#listtable").append(
            '<tr style="display:none;"><td align="center">Company : ' +
              company +
              "</td></tr>"
          );
          $("#listtable").append(
            '<tr style="display:none;"><td align="center">Document : ' +
              document +
              "</td></tr>"
          );
          // $('#listtable').append('<tr style="display:none;"><td align="center">Group : '+group+'</td></tr>');
          tablelength = tablelist.length;
          if (value === "unSigEmpList") {
            $("#listtable").append(
              '<tr><th colspan="6" style="display:none;">Selected Type : ' +
                selected +
                "</th></tr><tr><th>Name</th><th>Company</th><th>Emp ID</th><th>Sign Status</th></tr>"
            );
            // <th>Action Status</th>
            $("#listtable").append(
              '<tr style="display:none;"><th>Company</th><td align="center">' +
                company +
                "</td></tr>"
            );
            for (var i = 0; i < tablelength; i++) {
              $("#listtable").append(
                '<tr class="data"><td align="center">' +
                  tablelist[i]["empname"] +
                  '</td><td align="center">' +
                  tablelist[i]["empcompany"] +
                  '</td><td align="center">' +
                  tablelist[i]["empid"] +
                  '</td><td align="center">' +
                  tablelist[i]["empsignstatus"] +
                  // + '</td><td align="center">'
                  // + tablelist[i]['empactionstatus']
                  "</td></tr>"
              );
            }
            $("#totalcount").html(
              "Total Count = " + tablelength + "/" + tablelist[0]["emptotal"]
            );
            $("#listtable").append(
              '<tr style="display:none;"><th>Total Count</th><td align="center">' +
                tablelist.length +
                "/" +
                tablelist[0]["emptotal"] +
                "</td></tr>"
            );
          } else {
            $("#listtable").append(
              '<tr ><th colspan="7" style="display:none;">' +
                selected +
                "</th></tr><tr><th>Name</th><th>Company</th><th>Emp ID</th><th>Sign Status</th><th>Signed On</th><th>Sign Type</th></tr>"
            );
            for (i = 0; i < tablelength; i++) {
              $("#listtable").append(
                '<tr class="data"><td align="center">' +
                  tablelist[i]["empname"] +
                  '</td><td align="center">' +
                  tablelist[i]["empcompany"] +
                  '</td><td align="center">' +
                  tablelist[i]["empid"] +
                  '</td><td align="center">' +
                  tablelist[i]["empsignstatus"] +
                  '</td><td align="center">' +
                  tablelist[i]["empsignedon"] +
                  '</td><td align="center">' +
                  tablelist[i]["empsigntype"] +
                  "</td></tr>"
              );
            }
            $("#totalcount").html(
              "Total Count = " +
                tablelist.length +
                "/" +
                tablelist[0]["emptotal"]
            );
            $("#listtable").append(
              '<thead><tr style="display:none;"><th >Total Count</th><td align="center">' +
                tablelist.length +
                "/" +
                tablelist[0]["emptotal"] +
                "</td></tr></thead>"
            );
          }
          this.tablepagination();
        }
      })
      .catch((e) => {
        alert("Failed to connect...");
        this.props.history.push("/CVP/hrlogin");
      });
  };
  componentDidMount() {
        this.setState({ loaded: false });
    // var oncompanyobj = sessionStorage.getItem("dropDownforCompany");
    // var object3 = JSON.parse(oncompanyobj);
    // var a = object3.empCompanyList;
    //   var doccomp = document.getElementById("company");
    //   var b;
    //   for (b = 0; b < a.length; b++) {
    //     var option3 = document.createElement("option");
    //     option3.text = a[b];
    //     doccomp.add(option3);
    //   }
      
    // console.log("oncompanyobj" + object3.empCompanyList);
    var obj = sessionStorage.getItem("dropDown");
    var object1 = JSON.parse(obj);
    var x = object1.documentList;
    var docfullName = object1.docNameList;
    var doc1 = document.getElementById("docType");
    // var docType=document.getElementById("docType");
    // var doc1 = docType.split(",")[0];
    // var docName = docType.split(",")[1];
    var k;

    for (k = 0; k < x.length; k++) {
      var option = document.createElement("option");
      // option.text = x[k];
      option.text = docfullName[k];
      option.value = x[k];
      doc1.add(option);
    }

    var y = object1.groupList;
    var doc2 = document.getElementById("group");
    var i;
    for (i = 0; i < y.length; i++) {
      var option1 = document.createElement("option");
      option1.text = y[i];
      doc2.add(option1);
    }

    var doc3 = document.getElementById("company");
    var option2 = document.createElement("option");
    option2.text = object1.empCompany;
    doc3.add(option2);

    var optionValues = [];
    $("#docType option").each(function () {
      console.log(this.value);
      if ($.inArray(this.value, optionValues) > -1) {
        $(this).remove();
      } else {
        optionValues.push(this.value);
      }
    });

    if (sessionStorage.getItem("roleId") == 1) {
      document.getElementById("group").remove();
    } else if (sessionStorage.getItem("roleId") == 3) {
      document.getElementById("company").disabled = true;
      document.getElementById("group").disabled = true;
    } else if (sessionStorage.getItem("roleId") == 2) {
      document.getElementById("company").disabled = true;
    }
    this.getEmpList();
  }
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
          <table style={{ width: "70%", marginLeft: "20%" }}>
            <tbody>
              <tr>
                <td style={{ width: "50%" }}>
                  <label for="company">Company :</label>&nbsp;
                  <select
                    id="company"
                    name="selectedcompany"
                    onChange={this.setInput}
                    style={{ width: "17%" }}
                  >
                    {/* <option id="i25bca" value="i25BCA" >i25 BCA</option>
                                    <option id="imspl" value="IMSPL" >INTEGRA MICRO SYSTEMS LTD</option>
                                    <option id="imss" value="IMSS" >INTEGRA MICRO SOFTWARE SERVICES</option>
                                    <option id="i25rmcs" value="i25RMCS" >i25 RURAL MOBILE COMMERCE SERVICES</option>
                                    <option id="jtpl" value="JTPL" >JAKKUR TECHNOPARKS PVT LTD</option> */}
                  </select>
                  &nbsp;
                  {/* <label for="group">Group :</label>&nbsp; */}
                  <select
                    id="group"
                    name="selectedgroup"
                    onChange={this.setInput}
                    style={{ width: "17%" }}
                  ></select>
                  &nbsp;
                  <label for="docType">Document :</label>&nbsp;
                  <select
                    id="docType"
                    name="selecteddocument"
                    onChange={this.setInput}
                    style={{ width: "17%" }}
                  ></select>
                  &nbsp;
                  <label for="list">List Type :</label>&nbsp;
                  <select
                    id="list"
                    name="selectedtype"
                    onChange={this.setInput}
                    style={{ width: "17%" }}
                  >
                    <option id="alllist" value="allList">
                      All Employees
                    </option>
                    <option id="signedpage" value="sigEmpList">
                      Signed List
                    </option>
                    <option id="unsignedpage" value="unSigEmpList" selected>
                      Unsigned List
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td style={{ width: "100%" }}>
                          <h4
                            id="selectedtype"
                            style={{ marginLeft: "50%" }}
                          ></h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4
                            id="totalcount"
                            style={{ marginLeft: "10%" }}
                          ></h4>
                        </td>
                        <td>
                          <Button
                            color="primary"
                            id="export"
                            className="px-4"
                            onClick={() => {
                              this.exportTableToCSV("List.csv");
                            }}
                          >
                            Download
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <table id="listtable" style={{width: "100%"}}>
                    </table> */}

          <table
            hover
            bordered
            striped
            responsive
            id="listtable"
            style={{ textAlign: "center", width: "100%" }}
          ></table>
          <br></br>
          <table>
            <tr>
              <td style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
                Page size:
              </td>
              <td>
                <div className="paging-container" id="tablePaging">
                  {" "}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
