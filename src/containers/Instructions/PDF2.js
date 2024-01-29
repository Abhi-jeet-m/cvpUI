import React from 'react';
import {URL} from '../../Constant'
import PDFViewer from 'mgr-pdf-viewer-react'
import { MobilePDFReader, PDFReader  } from 'react-read-pdf'
import {Document, Page} from 'react-pdf/dist/entry.webpack';
import 'idempotent-babel-polyfill';

var jsonobj = {};
jsonobj["empid"] = sessionStorage.getItem("empid");
jsonobj["empname"] = sessionStorage.getItem("empname");
jsonobj["empcompany"] = sessionStorage.getItem("empcompany");
jsonobj["authToken"] = sessionStorage.getItem("authToken");
var empinfo = JSON.stringify(jsonobj); 
let url = 'http://10.10.10.111:8092'+ URL.getpledgedoc+empinfo
const ExamplePDFViewer = () => {
  return (
        <Document  file={'http://10.10.10.111:8092'+ URL.getpledgedoc+empinfo}>
            <Page pageNumber={1} />
        </Document>
  );
}

export default ExamplePDFViewer