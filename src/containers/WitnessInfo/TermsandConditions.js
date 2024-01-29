import React,{Component} from 'react'
class TermsandConditions extends Component{
    constructor(){
        super();
        var data = sessionStorage.getItem("additionalData")
        this.state={
            additionalData : JSON.parse(data),
        }
    }    
    render(){
        return(
            <div style={{fontFamily : "Times New Roman"}}>
                <b><p style={{textAlign:"center",fontSize:"25px"}}>Instructions</p></b>              
                <div style={{fontSize:"20px"}}>
                    <ul>
                        <li style={{marginBottom:"0.7%"}}>Now you are continuing with Witness Signing of the agreement through OTP based signing</li>
                        <li style={{marginBottom:"0.7%"}}>To proceed with Witness Signing please select the confirmation box and click on ‘Get OTP’ button.</li>
                        <li style={{marginBottom:"0.7%"}} >An OTP will be sent to the given mobile number of witness.</li>
                        <li style={{marginBottom:"0.7%"}}>Enter the OTP and click on ‘Proceed with witness Signing’ button.</li>
                    </ul> 
                </div>
        </div>
       )  
    }
}
export default TermsandConditions