import React, { Component } from "react";
//import $ from 'jquery';
//https://pspdfkit.com/blog/2018/open-pdf-in-react/
import ReactDOM from "react-dom";
//import PDFObject from './pdfobject';

class PDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      empinfo: this.props.empinfo,
    };
  }

  componentDidMount() {
    // console.log("url:"+this.props.url+ this.props.empinfo);
    if (navigator.userAgent.indexOf("Chrome") !== -1) {
      let iframe = ReactDOM.findDOMNode(this.refs.iframe);
      iframe.remove();
    }
  }

  getPdfPreview = () => {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      alert("Sorry, your browser does not support for preview");
    }
  };

  render() {
    return (
      <div className="pdf-container"style={{height: "55%"}}>
        <embed
          title="PDF preview"
          type="application/pdf"
          src={this.props.url + this.props.empinfo}
          width="100%"
          height="100%"
        />
        <br id="1" />
        <br id="2" />
        <iframe
          title="PDF preview"
          ref="iframe"
          type="application/pdf"
          src={this.props.url + this.props.empinfo}
          width="100%"
          height="100%"
          hidden
        ></iframe>
      </div>
    );
  }
}
export default PDF;
