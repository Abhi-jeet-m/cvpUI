import React, {Component} from 'react';
import $ from 'jquery';

export default class Success extends Component{
    constructor(props) {
    super(props);
    this.ifr = null;
        this.state = {
            aspUrl :"",
            aspRespXML: ""
        }
    }

    componentWillMount(){
        this.setState({
            aspUrl: sessionStorage.getItem("aspURL"),
            aspRespXML: sessionStorage.getItem("espXML"),
        })

        // $('#iframetag').ready(function () {
        // $('#loadingMessage');
        // });
        // $('#iframetag').on('load', function() {
        //     $('#loadingMessage')
        // });
        // $('#iframetag').load(function () {
        // $('#loadingMessage').css('display', 'none');
        // });
    }

    componentDidMount(){
        var form = this.refs.form;
        form.submit()
    }

    onLoad = () =>{
    }
    
    render(){
        
        return(
            <div className="success-container">
                
                <iframe name="my_iframe"  id="iframetag"  frameBorder="0" className="iframe" 
                scrolling="yes" height="99%" width="100%" onLoad={this.onLoad()} title="myFrame"/>
                {/* <div id="loadingMessage" width="100%" height=" 100%" z-index=" 1000" background="#ccc" top= "0px" left= "0px" position="absolute">Loading...</div> */}
                <form id="URL" name="URL" method="POST" action={this.state.aspUrl} encType="multipart/form-data" target="my_iframe" ref="form">
                    <input type="hidden" name="obj" id="obj" value=""/>
                    <input type="hidden" name="msg" id="msg" value={this.state.aspRespXML}/>
                </form>
            </div>
        )
    }
}