import { Dropdown } from 'bootstrap';
import React,{Component} from 'react'

export default class AnnexureUBIN extends Component{
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
                <td colspan="6" style={{textAlign:"center"}}><b style={{fontSize:"10px",paddingTop:"10px"}}>ANNEXURE - A (BUSINESS CORRESPONDENT AGENT COMMISSION)</b></td></tr>
			<tr style={{border:"1px solid black"}}>
                <td colspan="6"><b style={{fontSize:"10px",paddingTop:"10px",paddingLeft:"10px"}}>UNION BANK OF INDIA</b></td></tr>
			<tr style={{border:"1px solid black"}}>
			<th style={{border:"1px solid black"}}></th>
			<th style={{border:"1px solid black",textAlign:"center"}}>Particulars</th>
			<th style={{border:"1px solid black",textAlign:"center"}}>Criteria</th>
			<th style={{border:"1px solid black",textAlign:"center"}}>SSA</th>
			<th style={{border:"1px solid black",textAlign:"center"}}>Non SSA /Digital Points/Urban Wards</th>
			<th style={{border:"1px solid black",textAlign:"center"}}>Remarks</th>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Threshold level Fixed Incentive charges only for SSA locations</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Subject to Minimum 100  qualified Transactions in a month</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>2250</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Nil</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Only for SSA Point</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>A/c Opening thru e-KYC only</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.20/- for Opening of account thru e-KYC only, subject to Minimum 10 accounts Per month ( Except North east states)</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>14</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>14</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			<tr style={{border:"1px solid black"}}>
			    <td rowspan="3" style={{border:"1px solid black"}}></td>
				<td rowspan="3" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Transaction Charges:</td>
				<td colspan="3" style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>(0.40% of Transactions amount with a cap of Maximum of Rs.30/- per Txn)</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
            </tr>
			<tr style={{border:"1px solid black"}}>
			    <td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Upto Rs.20 Lacs Txns amount per Bank Mitr per month</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>80%</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>70%</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
            </tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>&gt;Rs.20 Lacs Txns amount</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>70%</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>70%</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Recurring Deposit A/c opening</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.5/- per account subject to Maximum Rs.25/- per Customer ID at a time ( Minimum 5 A/cs to qualify for payment)</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>4</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>4</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Minimum 5 accounts to qualify for payment</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Fixed Deposit Account Opening</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.5/- per account</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>4</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>4</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Canvassing of Retails Loans / KCC/GCC</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.5% of Loan amount subject to maximum of Rs.500 per Loan Proposal</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.4%</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.4%</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Payable on First Disbursement</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
			    <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}><b>3rd Party Products</b></td>
				<td colspan="3" style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}><b>Minimum 15 numbers of 3rd party products per month to qualify for payment)</b></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Atal Pension Yojana (APY)</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.100/- per APY funded account at present</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>80</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>80</td>
				<td rowspan="3" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Products Specific commission as approved by the Bank. Subject to change</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>PMJJBY enrolment</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.30/-( Pro-rata basis as per the premium received for No. of quarters, Rs.7.50 per quarter</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>24</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>24</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>PMSBY enrolment</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.1/- per account</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.8</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.8</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Remuneration may be changed as per Bank's discretion at regular intervals/review.</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			<tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>For payment of remuneration to Bank Mitrs, Escrow mechanism will be adopted.</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			<tr style={{border:"1px solid black"}}>
			    <td style={{border:"1px solid black"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>All payments are subject to GST or any other taxes as per extant guidelines.</td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
				<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
			</tr>
			</tbody>
			</table>
			<br/>
        </div>
    
       )  
    }
}
