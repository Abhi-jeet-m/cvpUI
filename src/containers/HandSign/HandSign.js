import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { Button, Row } from "reactstrap";
import "./handSign.css";
import "./Fonts/handSignFonts.css";
import Dropzone from "react-dropzone";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function HandSign() {
  var file;
  const [imageURL, setImageURL] = useState(null);
  const [isdisable, setdisable] = useState(true);
  const [drawImg, setDrawImg] = useState(null);
  const [filename, setFileName] = useState("");
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const adopt = () => {
    var imagedata = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    if (imagedata !== null) {
      if (
        imagedata.length > 2500 &&
        imagedata.includes("base64") &&
        imagedata.includes("data:image")
      ) {
        setImageURL(imagedata);
        sessionStorage.setItem("signUploadImgFileName", "");
        sessionStorage.setItem("handSignImg", imagedata);
        document.getElementById("closeBtn").click();
      } else {
        sessionStorage.removeItem("handSignImg");
        document.getElementById("closeBtn").click();
        alert("Please Sign or upload valid signature");
      }
    } else {
      sessionStorage.removeItem("handSignImg");
      document.getElementById("closeBtn").click();
      alert("Please Sign or valid signature");
    }
  };
  // On the click of apply button the setted image will be displayed
  const adoptUpload = () => {
    if (drawImg !== null) {
      if (
        drawImg.length > 2500 &&
        drawImg.includes("base64") &&
        drawImg.includes("data:image")
      ) {
        setImageURL(drawImg);
        sessionStorage.setItem("handSignImg", drawImg);
        document.getElementById("closeBtn").click();
      } else {
        sessionStorage.removeItem("handSignImg");
        document.getElementById("closeBtn").click();
        alert("Please Sign or upload valid signature");
      }
    } else {
      sessionStorage.removeItem("handSignImg");
      document.getElementById("closeBtn").click();
      alert("Please Sign or valid signature");
    }
  };

  function onDrop(files) {
    var file = files[0];
    // if (file.size <10240 ) {
    //  if (file.size < 307200 ) {
    if (file.size < 1048576) {
      sessionStorage.setItem("signUploadImgFileName", file.name);
      setFileName(file.name);
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          var base64img = reader.result;
          setDrawImg(base64img);
          // setImageURL(base64img);
          sessionStorage.setItem("handSignImg", base64img);
          setdisable(false);
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      alert("Signed image should be less than 1MB");
    }
  }

  const createnav = () => {
    document.getElementById("signaturePad").style.display = "none";
    document.getElementById("nav-tabContent").style.display = "";
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("adoptBtn").style.display = "none";
    document.getElementById("adoptUploadBtn").style.display = "";
    document.getElementById("canvasMsg1").style.display = "";
    document.getElementById("canvasMsg2").style.display = "none";
    setDrawImg(null);
    setImageURL(null);
    handelChange();
    resetRDB();
  };
  //setting radio buttons to default value
  const resetRDB = () => {
    var checkBoxes = document.getElementsByName("selectedFont");
    for (var i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        document.getElementById(checkBoxes[i].id).checked = false;
      }
    }
  };

  const drawnav = () => {
    document.getElementById("signaturePad").style.display = "";
    document.getElementById("clearBtn").style.display = "";
    document.getElementById("nav-tabContent").style.display = "none";
    document.getElementById("adoptBtn").style.display = "";
    document.getElementById("adoptUploadBtn").style.display = "none";
    document.getElementById("canvasMsg2").style.display = "none";
    document.getElementById("canvasMsg1").style.display = "none";
    clear();
  };
  const uploadnav = () => {
    document.getElementById("signaturePad").style.display = "none";
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("nav-tabContent").style.display = "";
    document.getElementById("adoptBtn").style.display = "none";
    document.getElementById("adoptUploadBtn").style.display = "";
    document.getElementById("canvasMsg2").style.display = "";
    document.getElementById("canvasMsg1").style.display = "none";
    setFileName("");
    setDrawImg(null);
    setImageURL(null);
    setdisable(true);
  };
  //getting the  font family for the input value
  let handelChange = () => {
    document.getElementById("goodfoot").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("Ruthie").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("Handle").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("Sofia").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("Cookie").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("Comic").innerHTML =
      sessionStorage.getItem("witnessName");
    //document.getElementById("Caveat").innerHTML = sessionStorage.getItem("firstName")
    document.getElementById("Rouge").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("DancingScript").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("Romanesco").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("iLoveGlitter").innerHTML =
      sessionStorage.getItem("witnessName");
    document.getElementById("SueEllen").innerHTML =
      sessionStorage.getItem("witnessName");
  };

  // on the click of radio button the selected font will be set to the image
  let imageCreator = (fontfamily, text) => {
    var tCtx = document.getElementById("textCanvas").getContext("2d"),
      imageElem = document.getElementById("image");
    var x = 0;
    var y = 45;
    var fontWeight = 400;
    var fontSize = 50;
    if (fontfamily === "iLoveGlitter") {
      x = 1;
    }
    if (fontfamily === "Caveat") {
      x = 10;
    }
    if (fontfamily === "SueEllen") {
      fontSize = 45;
    }
    if (fontfamily === "Sofia" || "Rouge" || "DancingScript") {
      y = 40;
    }

    var font = "" + fontWeight + " " + fontSize + "px " + fontfamily;

    // Set it before getting the size
    tCtx.font = font;
    // this will reset all our context's properties
    tCtx.canvas.width = tCtx.measureText(text).width + 5;
    // so we need to set it again
    tCtx.font = font;
    // set the color only now
    // tCtx.canvas.height = 60;
    tCtx.fillStyle = "black";
    tCtx.fillText(text, x, y);

    imageElem.src = tCtx.canvas.toDataURL();
    setDrawImg(tCtx.canvas.toDataURL());
  };

  let fontHandler = (e) => {
    imageCreator(e.target.value, e.target.nextSibling.innerText);
  };

  function isPdfSelected() {
    if (isdisable) {
      return (
        <div>
          <span className="drop-pdf">Drop file here </span>
          <i className="fa fa-file-picture-o"></i>
          <br />
          <span className="drop-pdf">OR</span>
          <br />
          <span className="drop-pdf">
            <input
              type="button"
              style={{
                width: "77px",
                fontSize: "inherit",
                backgroundColor: "gray",
                color: "white",
              }}
              value="Upload"
            />
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <img
            style={{ height: "155px", width: "auto" }}
            src={drawImg}
            alt=""
          />
        </div>
      );
    }
  }
  return (
    <div>
      <Row>
        <div>
          <Popup
            modal
            trigger={
              <Button color="primary" id="signaturePadBtn">
                Click to sign
              </Button>
            }
            // Open Signature Pad
            closeOnDocumentClick={false}
          >
            {(close) => (
              <div style={{ color: "black" }}>
                <ModalHeader>Create Your Signature</ModalHeader>
                <ModalBody>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                        onClick={drawnav}
                      >
                        Draw
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        onClick={createnav}
                      >
                        Choose
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                        onClick={uploadnav}
                      >
                        Upload
                      </a>
                    </div>
                  </nav>

                  <div className="sigContainer" id="signaturePad">
                    <SignaturePad
                      ref={sigCanvas}
                      canvasProps={{
                        className: "signatureCanvas",
                      }}
                    />
                    <div id="canvasMsg">Please sign in the above box</div>
                  </div>
                  <div
                    className="tab-content"
                    id="nav-tabContent"
                    style={{ display: "none" }}
                  >
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    ></div>
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div>
                        <canvas
                          className="xx"
                          id="textCanvas"
                          height="60"
                        ></canvas>
                        <img id="image" hidden={true} />
                        <label style={{ fontSize: "20px", margin: "0px" }}>
                          Name:
                          <input
                            id="namefield"
                            className="signerfield "
                            value={sessionStorage.getItem("witnessName")}
                            type="text"
                            readOnly={true}
                          />
                          <br></br>
                        </label>
                        <div id="signFontsCntr">
                          <div className="radio-items" id="radio-item1">
                            <input
                              id="rd1"
                              type="radio"
                              name="selectedFont"
                              value="goodfoot"
                              onChange={fontHandler}
                            />
                            <span
                              id="goodfoot"
                              style={{
                                fontFamily: "goodfoot",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item2">
                            <input
                              id="rd2"
                              type="radio"
                              name="selectedFont"
                              value="Ruthie"
                              onChange={fontHandler}
                            />
                            <span
                              id="Ruthie"
                              style={{
                                fontFamily: "Ruthie",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item12">
                            <input
                              id="rd3"
                              type="radio"
                              name="selectedFont"
                              value="Handle"
                              onChange={fontHandler}
                            />
                            <span
                              id="Handle"
                              style={{
                                fontFamily: "Handle",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item7">
                            <input
                              id="rd4"
                              type="radio"
                              name="selectedFont"
                              value="Sofia"
                              onChange={fontHandler}
                            />
                            <span
                              id="Sofia"
                              style={{ fontFamily: "Sofia", marginLeft: "5px" }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item10">
                            <input
                              id="rd5"
                              type="radio"
                              name="selectedFont"
                              value="Cookie"
                              onChange={fontHandler}
                            />
                            <span
                              id="Cookie"
                              style={{
                                fontFamily: "Cookie",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item9">
                            <input
                              id="rd6"
                              type="radio"
                              name="selectedFont"
                              value="Comic"
                              onChange={fontHandler}
                            />
                            <span
                              id="Comic"
                              style={{ fontFamily: "Comic", marginLeft: "5px" }}
                            ></span>
                            <br></br>
                          </div>

                          {/* <div className="radio-items" id="radio-item6" >
                                                        <input id="rd7" type="radio" name="selectedFont" value="Caveat" onChange={fontHandler} />
                                                        <span id="Caveat" style={{ fontFamily: "Caveat", marginLeft: "5px" }}></span><br></br>
                                                    </div> */}

                          <div className="radio-items" id="radio-item8">
                            <input
                              id="rd8"
                              type="radio"
                              name="selectedFont"
                              value="Rouge"
                              onChange={fontHandler}
                            />
                            <span
                              id="Rouge"
                              style={{ fontFamily: "Rouge", marginLeft: "5px" }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item11">
                            <input
                              id="rd9"
                              type="radio"
                              name="selectedFont"
                              value="DancingScript"
                              onChange={fontHandler}
                            />
                            <span
                              id="DancingScript"
                              style={{
                                fontFamily: "DancingScript",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item4">
                            <input
                              id="rd10"
                              type="radio"
                              name="selectedFont"
                              value="Romanesco"
                              onChange={fontHandler}
                            />
                            <span
                              id="Romanesco"
                              style={{
                                fontFamily: "Romanesco",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item3">
                            <input
                              id="rd11"
                              type="radio"
                              name="selectedFont"
                              value="iLoveGlitter"
                              onChange={fontHandler}
                            />
                            <span
                              id="iLoveGlitter"
                              style={{
                                fontFamily: "iLoveGlitter",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                          <div className="radio-items" id="radio-item5">
                            <input
                              id="rd12"
                              type="radio"
                              name="selectedFont"
                              value="SueEllen"
                              onChange={fontHandler}
                            />
                            <span
                              id="SueEllen"
                              style={{
                                fontFamily: "SueEllen",
                                marginLeft: "5px",
                              }}
                            ></span>
                            <br></br>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="pdf-lg-container">
                        <div
                          id="pdfContainerSignaturePad"
                          className="pdfContainerSignaturePad-container"
                        >
                          <section className="">
                            <div id="HsDropZone" className="dropzone">
                              <h6>Upload the File</h6>
                              <Dropzone
                                type="file"
                                id="SignaturepadDropZone"
                                accept={[".jpg", ".png"]}
                                className="inner-content"
                                onDrop={(e) => onDrop(e)}
                              >
                                <div
                                  className="text-container"
                                  id="textcontainer"
                                >
                                  {isPdfSelected()}
                                </div>
                              </Dropzone>
                              <div className="dropped-files">
                                <aside>
                                  <h6 className="dropped-files-name">
                                    {" "}
                                    {filename}
                                  </h6>
                                </aside>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="canvasMsg1" style={{ display: "none" }}>
                    Select your signature
                  </div>
                  <div id="canvasMsg2" style={{ display: "none" }}>
                    Drop/Upload signature file(jpg/png)
                  </div>
                </ModalBody>
                <ModalFooter id="signatureModalFooter">
                  <Button id="adoptBtn" color="success" onClick={adopt}>
                    Apply
                  </Button>
                  <Button
                    id="adoptUploadBtn"
                    color="success"
                    onClick={adoptUpload}
                    style={{ display: "none", position: "relative" }}
                  >
                    Apply
                  </Button>
                  <Button id="clearBtn" color="primary" onClick={clear}>
                    Clear
                  </Button>
                  <Button
                    id="closeBtn"
                    color="danger"
                    style={{ position: "relative" }}
                    onClick={close}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </div>
            )}
          </Popup>
        </div>
        <div>
          {imageURL ? (
            <img
              src={imageURL}
              alt="my signature"
              style={{
                display: "block",
                margin: "0px 0px 5px 12px",
                border: "1px solid black",
                width: "150px",
                height: "70px",
                backgroundColor: "white",
              }}
            />
          ) : null}
        </div>
      </Row>
    </div>
  );
}

export default HandSign;
