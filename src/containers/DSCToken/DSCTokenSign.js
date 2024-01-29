import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { AppHeader } from "@coreui/react";
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
import "./dscToken.css";
import { width } from "@mui/system";
// import { all } from 'core-js/fn/promise';
const DefaultHeader = React.lazy(() =>
  import("../PledgeInfoDoc/DefaultHeader")
);
var Loader = require("react-loader");
var dt = require("datatables.net");
var datetime = require("datetime-moment");
let dataList = [];
export default class DSCTokenSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loaded: true,
      signorder: "2",
      updateIp: "",
      openOTPModal: false,
      openSigningStatusModal: false,
      openRejectionStatusModal: false,
      enteredIP: "",
      ArrayOfOptions: []
    };

    //this.getBcCellTokenIP=this.getBcCellTokenIP.bind(this);
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentDidMount() {
    // Dynamiically to fetch dropdowns values
    var optionsArray = [];

    var obj = sessionStorage.getItem("dropDown");
    var object1 = JSON.parse(obj);

    // for dynamically adding document list
    var x = object1.documentList;
    var doc1 = document.getElementById("docCode");
    var k;
    for (k = 0; k < x.length; k++) {
      var option = document.createElement("option");
      option.text = x[k];
      option.value = x[k];
      doc1.add(option);
    }

    // dynamically adding group
    var y = object1.groupList;
    var doc2 = document.getElementById("group");
    var i;
    for (i = 0; i < y.length; i++) {
      var option1 = document.createElement("option");
      option1.text = y[i];
      option1.value = y[i];
      doc2.add(option1);

      var jsonOption = {
        text: option1.text,
        value: option1.value,
      };
      optionsArray.push(jsonOption);
      //  signingStatusOption.add(option1);
    }


    this.setState({ ArrayOfOptions: optionsArray })
    // dynamically adding company
    var doc3 = document.getElementById("company");
    var option2 = document.createElement("option");
    option2.text = object1.empCompany;
    option2.value = object1.empCompany;
    doc3.add(option2);

    // removing duplicating values in doctype
    var optionValues = [];
    $("#docCode option").each(function () {
      if ($.inArray(this.value, optionValues) > -1) {
        $(this).remove();
      } else {
        optionValues.push(this.value);
      }
    });

    let response = this.props.location.search;
    if (response.includes("bcas=")) {
      var respString = response.split("bcas=")[1];
      var respStringArray = respString.split("&");
      if (respStringArray[0] === "SUCCESS") {
        alert("Digital signing with Aadhaar is completed");
      } else if (respStringArray[0] === "FAILURE") {
        if (respStringArray[1] === "mode=1") {
          alert("Signing failed try after sometime");
        } else if (respStringArray[1] === "mode=2") {
          alert(
            "Signing Agreement Rejected!!Your Aadhaar Name Does not Match With the Records"
          );
        }
      }
    }
    if (sessionStorage.getItem("roleId") === "2") {
      document.getElementById("company").disabled = true;
      // document.getElementById("group").disabled = true;
      // document.getElementById("docCode").disabled = true;
    }
    this.getSignedList();
  }

  onCloseOTPModal = () => {
    this.setState({ openOTPModal: false });
  };

  onCloseSigningStatusModal = () => {
    this.setState({ openSigningStatusModal: false });
  };


  onCloseRejectionStatusModal = () => {
    this.setState({ openRejectionStatusModal: false });
  };

  signOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push("/CVP/hrlogin");
  }

  getSignedList = () => {
    var company = $("#company :selected").val();
    var group = $("#group :selected").val();
    var signorder = $("#signorder :selected").val();
    var signing = $("#signing :selected").val();
    // make downloadSelectedDocs button disable for bs sign pending list.
    if (signorder == 0) {
      document.getElementById("downloadSelectedDocs").style.display = "none";
    } else {
      document.getElementById("downloadSelectedDocs").style.display = ""; // make downloadSelectedDocs button visible for bs sign pending list.
    }
    // selecting the document dropdown based on company and group
    var docdropdown = document.getElementById("docCode");
    if (company === "i25BCA" && group === "OBC") {
      for (var i = 0; i < docdropdown.length; i++) {
        if (docdropdown.options[i].value === "BCAA") {
          docdropdown.options[i].selected = true;
        }
      }
    } else if (company === "i25BCA" && group === "UBIN") {
      for (var i = 0; i < docdropdown.length; i++) {
        if (docdropdown.options[i].value === "BCAAUBIN") {
          docdropdown.options[i].selected = true;
        }
      }
    }
    var docCode = $("#docCode :selected").val();

    // to enable/disable the notification button container
    if (signorder === "3") {
      document.getElementById("signbutton").style.display = "none";
      document.getElementById("notify").style.display = "none";
      document.getElementById("notif").style.display = "none";
      document.getElementById("selectAll").style.display = "none";
    } else if (signorder === "0" || signorder === "1") {
      document.getElementById("signbutton").style.display = "none";
      document.getElementById("notify").style.display = "";
      document.getElementById("notif").style.display = "";
      document.getElementById("selectAll").style.display = "";
    } else if (signorder === "2") {
      document.getElementById("signbutton").style.display = "";
      document.getElementById("notify").style.display = "none";
      document.getElementById("notif").style.display = "none";
      document.getElementById("selectAll").style.display = "none";
    }
    if (signorder === "0") {
      this.setState({ signorder: "0" });
    } else {
      this.setState({ signorder: signorder });
    }
    let jsonData = {
      group: group,
      company: company,
      signOrder: signorder,
      signing: signing,
      username: sessionStorage.getItem("username"),
      authToken: sessionStorage.getItem("authToken"),
      docCode: docCode,
    };
    this.setState({ loaded: false });
    fetch(URL.getSignedDocList, {
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
        // $('#listtable tr').remove();
        if (responseJson.status === "SUCCESS") {
          dataList = responseJson.list;
          this.setState({ loaded: true });
          // to check for signorder="0" unsigned list
          if (signorder === "0") {
            // $('#listtable').DataTable().destroy();
            // $('#listtable').empty();
            // $('#listtable tr').append(
            //     '<thead > '
            //     + '  <tr>'
            //     + '  <th><input type="checkbox" id="selectAllCheck" name="selectAllCheck" onChange={() => { this.checkAll() }} /></th> '
            //     + '<th>BC Name &nbsp;&nbsp;</th><th>MID</th><th>Phone No.</th><th>Email</th> '
            //     + '   </tr> '
            //     + ' </thead>'
            // )
            // $('#listtables').DataTable().clear();
            // $('#listtables').DataTable().destroy();
            $("#listtable").DataTable().destroy();
            $("#listtable").DataTable({
              ordering: false,
              pagingType: "full_numbers",
              data: dataList,
              columns: [
                // [ "empName" ]],
                // "data": [
                //     [
                //         "abcd"
                //     ]
                // ]

                {
                  render: function (data, type, full, meta) {
                    var result = encodeURI(JSON.stringify(full));
                    // console.log(full)
                    return (
                      '<input type="checkbox" id=' +
                      full.empid +
                      "  name=" +
                      full.mobileNo +
                      " value= " +
                      result +
                      "></input>"
                    );
                  },
                },
                { data: "empname" },
                { data: "empid" },
                { data: "docCode" },
                {
                  data: "signDate",
                  defaultContent: "-",
                },
                {
                  data: "signername",
                  defaultContent: "-",
                },
                {
                  data: "txnID",
                  defaultContent: "-",
                },
                { data: "mobileNo" },
                // { "data": "emailID" },
                {
                  render: function (data, type, full, meta) {
                    if (
                      full.emailID.trim().length <= 0 ||
                      full.emailID.trim() === "null"
                    ) {
                      return "-";
                    } else {
                      return full.emailID;
                    }
                  },
                },
                {
                  render: function (data, type, full, meta) {
                    return "-";
                  },
                },
              ],
            });
          } else {
            // $('#listtable').DataTable().destroy();
            // $('#listtables').empty();
            // $('#listtable tr').append(
            //     ' <thead > '
            //     + '   <tr>'
            //     + '  <th><input type="checkbox" id="selectAllCheck" name="selectAllCheck" onChange={() => { this.checkAll() }} /></th> '
            //     + '  <th>BC Name &nbsp;&nbsp;</th><th>MID</th><th>Document Code</th><th>Sign DateTime</th><th>Signer Name</th> '
            //     + '   <th>Transaction ID</th><th>Phone No.</th><th>Email</th><th>Download</th> '
            //     + '  </tr>'
            //     + '  </thead>'
            // )
            // $('#listtable').DataTable().clear();
            // $('#listtable').DataTable().destroy();
            // $('#listtables').DataTable().clear();
            $("#listtable").DataTable().destroy();
            $("#listtable").DataTable({
              ordering: false,
              pagingType: "full_numbers",
              data: dataList,

              columns: [
                {
                  render: function (data, type, full, meta) {
                    var result = encodeURI(JSON.stringify(full));

                    // var bcname = full.signername.split(",")
                    // let allname = ""
                    // if (full.empname !== bcname[0]) {
                    //     console.log(bcname[0]);
                    //     allname = "<span class='bcname' >" + bcname[0] + "</span>,"
                    //     bcname.splice(0, 1)
                    //     allname += bcname.join(",")
                    // }
                    // else {
                    //     allname = bcname.join(",")
                    // }
                    // full.signername = allname

                    return (
                      '<input type="checkbox" id=' +
                      full.empid +
                      "  name=" +
                      full.docCode +
                      " value= " +
                      result +
                      " ></input>"
                    );
                  },
                },
                { data: "empname" },
                { data: "empid" },
                { data: "docCode" },
                { data: "signDate" },
                { data: "signername" },
                { data: "txnID" },
                { data: "mobileNo" },
                { data: "emailID" },
                {
                  render: function (data, type, full, meta) {
                    return (
                      "<a href=" +
                      URL.downloadDoc +
                      "/" +
                      full.txnID +
                      ">Download</a>"
                    );
                  },
                },
              ],
            });
          }
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
        // sessionStorage.clear()
        // this.props.history.push('/CVP/hrlogin')
      });
  };

  signExistingDoc = () => {
    var signing = $("#signing :selected").val();
    var checkboxes = document.querySelectorAll(
      `input[type='checkbox']:checked`
    );
    var list = [];
    if (checkboxes.length > 0) {
      for (var checkbox of checkboxes) {
        if (checkbox.id !== "selectAllCheck") {
          var temps = JSON.parse(decodeURI(checkbox.value));
          // console.log(temps)
          var sign = {
            empid: temps.empid,
            docCode: temps.docCode,
            txnID: temps.txnID,
            signOrder: $("#signorder :selected").val(),
          };
          list.push(sign);
        }
      }

      if (signing === "eSign" && checkboxes.length > 1) {
        alert("For Aadhaar eSigning select only 1 record");
      } else {
        let jsonData1 = {
          mode: signing,
          username: sessionStorage.getItem("username"),
          authToken: sessionStorage.getItem("authToken"),
          userIP: sessionStorage.getItem("userIP"),
          list: list,
        };
        this.setState({ loaded: false });
        fetch(URL.signExistingDocument, {
          method: "POST",
          cache: "no-cache",
          async: false,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData1),
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            if (responseJson.status === "SUCCESS") {
              if (signing === "token") {
                alert(responseJson.statusDetails);
                window.location.reload(false);
              } else {
                let isAuthenticated = true;
                sessionStorage.setItem("isAuthenticated", isAuthenticated);
                sessionStorage.setItem("espXML", responseJson.espXML);
                sessionStorage.setItem("aspURL", responseJson.aspUrl);
                this.setState({ loaded: true });
                this.props.history.push("/CVP/success");
              }
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
      }
    } else {
      alert("Please select any Record");
    }
  };

  sendNotification = () => {
    var signorder = $("#signorder :selected").val();
    var type = [];
    var checkboxes = document.querySelectorAll(
      `input[type='checkbox']:checked`
    );
    console.log(checkboxes);
    var list = [];
    var check = document.getElementsByClassName("myCheckBox");
    var isChecked = false;
    if (checkboxes.length > 0) {
      for (var checkbox of checkboxes) {
        if (
          checkbox.id !== "selectAllCheck" &&
          checkbox.id !== "notification"
        ) {
          var temp = JSON.parse(decodeURI(checkbox.value));
          // console.log(temp)
          var send = {
            empid: temp.empid,
            mobileNo: temp.mobileNo,
            emailID: temp.emailID,
          };
          list.push(send);
        } else {
          var notification = {
            type: checkbox.value,
          };
          // console.log(type)
          type.push(notification);
        }
      }
      for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
          isChecked = true;
        }
      }
      if (isChecked) {
        let jsonData = {
          username: sessionStorage.getItem("username"),
          authToken: sessionStorage.getItem("authToken"),
          signOrder: signorder,
          type: type,
          list: list,
        };
        this.setState({ loaded: false });
        fetch(URL.sendNotification, {
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
      } else {
        alert("Please select notification type");
      }
    } else {
      alert("Please select any Record");
    }
  };

  async downloadSelectedDocs() {
    var signorder = $("#signorder :selected").val();
    var type = [];
    var checkboxes = document.querySelectorAll(
      `input[type='checkbox']:checked`
    );
    // console.log(checkboxes);
    var list = [];
    var check = document.getElementsByClassName("myCheckBox");
    var isChecked = false;
    if (checkboxes.length > 0) {
      var txnIdList = [];

      for (var checkbox of checkboxes) {
        if (
          checkbox.id !== "selectAllCheck" &&
          checkbox.id !== "notification"
        ) {
          var temp = JSON.parse(decodeURI(checkbox.value));
          // console.log(temp);
          //  var send = {
          //    empid: temp.empid,
          //    mobileNo: temp.mobileNo,
          //    emailID: temp.emailID,

          //  };
          //  list.push(send);
          var url = URL.downloadDoc;
          let response = await fetch(URL.downloadDoc + "/" + temp.txnID);
          let resp = await response;
          let data = await resp.blob();
          let urlParams = resp.url.split("/");
          saveAs(data, urlParams[urlParams.length - 1]);

          // this.downloadSelecetedDocs(URL.downloadDoc, temp.txnID);
          // console.log(url);
          // fetch(url, {
          //   method: "GET",
          // }).then(response => txnIdList.push(response));

          //{
          // var url = response.url.toString();
          // console.log(url);
          // txnIdList = url.split("/");
          // console.log(txnIdList[5]);
          // return response.blob();
          //}
          // .then((blob) => {
          //   saveAs(blob, txnIdList[5]);
          // });
        } else {
          var notification = {
            type: checkbox.value,
          };
          // console.log(type)
          type.push(notification);
        }
      }
      //   console.log(txnIdList.length);
      // console.log(txnIdList);

      // console.log(txnIdList.length())
      // for (var i = 0; i < checkboxes.length; i++) {
      //   alert("called");
      //   console.log(txnIdList);
      //   // console.log(txnIdList[i].response)
      //   // saveAs(txnIdList[i].blob, txnIdList[i].url.split("/")[5]);
      // }

      for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
          isChecked = true;
        }
      }
      let jsonData = {
        username: sessionStorage.getItem("username"),
        authToken: sessionStorage.getItem("authToken"),
        signOrder: signorder,
        type: type,
        list: list,
      };
      // console.log(list);
    }
  }

  // async await downloadSelecetedDocs(url, txnId) {
  //   window.location.href = url + "/" + txnId;
  // }

  checkAll() {
    var checkboxes = document.querySelectorAll(`input[type='checkbox']`);
    if (document.getElementById("selectAllCheck").checked) {
      for (var i = 0; i < checkboxes.length; i++) {
        if (
          checkboxes[i].type === "checkbox" &&
          checkboxes[i].id !== "notification"
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

  selectAll() {
    var list = [];
    var type = [];
    var signorder = $("#signorder :selected").val();
    var checkboxes = document.querySelectorAll(
      `input[type='checkbox']:checked`
    );
    var check = document.getElementsByClassName("myCheckBox");
    var isChecked = false;
    // preparing list format for notification
    for (var i = 0; i < dataList.length; i++) {
      var record = dataList[i];
      if (record.emailID.trim() === "null") {
        record.emailID = "";
      }
      var send = {
        empid: record.empid,
        mobileNo: record.mobileNo,
        emailID: record.emailID,
      };
      list.push(send);
    }
    //fetching the notification types from checkbox
    for (var checkbox of checkboxes) {
      if (checkbox.id !== "selectAllCheck") {
        var notification = {
          type: checkbox.value,
        };
        type.push(notification);
      }
    }
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked) {
        isChecked = true;
      }
    }
    if (isChecked) {
      var r = window.confirm(
        "Press OK, to send notification to " + dataList.length + " people"
      );
      if (r === true) {
        let jsonData = {
          username: sessionStorage.getItem("username"),
          authToken: sessionStorage.getItem("authToken"),
          signOrder: signorder,
          type: type,
          list: list,
        };
        this.setState({ loaded: false });
        fetch(URL.sendNotification, {
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
      alert("Please select notification type");
    }
  }
  approveReq() {
    this.props.history.push("/CVP/approveNameList");
  }

  bcsignrejectiondetails() {
    let jsonData1 = {
      username: sessionStorage.getItem("username"),
      authToken: sessionStorage.getItem("authToken"),
    };
    this.setState({ loaded: false });
    fetch(URL.bcsignrejectiondetails, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData1),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status === "SUCCESS") {
        } else {
          this.setState({ loaded: true });
          alert(responseJson.statusDetails);
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
  }

  getBcCellTokenIP() {
    // e.preventDefault();
    let jsonData1 = {
      authToken: sessionStorage.getItem("authToken"),
    };
    this.setState({ loaded: false });
    fetch(URL.getBcCellIP, {
      method: "POST",
      cache: "no-cache",
      async: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData1),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status === "SUCCESS") {
          //  alert(responseJson.existingIP)
          this.setState({
            loaded: true,
            openOTPModal: true,
            updateIp: responseJson.existingIP,
          });
          document.getElementById("existingIP").readOnly = true;
        } else {
          this.setState({ loaded: true });
          alert(responseJson.statusDetails);
        }
      })
      .catch((e) => {
        this.setState({ loaded: true });
        alert(e);
      });
  }

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

  updateBcCellIP = () => {
    if (
      this.state.enteredIP.length !== 0 &&
      this.state.enteredIP.trim() !== ""
    ) {
      let jsonData1 = {
        authToken: sessionStorage.getItem("authToken"),
        ipAddress: this.state.enteredIP,
      };
      this.setState({ loaded: false });
      fetch(URL.updateBcCellIP, {
        method: "POST",
        cache: "no-cache",
        async: false,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData1),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.status === "SUCCESS") {
            this.setState({ loaded: true, openOTPModal: false });
            alert(responseJson.statusDetails);
          } else {
            this.setState({ loaded: true });
            alert(responseJson.statusDetails);
          }
        })
        .catch((e) => {
          this.setState({ loaded: true });
          alert(e);
        });
    } else {
      alert("Please Enter the IP Address");
    }
  };

  // Action master page routing for action update
  UpdateUsers() {
    this.props.history.push("/CVP/UpdateUser");
  }
  BulkDataUpload = () => {
    this.props.history.push("/CVP/BulkDataUpload");
  };

  getSigningStatusReport = () => {

    this.setState({ openSigningStatusModal: "true" })

  }



  getRejectionStatusReport = () => {
    this.setState({ openRejectionStatusModal: "true" })

  }

  downloadSigningStatusReport = (e) => {
    e.preventDefault()
    this.onCloseSigningStatusModal()
    var selectedGroup = $("#SigningStatusGroup :selected").val();
    console.log(selectedGroup)
    const authToken = btoa(sessionStorage.getItem("authToken"));
    const url = `${URL.bcstatewisesigningstatus}?at=${authToken}&grp=${selectedGroup}`;
    window.location.href = url;
  }


  downloadRejectionStatusReport = (e) => {
    e.preventDefault()
    this.onCloseRejectionStatusModal()
    var selectedGroup = $("#RejectionStatusGroup :selected").val();
    console.log(selectedGroup)
    const authToken = btoa(sessionStorage.getItem("authToken"));
    const url = `${URL.bcsignrejectiondetails}?at=${authToken}&grp=${selectedGroup}`;
    window.location.href = url;
  }



  render() {
    const { openOTPModal, openSigningStatusModal,openRejectionStatusModal, ArrayOfOptions } = this.state;


    // Not in use
    // var tableheader;
    // if (this.state.signorder === "0") {
    //     tableheader =
    //         <Table hover bordered striped responsive id="listtable" style={{ textAlign: "center", width: "100%" }}>
    //             <thead>
    //                 <tr>
    //                     <th><input type="checkbox" id="selectAllCheck" name="selectAllCheck" onChange={() => { this.checkAll() }} /></th>
    //                     <th>BC Name &nbsp;&nbsp;</th><th>MID</th><th>Phone No.</th><th>Email</th>
    //                 </tr>
    //             </thead>
    //         </Table>
    // } else {
    //     tableheader =
    //         <Table hover bordered striped responsive id="listtables" style={{ textAlign: "center", width: "100%" }}>
    //             <thead>
    //                 <tr>
    //                     <th><input type="checkbox" id="selectAllCheck" name="selectAllCheck" onChange={() => { this.checkAll() }} /></th>
    //                     <th>BC Name &nbsp;&nbsp;</th><th>MID</th><th>Document Code</th><th>Sign DateTime</th><th>Signer Name</th>
    //                     <th>Transaction ID</th><th>Download</th>
    //                 </tr>
    //             </thead>
    //         </Table>
    // }
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
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "100%" }}>
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
                    style={{ width: "8%" }}
                  >
                    {/* <option id="i25bca" value="i25BCA">i25BCA</option> */}
                  </select>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Group :&nbsp;
                  <select
                    id="group"
                    name="selectedgroup"
                    onChange={this.getSignedList}
                    style={{ width: "8%" }}
                  >
                    {/* <option id="obc" value="OBC" >OBC</option>
                                        <option id="ubin" value="UBIN">UBIN</option> */}
                  </select>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Document Code :&nbsp;
                  <select
                    id="docCode"
                    name="selecteddoccode"
                    onChange={this.getSignedList}
                    style={{ width: "8%" }}
                  >
                    {/* <option id="docbcaa" value="BCAA" >BCAA</option>
                                        <option id="docbcaaubin" value="BCAAUBIN" >BCAAUBIN</option> */}
                  </select>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign Order :&nbsp;
                  <select
                    id="signorder"
                    name="selectedsignorder"
                    onChange={this.getSignedList}
                    style={{ width: "13%" }}
                  >
                    <option id="0" value="0">
                      BC Signing Pending
                    </option>
                    <option id="1" value="1">
                      BC Signed
                    </option>
                    <option id="2" value="2">
                      BC & Witness Signed
                    </option>
                    <option id="3" value="3">
                      BC,Witness & BC Cell Signed
                    </option>
                  </select>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign With :&nbsp;
                  <select
                    id="signing"
                    name="selectedsigning"
                    style={{ width: "14%" }}
                  >
                    <option id="token" value="token">
                      DSC Token Signing
                    </option>
                    <option id="esign" value="eSign">
                      Aadhaar Signing
                    </option>
                  </select>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    color="primary"
                    id="approveReq"
                    className="px-4"
                    onClick={() => {
                      this.approveReq();
                    }}
                  >
                    BC Update Requests
                  </Button>
                </td>


                <td style={{ width: "50%" }}>


                  <Modal
                    className="modal-container"
                    open={openSigningStatusModal}
                    onClose={this.onCloseSigningStatusModal}
                    center={true}
                    closeOnOverlayClick={false}
                  >
                    <div className="para-text" >
                      <h4> Select Bank </h4>
                      <br></br>
                      <div className="para-content">
                        <Row style={{ marginLeft: "0%", marginTop: "2%" }}>
                          <InputGroup className="mb-3">
                            <label id="existingIPLabel">
                              Group: &nbsp;
                            </label>
                            <select
                              id="SigningStatusGroup"
                              style={{ width: "50%" }}

                            >
                             <option  value={"All"}>All banks</option>
                              {ArrayOfOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.text}
                                </option>
                              ))}
                            </select>
                          </InputGroup>

                          <Button
                            color="primary"
                            className="px-0"
                            style={{ width: "50%", marginLeft: "19%" }}
                            onClick={(e) => {
                              this.downloadSigningStatusReport(e);
                            }}
                          >
                            Submit
                          </Button>



                        </Row>
                      </div>
                    </div>
                  </Modal>

                </td>



                <td style={{ width: "50%" }}>


                  <Modal
                    className="modal-container"
                    open={openRejectionStatusModal}
                    onClose={this.onCloseRejectionStatusModal}
                    center={true}
                    closeOnOverlayClick={false}
                  >
                    <div className="para-text" >
                      <h4> Select Bank </h4>
                      <br></br>
                      <div className="para-content">
                        <Row style={{ marginLeft: "0%", marginTop: "2%" }}>
                          <InputGroup className="mb-3">
                            <label id="existingIPLabel">
                              Group: &nbsp;
                            </label>
                            <select
                              id="RejectionStatusGroup"
                              style={{ width: "50%" }}

                            >
                               <option  value={"All"}>All banks</option>
                              {ArrayOfOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.text}
                                </option>
                              ))}
                            </select>
                          </InputGroup>

                          <Button
                            color="primary"
                            className="px-0"
                            style={{ width: "50%", marginLeft: "19%" }}
                            onClick={(e) => {
                              this.downloadRejectionStatusReport(e);
                            }}
                          >
                            Submit
                          </Button>



                        </Row>
                      </div>
                    </div>
                  </Modal>

                </td>


              </tr>
            </tbody>
          </table>
          <br />
          {/* {tableheader} */}
          <Table
            hover
            bordered
            striped
            responsive
            id="listtable"
            style={{ textAlign: "left", width: "100%" }}
          >
            {/* {tableheader} */}
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="selectAllCheck"
                    name="selectAllCheck"
                    onChange={() => {
                      this.checkAll();
                    }}
                  />
                </th>
                <th>BC Name &nbsp;&nbsp;</th>
                <th>MID</th>
                <th>Document Code</th>
                <th>Sign DateTime</th>
                <th>Signer Name</th>
                <th>Transaction ID</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Download</th>
              </tr>
            </thead>
          </Table>
          <br />
          <table>
            <tbody>
              <tr>
                <td id="tabletdbtns">
                  {" "}
                  <Button
                    style={{ marginRight: "25px" }}
                    color="primary"
                    id="updateIp"
                    className="px-4"
                    onClick={() => {
                      this.getBcCellTokenIP();
                    }}
                  >
                    Update Token IP
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    id="tabletdbtns"
                    color="primary"
                    className="px-4"
                    onClick={() => this.BulkDataUpload()}
                  >
                    Bulk Data Upload
                  </Button>
                </td>
                <td id="tabletdbtns">
                  {" "}
                  <Link to="/CVP/UpdateUser"> Update users </Link>
                </td>
                <td id="tabletdbtns">
                  {" "}
                  {/* <a
                    href={
                      URL.bcstatewisesigningstatus +
                      "?at=" +
                      btoa(sessionStorage.getItem("authToken"))
                    }
                    id="rejectionlink"
                  >
                    BC signing status report
                  </a> */}

                  <button type="button" class="btn btn-link" onClick={() => this.getSigningStatusReport()}  >
                    BC signing status report
                  </button>







                </td>
                <td id="tabletdbtns">
                  {/* <a
                    href={
                      URL.bcsignrejectiondetails +
                      "?at=" +
                      btoa(sessionStorage.getItem("authToken"))
                    }
                    id="signinglink"
                  >
                    BC signing rejection report
                  </a> */}

                  <button type="button" class="btn btn-link" onClick={() => this.getRejectionStatusReport()}  >
                    BC signing rejection report
                  </button>




                </td>
                <td id="tabletdbtns">
                  <div id="notif">
                    <label>SMS :</label>&nbsp;&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="notification"
                      className="myCheckBox"
                      value="SMS"
                    ></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Email :</label>&nbsp;&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="notification"
                      className="myCheckBox"
                      value="EMAIL"
                    ></input>
                  </div>
                </td>
                <td id="tabletdbtns">
                  <Button
                    color="primary"
                    id="signbutton"
                    className="px-4"
                    onClick={() => {
                      this.signExistingDoc();
                    }}
                  >
                    Proceed for Signing
                  </Button>
                </td>
                <td id="tabletdbtns">
                  {" "}
                  <Button
                    color="primary"
                    id="notify"
                    className="px-4"
                    onClick={() => {
                      this.sendNotification();
                    }}
                  >
                    Send Notification
                  </Button>
                </td>
                <td id="tabletdbtnsd">
                  {" "}
                  <Button
                    color="primary"
                    className="px-4"
                    id="downloadSelectedDocs"
                    style={{ display: "none" }}
                    onClick={() => {
                      this.downloadSelectedDocs();
                    }}
                  >
                    Download Selected
                  </Button>
                </td>
                <td id="tabletdbtns">
                  {" "}
                  <Button
                    color="primary"
                    id="selectAll"
                    className="px-4"
                    onClick={() => {
                      this.selectAll();
                    }}
                  >
                    Notify All
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <table style={{ marginLeft: "0%" }}>
            <tbody>
              <tr>
                <td>
                  <Button
                    color="primary"
                    id="userUpdate"
                    className="px-4"
                    onClick={() => {
                      // this.getBcCellTokenIP();
                      this.UpdateUsers();
                    }}
                  >
                    Update Users
                  </Button>
                </td>
                <td>
                  <Button
                    color="primary"
                    id="updateIp"
                    style={{ marginLeft: "5%", width: "20%" }}
                    className="px-4"
                    onClick={() => {
                      this.getBcCellTokenIP();
                    }}
                  >
                    Update Token IP
                  </Button>
                </td>
                <td style={{ paddingLeft: "3%", width: "30%" }}>
                  <a
                    href={
                      URL.bcstatewisesigningstatus +
                      "?at=" +
                      btoa(sessionStorage.getItem("authToken"))
                    }
                    id="rejectionlink"
                  >
                    BC signing status report
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td style={{ paddingLeft: "3%", width: "20%" }}>
                  {" "}
                  <a
                    href={
                      URL.bcsignrejectiondetails +
                      "?at=" +
                      btoa(sessionStorage.getItem("authToken"))
                    }
                    id="signinglink"
                  >
                    BC signing rejection report
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td style={{ marginLeft: "5%", paddingLeft: "3%" }}>
                  {" "}
                  <div id="notif">
                    <label>SMS :</label>&nbsp;
                    <input
                      type="checkbox"
                      id="notification"
                      className="myCheckBox"
                      value="SMS"
                    ></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Email :</label>&nbsp;
                    <input
                      type="checkbox"
                      id="notification"
                      className="myCheckBox"
                      value="EMAIL"
                    ></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </td>

                <td
                  style={{ marginLeft: "5%", paddingLeft: "3%", width: "10%" }}
                >
                  <Button
                    color="primary"
                    id="signbutton"
                    className="px-4"
                    onClick={() => {
                      this.signExistingDoc();
                    }}
                  >
                    Proceed for Signing
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    color="primary"
                    id="notify"
                    className="px-4"
                    onClick={() => {
                      this.sendNotification();
                    }}
                  >
                    Send Notification
                  </Button>
                  &nbsp;
                  <Button
                    color="primary"
                    id="selectAll"
                    className="px-4"
                    onClick={() => {
                      this.selectAll();
                    }}
                  >
                    Notify All
                  </Button>
                </td>
              </tr>
            </tbody>
          </table> */}
          <br />







        </div>
      </div>
    );
  }
}
