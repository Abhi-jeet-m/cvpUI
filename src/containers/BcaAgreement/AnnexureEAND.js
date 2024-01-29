import { Dropdown } from 'bootstrap';
import React,{Component} from 'react'

export default class AnnexureEAND extends Component{
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
                <td colspan="4" style={{textAlign:"center",border:"1px solid black"}}><b style={{fontSize:"10px",paddingTop:"10px"}}>ANNEXURE - A (BUSINESS CORRESPONDENT AGENT COMMISSION)</b></td></tr>
                <tr style={{border:"1px solid black"}}>
			<th rowspan="2" style={{border:"1px solid black",textAlign:"center"}}>Sl.No.</th>
			<th rowspan="2" style={{border:"1px solid black",textAlign:"center"}}>Particulars</th>
			<th colspan="2"style={{border:"1px solid black",textAlign:"center"}}>Commission Payable per month / per transaction(In Rs.)</th></tr>
			<tr>
			<td  style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>%</td>
			<td  style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>Amount</td>
			</tr>
            			
            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}><b>I</b></td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission based on Active BC Locations</b></td>
			<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>1</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission based on Active BC locations</b><p>BCA must do 200 transactions with 60 Unique Customers and have 22 days login</p></td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.15</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>142.86</td>		
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>II</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission based on Volume (Transaction Amount)</b></td>
				<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>2</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash (withdrawal / transfer) AEPS and Rupay (Transaction amount Rs.100 & Above)
				<ol type="a">
				<li>Upto Rs.10,000/- (Max) Rs.14/-</li>
				<li>From Rs.10,001/- to Rs.15,000/- (Max) Rs.14/-</li>
				<li>From Rs.15,001/- to Rs.20,000/- (Max) Rs.15/-</li>
				</ol>
				</td>
				<td style={{border:"1px solid black",paddingTop:"11px",paddingRight:"10px",paddingLeft:"10px"}}>
				<p>0.56<br/>0.40<br/>0.32</p>
                </td>
				<td style={{border:"1px solid black",paddingTop:"11px",paddingRight:"10px",paddingLeft:"10px"}}>
				<p>11.20<br/>11.20<br/>12.00</p>
				</td>			
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>3</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Deposits into Loan Accounts other than SHG and Deposit Loans (MSME Segment – 
				<br/>Business Enterprise, Retail trade, Professional and Self-Employed Loans,<br/>
				Housing Loans, Education Loans, Agricultural Term Loans., etc) – (Max) Rs.10/-</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.56</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>8.00</td>			
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>4</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash (deposit) AEPS and Rupay (Transaction amount Rs.100 & Above)
				<ol type="a">
				<li>Upto Rs.10,000/- (Max) Rs.14/-</li>
				<li>From Rs.10,001/- to Rs.15,000/- (Max) Rs.14/-</li>
				<li>From Rs.15,001/- to Rs.20,000/- (Max) Rs.15/-</li>
				</ol>
				</td>
				<td style={{border:"1px solid black",paddingTop:"11px",paddingRight:"10px",PaddingLeft:"10px"}}><p>0.56<br/>0.40<br/>0.32</p></td>
				<td style={{border:"1px solid black",paddingTop:"11px"}}><p>11.20<br/>11.20<br/>12.00</p></td>
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>III</b></td>
				<td style={{border:"1px solid black"}}><b>Commission on Self Help Group Transactions</b></td>
				<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>5</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Self Help Group (SHG) Loan Accounts Only<br/>
				Only one transaction per month per group will be considered Scheme Codes for <br/>SHG Loan Accounts ()
				<ol type="a">
				<li>Upto Rs.2,500/- (Max) Rs.05/-</li>
				<li>Upto Rs.2,501/- to Rs.5,000/- (Max) Rs.08/-</li>
				<li>Upto Rs.5,001/- to Rs.10,000/- (Max) Rs.10/-</li>
				<li>Rs.10,001/- and above (Max) Rs.12/-</li>
				</ol>
				</td>
				<td style={{border:"1px solid black",paddingTop:"40px",paddingRight:"10px",paddingLeft:"10px"}}><p>0.20<br/>0.24<br/>0.28<br/>0.32</p></td>
				<td style={{border:"1px solid black",paddingTop:"40px",paddingRight:"10px",paddingLeft:"10px"}}><p>4.00<br/>6.40<br/>8.00<br/>9.60</p></td>
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>IV</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission on Door Step Banking</b></td>
				<td  colspan="2" style={{border:"1px solid black;padding-right:10px",paddingLeft:"10px"}}></td>	
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>6</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Door Step Banking<br/>
				(Only those customers who have been registered in Bank to avail the services)<br/>
				Charges per Visit and successful delivery of Service at Customer Door Step Rs.58/-
				</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>46.40</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>V</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission on Enrolment</b></td>
				<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>
			
			
            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>1.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit below Rs.100/- without Aadhaar</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>2.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit below Rs.100/- with Aadhaar</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>3.20</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>3.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit of Rs.100/- & above but below Rs.500/- without Aadhaar</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>3.20</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>4.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit of Rs.100/- & above but below Rs.500/- with Aadhaar</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>6.40</td>
			</tr>
           
            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>5.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit of Rs.500/- & above without Aadhaar</td>
			<td style={{border:"1px solid black",paddingRight:"10pX",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>6.40</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>6.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit of Rs.500/- & above with Aadhaar</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>9.60</td>
			</tr>

		    <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>7.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account opening with initial deposit of Rs.500/- & above with Aadhaar and mobile capturing</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10pX",paddingLeft:"10px"}}>12.00</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>8.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Opening of RD (Recurring Deposit) Accounts (Min Deposit Rs.50/-)</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>6.40</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
			<td style={{border:"1px solid black",textAlign:"center"}}>9.</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Opening of TDR (Term Deposit Receipt) Max (Rs.20/-)</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.32</td>
			<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>16.00</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>VI</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission on IMPS Cash / Transfer</b></td>
				<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>1.</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>IMPS – UPI (Cash)<br/>
				Upto Rs.2,500/- (Rs.5/-)<br/>
				Rs.2,501/- to Rs.5,000/- - (Rs.10/- per transaction)</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80<br/>0.80</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>4.0<br/>8.0</td>
			</tr>
			
            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>2.</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>IMPS – UPI (Transfer) Upto <br/>
				Rs.2,500/- (Rs.5/-)<br/>
				Rs.2,501/- to Rs.5,000/- - (Rs.10/- per transaction)
				</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.80<br/>0.80</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>4.0<br/>8.0</td>
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>VII</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission on Quarterly Average Balance</b></td>
				<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>


            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Quarterly average balance maintenance fee (each CSP) (Min. 500 no. of <br/>
				accounts)
				<ol type="a">
				<li>For average balance of Rs.1,000/- to Rs.2,500/- (Rs.4/- per<br/>
				account)</li>
				<li>For average balance of Rs.2,501/- to Rs.5,000/- (Rs.6/- per<br/>
				account)</li>
				<li>For average balance of Rs.5,001/- to Rs.10,000/- (Rs.8/- per<br/>
				account)</li>
				<li>For average balance of Rs.10,001/- and above (Rs.10/- per<br/>
				account)</li>
				</ol>
				</td>
				<td style={{border:"1px solid black",paddingTop:"38px",paddingRight:"10pX",paddingLeft:"10px"}}><p>0.80<br/><br/>0.80<br/><br/>0.80<br/><br/>0.80</p></td>
				<td style={{border:"1px solid black",paddingTop:"38px",paddingRight:"10px",paddingLeft:"10px"}}><p>3.20<br/><br/>4.80<br/><br/>6.40<br/><br/>8.00</p></td>
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}><b>VIII</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>Commission on Non-Zero Balance account (each CSP)</b></td>
				<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>	
			</tr>

            <tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Non-zero balance account (each CSP) (Min.300
				<br/>no. of accounts)<br/>
				The CSP should have opened a minimum of 300 accounts in the allotted village every<br/>
				month.
				<ol type="a">
				<li>Less than 85%</li>
				<li>85% and above</li>
				</ol>
				</td>
				<td style={{border:"1px solid black",paddingTop:"55px",paddingRight:"10px",paddingLeft:"10px"}}><p>0<br/>0.80</p></td>
				<td style={{border:"1px solid black",paddingTop:"55px",paddingRight:"10px",paddingLeft:"10px"}}><p>0.80<br/>360.00</p></td>
			</tr>
	



           </tbody>
			</table>
           </div>
    
       )  
    }
}