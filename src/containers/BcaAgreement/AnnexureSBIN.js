import React,{Component} from 'react'

export default class AnnexureSBIN
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
			        <tr style={{border:"1px solid black"}}>
			        <td colspan="3" style={{textAlign:"center"}}><b style={{fontSize:"10px",paddingTop:"10px",paddingLeft:"10px"}}>Commission will be payable 80;20 ratio subject to acceptances of the qualified transactions by the Bank</b></td></tr>
				        <tr style={{border:"1px solid black"}}>
                        <th style={{border:"1px solid black",textAlign:"center"}}><b>S.N.</b></th>
					    <th style={{border:"1px solid black",textAlign:"center"}}><b>Particulars</b></th>
					    <th colspan="2" style={{border:"1px solid black",textAlign:"center"}}>Proposed <br/>Rural/Semi Urban</th>
					    <th style={{border:"1px solid black",textAlign:"center"}}>Proposed <br/>Urban / Metro </th></tr>


                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>1a</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with initial deposit below Rs.100/- without Aadhaar</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with e - KYC:</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>i) Initial deposit ≥ Rs. 1000 -Rs. 22/- per a/c.</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>i) Initial deposit ≥ Rs. 1000 -Rs. 25/- per a/c.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>1b</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with initial deposit below Rs.100/- with Aadhaar</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>(Rationale: Promotee - KYC for operational efficiency)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>ii)	Initial	deposit
							≥	Rs.500	to &lt;
                                Rs. 1000 -Rs. 20/-	
							per a/c.</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>ii)	Initial	deposit
							≥  Rs.500  to  &lt;
                                Rs. 1000
							-Rs. 22/- per a/c.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td rowspan="2" style={{border:"1px solid black",textAlign:"center"}}>1c</td>
						<td rowspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with initial deposit of Rs.100/- & above but below Rs.500/- without Aadhaar</td>
						<td rowspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>iii)Initial	deposit
							≥ Rs.100 to &lt;
                                 Rs. 500
							-Rs. 20/- per a/c.</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>iii)Initial	deposit
							≥  Rs.100  to &lt;
                                 Rs.   500
							- Rs. 22/- per a/c.</td>		
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>iv)	Initial	deposit &lt;
                        Rs.100 	(Including zero balance)
							-Rs. 15/- per a/c.
							</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>iv) Initial deposit &lt;
                        Rs.100 (Including zero balance) -Rs. 17/- per a/c.
						</td>		
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>1d</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with initial deposit of Rs.100/- & above but below Rs.500/- with Aadhaar</td>
						<td rowspan="3" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with OVDs (without e - KYC).</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>i)Initial	deposit ≥  Rs.100  - Rs.10/-per a/c.</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>1.e</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with initial deposit of Rs.500/- & above without Aadhaar</td>
						<td rowspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>ii) Initial deposit &lt;
                            Rs.100 (Including zero balance) -Rs. 5/- per a/c.</td>
						<td rowspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>1.f</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>SB account Opening with initial deposit of Rs.500/- & above without Aadhaar</td>
						</tr> 


                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>2</td>
						<td style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>Opening of RD Accounts(Min. Deposit Rs.50/-)</td>
						<td style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>Opening of RD Accounts Min. Deposit Rs.50/-)</td>
						<td style={{border:"1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 10/- per a/c.</td>
						<td style={{border: "1px solid black",textAlign:"center",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>(Rationale: Instances of closure of RD A/cs after deposit of single instalment observed)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>3</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Opening of STDR<br/>
							(Deposit Min. Rs.1000/- & Max. Rs. 10000/-)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.50% 	of amount<br/>
						deposited (Max.Rs.50/-)<br/>
                        (Deposit Min. 1000/- and maximum of Rs.10000/-
						</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.50% of	amount deposited.<br/>
						(Max. comm. Rs.100/-) <br/>
						Deposit Min Rs.1000/- and Max. Rs.20000/-
                        </td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td rowspan="2" style={{border:"1px solid black",textAlign:"center"}}>4</td>
						<td rowspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash (Transaction Rs.100 & above)Deposit amount</td>
						<td rowspan="2" colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs. 10,000/-: 0.25%<br/>
							Min Rs. 2/- Max Rs. 8/-<br/><br/>
							Rs 10001/- to Rs.15,000/- Rs.10/-<br/>
							Rs.150001/- to Rs.20000/- Rs.12/-
						</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs. 10,000/-: 0.25% Min Rs.2/- Max Rs. 10/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingleft:"10px"}}>Rs.	10,001/- Rs.15,000/-: Rs. 12/-
							Rs. 15,001/- to Rs.20,000/-: Rs. 15/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black ",textAlign:"center"}}>5</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Cash Withdrawal (Transaction amount Rs.100 and above)</td>
						<td  colspan="2"style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs. 10,000/-: 0.50%<br/>
							Min Rs.3/- Max Rs.15/-<br/>
							Rs.10,001/-to Rs. 15,000/-: Rs.17/-<br/>
							Rs.15,001/-to Rs. 20,000/-: Rs.20/-</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs. 10,000/-: 0.50% Min Rs.3/- Max Rs.17/-<br/><br/>
							Rs.	10,001/-	to	Rs. 15,000/-: Rs.20/-<br/>
							Rs.	15,001/-	to	Rs. 20,000/-: Rs.22/-</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td  rowspan="4" style={{border:"1px solid black",textAlign:"center"}}>6</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>emittance	(Cash)	(Non- Home Branch A/Cs)</td>
						<td   colspan="2"style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs. 10,000/-: 0.25% Min Rs. 2/- Max Rs. 8/-</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs. 10,000/-: 0.25%<br/>
							Min Rs.2/- Max Rs. 10/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td   colspan="2"style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 10,001/- to Rs.15,000/-: Rs. 10/-</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 10,001/- to Rs.15,000/- : Rs. 12/-</td>
						</tr>
							
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td   colspan="2"style={{border:"1px solid black",paddingRight:"10px",paddingleft:"10px"}}>Rs. 15,001/- to Rs.20,000/-: Rs. 12/-(No recovery from customers)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 15,001/- to Rs.20,000/-: Rs. 15/-
							(No	recovery from customers)</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td   colspan="2"style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>(Rationale: There is no distinction between
							Home & Non-Home customers. Doing away with recovery from customers will give a boost to migrating customers from Br. To CSPs.)</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>
						   (Rationale: There is no distinction between Home & Non-Home customers. Doing away with recovery from customers will give a boost to migrating customers from Br. To CSPs.)</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td rowspan="3" style={{border:"1px solid black",textAlign:"center"}}>7</td>
						<td rowspan="3"style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Remittance (Transfer) (Home Branch A/Cs)</td>
						<td rowspan="3" colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs.10,000/-: 1% of the amount, Min.Rs.3/-, Max Rs.10/-<br/>
							Rs.10,001/- to Rs.15,000/-: Rs.12/-<br/>
							Rs.15,001/- to Rs.20,000/-: Rs.15/-</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs.10,000/-: 1% of the amount, Min.Rs.3/-, Max Rs.12/-.</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.10,001/- to Rs.15,000/-: Rs.15/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingleft:"10px"}}>Rs.15,001/- to Rs.20,000/-: Rs.17/-</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>8</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Remittance (Transfer) (Non- Home Branch A/Cs)</td>
						<td colspan="2" style={{border: "1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs.10,000/-: 1% of the amount, Min.Rs.3/-, Max Rs.10/-</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Up to Rs.10,000/-: 1% of the amount, Min.Rs.3/-, Max Rs.12/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td rowspan="2" style={{border:"1px solid black",textAlign:"center"}}></td>
						<td rowspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td  colspan="2"style={{border: "1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.10,001/- to Rs.15,000/-: Rs.12/-</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.10,001/- to Rs.15,000/-: Rs. 15/-</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.15,001/- to Rs.20,000/-: Rs.15/-
                        (No recovery from customers)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.15,001/- to Rs.20,000/-: Rs. 17/-
						(No	recovery	from customers)</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td  colspan="2" style={{border: "1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>(Rationale: There is no distinction between
						Home & 	Non-Home customers. Doing away with recovery from customers will give a boost to migrating customers from Br. To CSPs.)</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>(Rationale: There is no distinction between Home & Non-Home customers. Doing away with recovery from customers will give a boost to migrating customers from Br. 
						To CSPs.</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid blacK",textAlign:"center"}}>9.a</td>
						<td style={{border: "1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>IMPS (Cash)
							(Up to Rs.5,000/-)
							(Recovery	from customers: 1.25% of amount remitted, Min. Rs. 24/- & Max. Rs. 100/-)</td>
					    <td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>(Cash up to Rs.10,000/-)
							80% of fee recovered from customers, Minimum – Rs.8/- & Maximum – Rs.35/-</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>
						(Cash up to Rs.10,000/-) 80% of fee recovered from	customers, Minimum – Rs.8/- & Maximum – Rs.40/-
						</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>9.b</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>IMPS (Transfer)
							(up to Rs.20,000/-)
							(Recovery from customers: 1.25% of amount remitted, Min. Rs. 24/- & Max. Rs. 100/-)</td>
						<td colspan="2" style={{border:" 1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>50% of fee recovered from	customers,
							Minimum – Rs.5/- & Maximum – Rs.50/-</td>
						<td  colspan="2"style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>50% of fee recovered from	customers, Minimum – Rs.5/- & Maximum – Rs.60/-</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td rowspan="3" style={{border:"1px solid black",textAlign:"center"}}>10</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Bill	Collection	Service (BBPS)<br/>
							1. Utilities (Electricity, Gas and Water.</td>
						<td  colspan="2" style={{border: "1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>
						i) Up to Rs. 1000/- 80% of CCF earned i.e. Rs. 4/- per	bill<br/>
						ii) Above Rs. 1000/- 80% of CCF earned i.e. Rs. 12/- per bill</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td   style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>2. Telecom (Mobile Prepaid, Mobile:-post- paid, Landline:-Post-paid,
							Broadband Post-paid)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>3.DTH	(Any	amount permissible by biller)</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>1.25% of the bill amount</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban
							Category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td colspan="4" style={{border:"1px solid black",paddinRight:"10px",paddingLeft:"10px"}}>(Recovery from customers: Up-to Rs.1000/- Rs.5/- and above Rs.1000/- Rs.15/- pe bill, NIL for DTH)</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td rowspan="3" style={{border:"1px solid black",textAlign:"center"}}>11</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>a) Rural CSP (Incentive)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.2000/- subject to opening minimum 50 accounts per month or minimum 100 transactions per month or both.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>NAP</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Payment of incentive for all CSPs at LWE / Aspirational districts and State of Sikkim Rs.3000/-per month	as incentive	orthe	actual commission including	Rural Commission payable as per the applicable fee structure for the BCChannel,		whicheveris higher.
							<br/>Condition:<br/>
							CSPs operating in Aspirational Districts (as notified by NITI Ayog, GOI) and in the State of Sikkim are required to undertake a minimum number of 25 transactions during the month.
							Minimum number of transactions is not applicable to LWE districts.
                         </td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>NAP</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border: "1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Payment of incentive for CSPs (other than Urban CSPs) of North	Eastern	States Rs. 4000/- per month as incentive or the actual commission including Rural Commission payable as per the applicable fee structure for the BC Channel, whichever is higher <br/>
						Condition:<br/>
						CSPs operating in North Eastern States (Rural & semi urban) are required to undertake a minimum of 25 transactions
						during the month.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>NAP</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>12</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Weekly average balance maintenance fee (each CSP) (Min. 200 no. of BSBD accounts)</td>
						<td colspan="2"  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>
							i) 1.10% per annum for average balance  &gt; Rs. 2000/-, subject to following conditions:
                       </td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
					<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td colspan="2"  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>i) Balances held in account up to
							Rs.5,00,000/- only will be considered for calculation of incentive against average balance maintenance fee.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
						
					<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td colspan="2"  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>ii) Maximum commission for maintenance of average balance for each CSP will be capped at Rs. 25000/- per month inclusive of GST.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
					
					<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td colspan="2"  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>iii) Minimum no of transactions during the month - RU/SU - 100, UR/Metro – 200.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
					
					<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rationale:<br/>
						i) Average balance in the channel is Rs. 2,523/- per account as on 28.02.2021.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}></td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						<td colspan="2"  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>ii) Only active CSPs to get advantage.</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}></td>
						</tr>
						
                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>13</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Non-zero balance account (each CSP)
						(Min. 200 no. of accounts &	minimum	25
						transactions during the month)</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>NIL<br/><br/>
						Rationale:<br/>
						i) Zero balance accounts as on 28.02.2021 are now only 2% (27.48 lacs a/cs) out of the total no. of 1373 lacs accounts.<br/>
						ii) Incentive is being paid even though SB accounts are opened with zero balance. Further, incentives are also paid on weekly average balance. Commission on non - zero balance accounts is proposed to be done away with on portfolio basis, which will avoid multiple incentivization.</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>14</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Aadhaar seeding (existing account holders)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 5/- per account</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>15</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Mobile	Seeding: (Inputting Valid Contact Number)</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 5/- per account</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>16</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Generating Green PIN for RuPay ATM Cards</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.5/- per PIN reset per Account/ Month (For first time PIN generation)</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>17</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Mini Statement through Micro ATM (Maximum 2 mini statement per account per month)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 2/- per statement</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>18</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Passbook printing</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.5/- per passbook per day.<br/><br/>
						Condition:<br/>
						(Max. 05 times per a/c in a month)</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.6/- per passbook per day.<br/><br/>
							Condition:<br/>
						  (Max. 05 times per a/c in a month)</td>
						</tr>

                       <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>19</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Social Security Scheme<br/>
							a) PMJJBY.<br/>
							b) PMSBY.<br/>
							c) APY.<br/>
							(Premium on enrolment to be collected from customers, as per Annexure -II enclosed)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>a) Rs.30.00/-<br/>
							b) Rs.1.00/-<br/>
							c) Rs.80.00/- to Rs. 100/- (Depending on number of enrolments)<br/>
							(Govt. mandated)</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>20</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Request for issuance of cheque book of 10 leaves (Non FI customers with AEPS)
						(Recovery	from customers: First 10 cheque leaves free in a financial year at branch, thereafter: 10 leaf cheque Book at Rs. 40/- + GST & 25 leaf cheque Book at Rs. 75/- + GST)</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 5/-</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 6/-</td>
						</tr>
                         
						 <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>21</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Request for Stop cheque (Recovery	from customers: Rs. 100/- + GST per instrument maximum Rs. 500/- + GST per instance)</td>
						<td colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs.2/- per instruments - Max. Rs. 5/-</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>

                        <tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>22</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Request for Blocking of (RuPay/ATM) Card</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 2/- per instance</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td style={{border:"1px solid black",textAlign:"center"}}>23</td>
						<td style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>NEFT by transfer up to Rs. 10,000/- (Both FI and Non FI	customers)
							(Recovery from customers: Up to Rs. 10000/-:   Rs.  2/-  +  GST,
							Above Rs. 10000/-: Rs. 4/-
							+ GST)</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Rs. 2/- per transfer</td>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban category</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td rowspan="3" style={{border:"1px solid black",textAlign:"center"}}>24</td>
						<td colspan="3" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Deposit in Loan accounts</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Un - Mapped accounts</td>
						<td   colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.40% Min. Rs.2/-, Max Rs. 10/-</td>
						<td   style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban categoryss</td>
						</tr>
						
						<tr style={{border:"1px solid black"}}>
						<td  style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Mapped accounts</td>
						<td  colspan="2" style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>0.50%	of	collections made/routed by BCs/CSPs</td>
						<td   style={{border:"1px solid black",paddingRight:"10px",paddingLeft:"10px"}}>Same as applicable to Rural/Semi-urban categoryss</td>
						</tr>
                
            </tbody>
			</table>
           </div>
    
       )  
    }
}