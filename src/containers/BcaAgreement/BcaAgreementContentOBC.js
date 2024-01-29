import React,{Component} from 'react'
export default class BcaAgreementContentOBC extends Component{
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
                <b><p style={{textAlign:"center",fontSize:"18px"}}>Business Correspondent Sub-Agency Agreement</p></b> 
                <table style={{fontSize:"15px",width:"100%"}}>
                    <tbody>
                        <tr>
                            <td>Mr./Ms.: <b>{sessionStorage.getItem("empname")}</b> </td>
                        </tr>
                        <tr >
                            <td style={{width:"35%"}}>Village/Ward: {this.state.additionalData.ward}</td>
                            <td style={{width:"31%"}}>Tehsil/Taluk: {this.state.additionalData.taluk} </td>
                            <td style={{width:"34%"}}>District: {this.state.additionalData.district}</td>
                        </tr>
                        <tr>
                            <td>State: {this.state.additionalData.state}</td>
                            <td>PIN Code: {this.state.additionalData.pinCode}</td>
                            <td >Effective Date: {this.state.additionalData.effectiveDate}</td>               
                        </tr>
                        <tr>
                            <td>Mobile No.: {this.state.additionalData.mobile}</td>
                            <td>PAN: {this.state.additionalData.pan}</td>
                            <td>BC ID/KO Code: {this.state.additionalData.bcId}</td>                 
                        </tr>
                        <tr>
                            <td>Bank: {this.state.additionalData.bank}</td>
                            <td>Branch: {this.state.additionalData.branch}</td>
                            <td >BC Location: {this.state.additionalData.bcLocation}</td>                   
                        </tr>
                        <tr>
                            <td >Bank Account for Commission: </td>
                            <td>IFSC: {this.state.additionalData.IFSC1}</td>
                            <td >Account No.: {this.state.additionalData.accountNo1}</td>               
                        </tr>
                        <tr>
                            <td >Bank Account for Settlement:</td>
                            <td>IFSC: {this.state.additionalData.IFSC2}</td>
                            <td >Account No.: {this.state.additionalData.accountNo2}</td>                    
                        </tr>
                    </tbody>
                </table>               
                <br></br>
                <div style={{fontSize:"15px"}}>
                <p>This business correspondent sub-agency agreement 
                    (hereinafter referred to as this “Agreement”) is executed on this <b>{this.state.additionalData.day}</b> day of <b>{this.state.additionalData.month} </b> <b>{this.state.additionalData.year}</b> between:</p>
                <p>Integra Micro Systems Private Limited (CIN: U72200KA1982PTC011338), a company incorporated under the provisions of the Companies Act, 1956,
                    having its registered office at G-5, Swiss Complex, 33, Race Course Road, Bangalore - 560001, hereinafter referred to
                    as the “Company”, which expression shall unless repugnant to the context or meaning thereof, include its subsidiaries, branches, 
                    affiliates, associate companies, successors in office and permitted assignees from time to time, of the First Part;</p>
                <b>And</b>
                <p>Shri/Smt./Kum. <b>{sessionStorage.getItem("empname")}</b>, aged about <b>{this.state.additionalData.age}</b> years (date of birth: <b>{this.state.additionalData.dob}</b>), <b>{this.state.additionalData.relationship}</b>, permanently residing at <b>{this.state.additionalData.address}</b>
                    and having a business outlet at <b>{this.state.additionalData.bcLocation}</b>, hereinafter referred to as the
                    “Service Provider”, which expression shall unless repugnant to the context or meaning thereof, include his/her legal
                    heirs, successors and permitted assignees from time to time, of the Second Part.</p>
                <p>The parties above named are referred to individually as “Party” and collectively as “Parties”.</p>

                <b>WHEREAS</b>
                <ol type="A">
                <li>  The Company provides, inter alia, technology products and services to several banks under the national 
                    financial inclusion (FI) programme.</li>
                <li> The Company has entered into an agreement, hereinafter referred to as the “Bank Agreement”, with <b>{this.state.additionalData.bankFullName}</b>, a body corporate constituted under the <b>{this.state.additionalData.act}</b> Act, having its head office at <b>{this.state.additionalData.bankAddress}</b> (hereinafter referred to as the “Bank”, which expression shall mean and include its successors, executives, administrators, assignees, employees, agents and attorneys etc) to provide business correspondence services (“BC Services”) to meet the financial requirements of the customers of the Bank. The Company will act as an agent of the Bank for the purpose of BC Services.</li>
                <li>The Service Provider wishes to be empanelled as a business correspondent agent (“BCA/Bank Mitra”) and wishes to offer last-mile BC Services to the customers of the Bank as a sub-agent of the Bank in accordance with Section B, page no. 27, of the RBI notification dated 1 July 2014. BC Services offered by a BCA include opening of bank accounts, cash deposits, cash withdrawals, transfer of funds, disbursement, collections, balance enquiries and mini statements, seeding, sale of insurance and pension products, bill payments, deposit/savings/credit mobilization, and business facilitator functions such as recovery and credit lead generation, with a scope for adding other services in the future for customers of the Bank.  The BCA serves in a location, very often in a rural area that might comprise one or more villages, where it is not feasible to have a branch of the Bank, and relies on the usage of technology to carry out the necessary functions. The BCA functions essentially as an entrepreneur for providing BC Services.</li>
                <li>The Service Provider has submitted a filled-in profile, attached as an annexure to this Agreement and forming part and parcel thereof, providing details in support of the Service Provider’s intention to function as a BCA.</li>
                <li>The Company recognizes the Service Provider’s social leadership, geographical and demographic knowledge of the current location, business acumen and experience in people interaction. Moreover, the Company recognizes the advantage of the location of the non-exclusive business outlet offered by the Service Provider for providing BC Services. Consequently, the Company is agreeable to offer the opportunity to the Service Provider as a BCA for the Bank in the BC Location as stated in the preamble (“BC Location”) for delivering BC Services as defined by the BC sub-agent model of the RBI and offered under the Pradhan Mantri Jan-Dhan Yojana (“PMJDY”) of the Govt. of India and other schemes of the Bank.</li>
                <li>The Service Provider is a person with an existing occupation with BC Services as an additional occupation, or is an entrepreneur who intends to invest in business correspondent business for providing BC Services.</li>
                <li>The Business Correspondent (“BC”) business is an evolving field wherein the Government, Banks, Technology Service Providers and/or Corporate Business Correspondents like the Company, BCAs and other associated entities have to deal frequently with changes in technology and also with changes in policies of Government bodies and Banks.  Both the Parties are fully aware of the risks associated with this evolving field and accept the same.</li>
                <li>The Service Provider has been accepted in principle as a BCA by the Company and the Bank, and has opened the necessary commission and settlement accounts as stated in the preamble.</li>
                </ol>
                <b>NOW THIS AGREEMENT WITHNESSTH AS FOLLOWS:</b><br/>
                <b>1. Empanelment of BCA</b>
                <ol type="a">
                <li>The Service Provider has represented to the Company that he/she is willing to offer BC Services at the BC Location using his/her own/leased premises as a customer service point (“CSP/BC Outlet”) at the address specified in the recitals. The Service Provider shall notify the Company and the Bank immediately in case of any change in the address of the BC Outlet. The Service Provider has the requisite skill, expertise, infrastructure and financial capability in providing BC Services to the customers of the Bank, and shall carry out various other functions as provided by the Bank and the Company under this Agreement. The Service Provider is hereby empanelled to carry out BC Services for the Bank as a BCA, following the necessary verification and approval by the Bank.</li>
                <li>The Service Provider has procured the operational infrastructure (desktop, laptop, handheld terminal, MicroATM, PoS, web kiosk, tab, smart phone, pin pad, biometric device, printer etc) as required by the Bank, and has arranged deposits for obtaining overdraft limits for the settlement account from the Bank. The Service Provider has undertaken to make additional investments in order to continually improve customer convenience and experience and as required by the business from time to time.</li>
                </ol>
                <b>2. Term</b>
                   <p>This Agreement shall commence on the Effective Date as stated in the preamble and shall remain in force for a period of twelve (12) months. At the end of this period, the Agreement shall be renewed automatically by a further period of twelve (12) months at a time, unless not renewed explicitly at the end of a period or unless terminated for any reason whatsoever as stated hereinafter under Section 11.</p>
                <b>3. Roles and Responsibilities of the Service Provider</b>
                   <p>The Service Provider shall be bound by the obligations as per the Bank guidelines. The extent of BC Services and associated requirements shall be subject to modifications as per the Bank guidelines issued from time to time.</p>
                   <p>The roles and responsibilities of the Service Provider as a BCA shall consist of the following:</p>
                <ol type="a">
                    <li>The BCA shall carry out BC Services from the BC Outlet.</li>
                    <li>The BC Outlet shall have basic infrastructure with sufficient space to accommodate Bank customers.</li>
                    <li>The BCA shall bear the cost relating to the rent, infrastructure, equipment, electricity charges, Internet charges, travel expenses etc. The Company shall not be responsible for bearing any of these costs nor shall it be responsible for fulfilling any loan/obligations undertaken by the Service Provider in this regard.</li>
                    <li>The BC Outlet shall comply with the norms laid down by the PMJDY and other schemes of the Bank, for example display of information like the signboard in the local language, Company contact particulars, information on products and policies of the Bank etc.</li>
                    <li>Besides operating out of the BC Outlet, the BCA would undertake periodic visits to the associated neighbouring villages/wards to serve customers of the Bank.</li>
                    <li>The BCA shall provide services as stated under PMJDY and such other schemes as defined by the Bank from time to time.</li>
                    <li>The BCA shall offer the services to the customers/potential customers of the Bank keeping in mind the business ethics, value systems, confidentiality of data, security of information, and reputation of the Bank and the Company.</li>
                    <li>The BCA shall provide services to customers without any discrimination based on gender, caste, creed, religion, region, economic status etc.</li>
                    <li>The BCA shall not accept/demand any money from customers for any services in addition to what is stipulated by the Bank.</li>
                    <li>The BCA shall not indulge in any manipulative transaction, either by self or in collusion with others—all transactions must necessarily be carried out in the BCA’s presence and with customer authentication in the customer’s presence and routed through the designated BC machine/device. Additionally, all cash transactions (transactions involving cash deposit, withdrawal, transfer, payment etc) will be carried out only through the designated BC machine/device.</li>
                    <li>Fund management – The BCA shall maintain adequate funds for customer transactions. The BCA shall plan on a daily basis for adequate cash in hand for customer withdrawals and adequate balance in the BCA settlement account for customer cash deposits, especially taking into account events like festivals or disbursal of benefits in the BC Location and banking needs/habits of customers. The BCA shall deposit any net surplus cash in a timely manner at the Bank branch and shall maintain up-to-date balances. The BCA shall return undistributed funds provided to the BCA for disbursement, along with necessary documents, to the Bank branch within the specified period.</li>
                    <li>The BCA shall maintain records of all transactions as required for BC operations. These records can be examined at any time by the Bank or by the Company.</li>
                    <li>The BCA shall invest capital on the BC Outlet to enhance customer experience, increase customer transactions and thereby earn higher commission. The BCA shall invest in infrastructure required for transactions as and when required by the Bank.</li>
                    <li>The BCA understands and agrees that the earnings in terms of commission (the “Commission”) by him/her requires a minimum threshold of work to be carried out regularly. The Bank/Company publishes these thresholds from time to time. The payment of Commission to the BCA is subject to the payment of Commission to the Company by the Bank.</li>
                    <li>The BCA shall carry out all necessary roles, including scouting for customers, popularizing schemes, updating information about the region, carrying out BC Services, planning time of services when needed and visiting places to maximize the Commission and customer loyalty. The BCA shall be prepared to carry out other related transactions including e-mart/electronic commerce as directed by the Bank.</li>
                    <li>The BCA shall strive to achieve customer satisfaction, operational trust, transparency and fulfilment of obligations.</li>
                    <li>The BCA shall attend and participate in meetings as and when called by the Bank/Company officials on the BCA’s own cost.</li>
                    <li>The BCA shall not misbehave with customers/Bank officials/Company officials at any point of time.</li>
                    <li>The BCA shall hold all customer data, financial, commercial, technical and/or all proprietary information relating to the Company and/or the Bank made available to the BCA either orally or in writing or any other information disclosed to the BCA (“Confidential Information”) as strictly confidential. The BCA shall use such Confidential Information only for the authorized purpose as per this Agreement. All customer data (KYC, transactions etc) is deemed confidential. </li>
                    <li>The BCA shall inform immediately the Company or the Bank of any unusual results of any operations and shall not take advantage of such situation. The BCA shall not resort to questionable/fraudulent practices like indulging in splitting, round robin routing, back and forth movement on zero balance accounts, and other forms of accommodative transactions in order to increase his/her Commission.</li>
                    <li>The BCA authorizes the Company to consider the amount of Commission computed by the Bank for the BCA transactions/operations for the month as the Commission amount invoiced by the BCA on the Company for the month. The BCA agrees that the Company shall remit the Commission amount to the BCA Bank Account for Commission as stated in the preamble after deducting appropriate taxes. </li>
                    <li>The BCA is an entrepreneur, whether with or without any other occupation, and is responsible for tax planning, insurance (health/life/BC Outlet/equipment) etc.</li>
                    <li>The BCA undertakes to retire from empanelment automatically if the number of failures to meet minimum service levels in any given time period exceeds the limit specified by the Bank.</li>
                </ol>
                <b>4. Roles and Responsibilities of the Company</b>
                <p>The roles and responsibilities of the Company shall consist of the following:</p>
                <ol type="a">
                    <li>The Company shall provide training to the Service Provider on equipment such as desktop, laptop, handheld terminal, MicroATM, PoS, web kiosk, tab, smart phone, pin pad, biometric device, printer; on operations such as messaging, deposit and withdrawal of funds, mini statements, dispute settlement, grievance registration, remittance, Aadhaar based operations, smartcard and RuPay Card based banking, micro insurance, pension payment, loan recovery, bill payments, and credit lead generation; and on relevant products and services of the Bank.  This training shall be for a short duration and shall be imparted in an easy-to-understand manner. On completion of the training, the Service Provider shall carry out operations based on the policies and practices of the Bank.</li>
                    <li>The Company shall provide training to the Service Provider on new products and services of the Bank as and when they are launched by the Bank. Additionally, the Service Provider can obtain operational clarifications and re-learning of any technical operation any time from the Company’s Remote Operations Centre over the net/phone.</li>
                    <li>The Company shall provide technical support to the Service Provider.</li>
                    <li>The Company shall make every effort to provide up-to-date MIS reports on thresholds, status of operations, any grievances reported by the customers to the Bank/Company, exceptions in operations, and any field observations on compliances made by the Bank or by the Company from the Remote Operations Centre to the Service Provider.</li>
                    <li>The Company shall ensure continuity of BC Services at all locations.</li>
                    <li>The Company shall provide statutory information like Form 16A (the statement of tax applicable for a service provider) to the Service Provider.</li>
                    <li>The Company shall coordinate with the Bank branch, regional offices, head office and IT teams of the Bank for the customer grievance redressal and reconciliations, and/or any other technical/fraud related issues.</li>
                </ol>
                <b>5. Consideration</b>
                <ol type="a">
                    <li>The Service Provider shall be paid the Commission every month, or at intervals determined by the Bank, for the BC Services rendered under this Agreement. The Commission shall be computed based on the criteria laid down by the Bank and on the business the BCA generates for the Bank. The Commission is normally applicable only if minimum service has been carried out (threshold) as defined by the Bank from time to time.</li>
                    <li>The current applicable Commission for BC Services is listed in Annexure A - “Commission for BC Services”. The Bank reserves the right to change the rate of Commission or nature of BC Services from time to time. The latest Commission as notified by the Bank or the Company shall be deemed as suitable amendment to Annexure A wherever applicable, and shall be effective without any need for amendment of this Agreement.</li>
                    <li>The Service Provider hereby agrees that the BC Services are a business operation wherein the Service Provider can make losses if he/she has a BCA fails to: (i) build/expand the customer base; (ii) improve customer relations; (iii) provide services when and where needed as already stated hereinabove under Section 3; or for any other reason that results in inadequate Commission.</li>
                    <li>It is understood and agreed by both the Parties that the rate of Commission for an operation is decided by the Bank and might undergo change from time to time.</li>
                    <li>The Company shall not be held responsible nor shall the Service Provider claim payment for any unauthorized transactions/operations by the Service Provider and any associated loss shall be borne by the Service Provider.</li>
                    <li>The total Commission to which the Service Provider is entitled will be applicable once the Bank has verified and validated the transactions. The Bank normally calculates the Commission on monthly basis. The amount will be transferred to the BCA Bank Account for Commission as stated in the preamble once the Company receives the payment from the Bank.</li>
                    <li>All applicable taxes/duties and other charges which may be levied from time to time shall be borne by the Service Provider and the Company shall not be liable for the same.</li>
                    <li>The Company shall deduct any applicable taxes at source from payments made to the Service Provider. Details of financial transactions and deductions shall be made available by the Company to the Service Provider as and when required.</li>

                </ol>
                <b>6. Relationship Between the Parties</b>
                <p>The relationship between the Company and the Service Provider is on a principal-to-principal basis, with the limited application of commission agent-to-commission sub-agent, with the Bank as the principal for the purpose of BC Services. The engagement of the Service Provider as a BCA by the Company is based on this relationship. The engagement does not imply any type of employer-employee relationship between the Company and the Service Provider, either in the present or in the future. Consequently, the Service Provider is not eligible for any employee benefits from the Company either in the present or in the future.</p>
                <b>7. Compliance of Laws by the Service Provider</b>
                <p>The Service Provider being a business owner shall be responsible for the necessary compliances like the shop and commercial establishment registration, GST registration, professional tax registration, income tax filing and compliance of other applicable laws.</p>
                <b>8. Indemnification</b>
                <p>The Service Provider shall indemnify, defend and hold the Company and the Bank harmless from any loss or damage and/or claims by third parties for personal injury or property damage caused by the Service Provider’s negligent or fraudulent act, omission or willful misconduct while rendering the BC Services under this Agreement.</p>
                <p>Without prejudice to its other rights, the Company reserves the right to set off or adjust dues or loss suffered by it on account of breach or non-compliance of the terms of this Agreement by the Service Provider, from any deposit amount placed by the Service Provider with the Company.</p>
                <b>9. Limitation of Liability</b>
                <p>Notwithstanding anything to the contrary elsewhere in this Agreement, neither Party shall be liable for any indirect, incidental, special or consequential damages in connection with this Agreement, however caused, whether based on contract, tort, warranty or other legal theory, and whether or not informed of possibility of such damages.</p>
                <b>10. Injunctive Relief</b>
                <p>The obligations of the Service Provider as a BCA under this Agreement are of a unique character that gives them particular value. A breach of any of such obligations by the Service Provider shall result in irreparable and continuing damage to the Company for which there shall be no adequate remedy at law, and in the event of such breach, the Company shall be entitled to injunctive relief and/or a decree for specific performance, and such other and further relief as may be proper (including monetary damages if appropriate).</p>
                <b>11. Termination of Agreement</b>
                <p>This Agreement may be terminated by mutual consent by either Party by providing seven (7) days’ prior notice in writing to the other.</p>
                <p>The Company may terminate the Agreement with immediate effect and take appropriate legal action against the Service Provider, including recovery of damages, for the following acts/omissions on the part of the Service Provider:</p>
                <ol type="a">
                    <li>Breach of the basic trust/terms/values/confidentiality/security of the banking system.</li>
                    <li>Violation of norms/policies of the Bank and the Company.</li>
                    <li>Determination of fraud, dishonesty, misconduct, misappropriation of monies etc.</li>
                    <li>Any false representation by the Service Provider in character declarations, self-declarations/certificates made in order to enter into this Agreement or made during the period of this Agreement.</li>
                    <li>Material breach of any provision of this Agreement.</li>
                    <li>Violation of any laws.</li>
                    <li>Inability to meet compliance requirements on qualification (eg IIBF or any other certificate) or committed minimum investment.</li>
                </ol>
                <p>The Company may, at its sole discretion, terminate this Agreement by providing seven (7) days’ prior notice in writing to the Service Provider in case the Service Provider does not meet the threshold Commission consistently for three (3) months while all other parameters such as functioning of equipment and support have been normal.</p>
                <p>Further, this Agreement shall stand automatically terminated, with the notice period as stipulated by the Bank, in case the Bank terminates the Bank Agreement executed between the Bank and the Company or in case the Bank withdraws the BC Location.</p>
                <p>In the event of termination, the Service Provider hereby agrees to return all assets belonging to the Company and/or the Bank after ensuring that all financial accounting is duly completed.</p>
                <p>The provisions of confidentiality, liability, indemnity and any other provision which by its very nature survives this Agreement shall remain valid even after the termination of this Agreement.</p>
            
                <b>12. No Assignment</b>
                <p>The Service Provider hereby agrees and confirms that the benefits under this Agreement shall not be assignable to any other person as the role of the Service Provider as a BCA requires the BCA to authenticate transactions, by biometrics or otherwise, and maintain confidentiality of data.</p>
                <b>13. Dispute Resolution and Jurisdiction</b>
                <p>The Parties shall make every effort to resolve any dispute arising between the Parties under this Agreement amicably by direct informal negotiation within ten (10) working days of such communication to the other. Either Party may refer such dispute for resolution to the Arbitration Centre – Karnataka (Domestic and International) in accordance with the Arbitration and Conciliation Act, 1996. The arbitration proceedings shall be in English language.</p>
                <p>The laws of India shall govern this Agreement and the courts at Bangalore shall have the exclusive jurisdiction over any dispute arising out of this Agreement.</p>
                <b>14. Complete and Exclusive Agreement</b>
                <p>This Agreement constitutes the complete and exclusive understanding and agreement between the Parties and supersedes all prior understandings and agreements, whether written or oral, with respect to the subject matter hereof.</p>
                
                <b>15. Headings</b>
                <p>Headings in this Agreement are for convenience only and do not affect the interpretation of this Agreement.</p>            
                <p>The Service Provider agrees that all the above terms and conditions have been explained to him/her in the Service Provider’s local language and the Service Provider has understood the same. Any disputes in this regard may refer only to this Agreement.</p><br/>
                <p>IN WITNESS WHEREOF, the Parties have caused this Agreement to be executed as indicated below and it is effective as of the Effective Date stated in the preamble.</p>
                </div>
                <table  style={{fontSize:"15px",borderCollapse: "collapse",width:"100%"}}>
                    <tbody>
                        <tr>
                            <td><b>Integra Micro Systems Private Limited</b></td>
                            <td><b>Service Provider</b></td>
                        </tr>
                        <tr >
                            <td style={{border:"1px solid black", height:"70px",width:"50%"}}>Signature:</td>    
                            <td style={{border:"1px solid black", height:"70px"}}>Signature:</td>     
                        </tr>                  
                        <tr>
                            <td>Name:</td>                       
                            <td>Name: <b>{sessionStorage.getItem("empname")}</b></td>                      
                        </tr>
                        <tr>      
                            <td>Designation: </td>                       
                            <td>Designation: <b>BUSINESS CORRESPONDENT SUB-AGENT</b></td>                       
                        </tr>
                        <tr>
                            <td>Witness:</td>                       
                            <td>Witness:</td>                      
                        </tr>
                        <tr>                        
                            <td style={{border:"1px solid black", height:"70px"}}>Signature:</td>                        
                            <td style={{border:"1px solid black", height:"70px"}}>Signature:</td>                        
                        </tr>
                        <tr>                       
                            <td>Name:</td>                      
                            <td>Name:</td>                      
                        </tr>
                        <tr>                    
                            <td>Address: </td>                      
                            <td>Address: </td>                       
                        </tr>
                    </tbody>
                </table> 
                <br/><br/>		
                <b>Annexure A</b><br/>
                <b>TableA-Commission payable to BCA for providing  Specified Services:</b>
			<table style={{fontSize:"15px",borderCollapse:"collapse",width:"100%",border:"1px solid black"}}>
			<tbody style={{border:"1px solid black"}}>
			<tr style={{border:"1px solid black",backgroundColor:"gray"}}>
			<th style={{border:"1px solid black",textAlign:"center"}}>Sl.No.</th>
			<th style={{border:"1px solid black",textAlign:"center"}}>Specified Services</th>
			<th style={{border:"1px solid black",textAlign:"center"}}>Commission Payable</th>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>1</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Opening of BSBDA Account/Normal Saving Bank Account</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Rs. 16/- per account</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>2</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Opening of current account</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Rs. 24/- per account</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>3</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Mobilization of Term Deposit accounts
(Cap on business/Commission: Reserve Bank has expressly prohibited sourcing of Bulk deposits, NRE/NRO/FCNR (B) deposits, and deposit from Public Sector Companies/Government Departments by this channel.)</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>0.20% of the deposit mobilized or maximum Rs. 800/- per customer at a time with a balance not below Rs. 1000/- for a period not less than six months</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>4</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Cancellation of Term Deposit</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>The incentive paid to the BCA will be recovered if cancelled before completion of 6 months</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>5</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Opening of Recurring Deposit (Not less than one year)</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Same in case of Term Deposit with a minimum installment not below Rs. 10/-</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>6</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}><b>Loan Products</b>
					Collection and preliminary processing of loan applications as per bank norms including verification of primary information data.
					Disbursal of small value credit upto Rs. 25000/- per borrower.
					One time commission shall be paid on disbursement of all types of loans up to sanctioned limit.
					In case of CC/OD further commission shall be paid for disbursement at the time of renewal/enhancement only</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}> <b>i) Sanction Limit upto Rs. 10,000/-</b>
						Not exceeding 0.60% of the limit sanctioned subject to a minimum of Rs. 20/- and maximum of Rs. 60/- after disbursement.
						<b>ii) Sanction Limit above Rs. 10,000/-</b>
						Not exceeding 0.40% of the limit sanctioned subject to a minimum of Rs. 40/- and maximum of Rs. 100/- after disbursement.</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>7</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Recovery of OGC/OKGC/OD to farmers etc under SMA category (interest more than 2 half year overdue)
					i) Loan upto Rs. 2.00 lakh
					ii) Loan above Rs. 2.00 lakh
				</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Rs. 80/- per account on recovery of entire overdue amount subject to rollover.
                   Rs. 160/- per account on recovery of entire overdue amount subject to rollover.
				</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>8</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Recovery made in Sub-Standard and Doubtful accounts</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Not exceeding 0.40% of the amount recovered</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>9</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Recovery in written off accounts</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>8% of amount recovered</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>10</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Conducting survey assigned by Bank</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Not exceeding Rs. 4/- per household surveyed</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>11</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Opening of SHG-Savings Account, when SHG formed by others</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Not exceeding Rs. 40/- per account opened</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>12</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Sale of micro insurance/mutual fund/pension products/third party products</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Not exceeding 20% of the commission earned by the Bank

					PMJJBY - Rs. 24/- (including service tax) per enrolment
					PMSBY - Rs. 0.80/- per enrolment
					APY - Rs. 40/- per enrolment</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>13</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Holding of credit camp/counseling services attended by at least 25 persons</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Not exceeding Rs. 160/- per camp/meeting</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>14</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Promotion, nurturing and Bank linkage (credit linkage) of SHGs and Joint Liability Groups

					(a) For stationery and overhead expenses after saving linkage of SHG
					(b) 4 months after saving linkage of SHG or on rating, whichever is later
					(c) Immediately after credit linkage of SHG</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Not exceeding Rs. 2400/- per SHG formed and credit linked with the Bank in stages

					Rs. 800/-

					Rs. 800/-

					Rs. 800/-
				</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>15</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Receipt and delivery of small value remittances/other payment instruments (up to Rs. 10,000/- per remittance/instrument)</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>0.50% of amount with maximum of Rs. 15/- per transaction

					As per existing Bank’s guidelines Cash Remittance up to Rs. 1,00,000/- is free from Savings account under ABB (Anywhere Branch Banking) charges
				</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>16</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Collection of Cheques</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Rs. 5/- per cheque</td>
			</tr>
			<tr style={{border:"1px solid black"}} >
				<td style={{border:"1px solid black",textAlign:"center"}}>17</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Aadhaar Seeding in existing saving bank accounts through Micro ATM or submitting Aadhaar details in branches for seeding</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Rs. 8/- per Aadhaar seeding</td>
			</tr>
			</tbody>
			</table>
			<b>Table B</b><br/>
            <b>Additional Compensation to BCA:</b>
			<table style={{fontSize:"16px",borderCollapse:"collapse",width:"100%"}}>
			<tbody>
			<tr style={{border:"1px solid black",backgroundColor:"gray"}}>
				<th style={{border:"1px solid black",textAlign:"center"}}>Sl. No.</th>
				<th style={{border:"1px solid black",textAlign:"center"}}>Component</th>
				<th style={{border:"1px solid black",textAlign:"center"}}>Commission Payable Every Month</th>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>1</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Fixed Component (Compensation to all active BCAs engaged as BF subject to threshold defined by the Bank)</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Rs. 3500/-</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>2</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Variable Component Transaction based
					No. of transaction by BCA during the month 
					Upto 50
					51 to 100
					101 to 300
					Above 300
				</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Nil
					Rs. 500/-
					Rs. 1000/-
					Rs. 1500/-
				</td>
			</tr>
			<tr style={{border:"1px solid black"}}>
				<td style={{border:"1px solid black",textAlign:"center"}}>3</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>Cash Component: Cash in/Cash out commission - Per transaction charges (% of transaction values upto two decimals places)</td>
				<td style={{border:"1px solid black",paddingLeft:"10px",paddingRight:"10px"}}>As directed by Bank ranging from 0.07% to 0.28%</td>
			</tr>		
			</tbody>					
			</table>
			<br/>
        </div>
       )  
    }
}
