import { Dropdown } from 'bootstrap';
import React,{Component} from 'react'

export default class AnnexurePUNB

extends Component{
    constructor(){
        super();
        var data = sessionStorage.getItem("additionalData")
        this.state={
            additionalData : JSON.parse(data),
            arr: sessionStorage.getItem("langCode"),
            selectedlang:"ENG"
        }

    }   
    

    render(){
        return(
           <div style={{fontFamily : "Times New Roman"}}> 
           <table style={{fontSize:"15px",borderCollapse:"collapse",width:"100%",border:"1px solid black"}}>
			<tbody style={{border:"1px solid black"}}>
				 <tr style={{border:"1px solid black"}}>
		<td colspan="3" style={{textAlign:"center"}}><b style={{fontSize:"10px",paddingTop:"10px"}}>Annexure A – ‘Commission for BC Services’</b></td></tr>
			
	
				<tr colspan="3" style={{border:"1px solid black"}}>
					<th style={{border:"1px solid black",textAlign:"center"}}><b>Sl.No</b></th>
					<th style={{border:"1px solid black",textAlign:"center"}}><b>Services</b></th>
					<th style={{border:"1px solid black",textAlign:"center"}}>BCA Portion</th></tr>
							
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>1</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Account Opening</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 16 out of which Rs 8 at the time of account opening & 8 after min balance Rs 100 in the account opened.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>2</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>TDR/RD opening</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4 per account, if auto renewal Flag 'Y' Rs 5.6 per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>3</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash deposit (own bank)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% of the cash handled with max. Rs 40/- per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>4</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash   deposit(other bank   AEPS/Rupay card)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px;"}}>0.20% of the cash handled with max. Rs 9.6/- per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>5</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash withdrawal (on us)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% of the cash handled with max. Rs 40/- per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>6</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash withdrawal (off us)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.20% of the cash handled with max. Rs 9.6/- per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>7</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Fund transfer (own bank)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% (max.  of Rs.  8/-) per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>8</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Fund     transfer (other Bank-AEPS/Rupay card)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% (max.  of Rs.  8/-) per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>9</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>IMPS</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% of the cash handled with max. Rs 24/- per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>10</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Indo   Nepal   remittance Charges</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% of the cash handled with max. Rs 24/- per account per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>11</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Balance    enquiry (own bank)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Nil</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>12</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Balance   enquiry (other bank   AEPS/Rupay card)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Nil</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>13</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Mini statement</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Nil</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>14</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Enroll for microaccidental death insurance (PMSBY)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 0.80/- per enrolment.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>15</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Enroll for micro life insurance (PMJJBY)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 24/ per enrolment.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>16</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Enroll for social security pension scheme (APY)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 40/ per enrolment or Rs 48 per APY abinitio after target of 60 APY achieved by BCA.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>17</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Aadhaar seeding through biometric only</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>18</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SHG   &   JLG:  For formation   &   promotion, including credit linkage</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 240/ at the time of savings linkage Rs 240/- after 4 months of savings linkage and Rs 320/ after credit linkage.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>19</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Renew TD/RD</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 1.6 per account, if auto renewal Flag 'Y' Rs 4.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>20</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>NEFT</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32% of transaction subject to max. Rs 8/-.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>21</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Mobile seeding</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>22</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Passbook Update</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per passbook per day.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>23</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cheque collection</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>24</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Request   new   Cheque book</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>25</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Stop payment of Cheque</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>26</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cheque status enquiry</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Nil</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>27</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Request for SMS alert / email statement (if mobile no. / e-mail is already registered)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>28</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>BBPS</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per bill.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>29</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Apply for  RuPay  debit cards(&lt; 6 months old ac)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>30</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Block debit card</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>31</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Pension life certificate authentication through Jeevan Pramaan (Aadhaar enabled)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 4/- per certificate authentication through Jeevan Pramaan (Aadhaar enabled).</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>32</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Sukanya Samriddhi Scheme Enrollment</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 8/- per enrolment.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>33</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>PPF account opening</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs 8/- per account.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>34</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Recovery/collection up to bank approved limits</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>*As per Board approved policy of SASTRA Division: For NPA accounts: 4% on the amount of recovery, For SMA II accounts : 2% of irregular amount</td>
						</tr>
			
              
           </tbody>
			</table>
           </div>
    
       )  
    }
}