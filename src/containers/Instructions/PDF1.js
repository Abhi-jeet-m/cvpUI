import React from 'react';
import {URL} from '../../Constant'
import PDFViewer from 'mgr-pdf-viewer-react'


var jsonobj = {};
jsonobj["empid"] = sessionStorage.getItem("empid");
jsonobj["empname"] = sessionStorage.getItem("empname");
jsonobj["empcompany"] = sessionStorage.getItem("empcompany");
jsonobj["authToken"] = sessionStorage.getItem("authToken");
var empinfo = JSON.stringify(jsonobj); 

const ExamplePDFViewer = () => {
  return (<PDFViewer document={{
    url: 'http://10.10.10.111:8092'+URL.getpledgedoc+empinfo
  }} />);
}

export default ExamplePDFViewer