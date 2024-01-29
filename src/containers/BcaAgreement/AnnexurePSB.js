import React, { Component } from "react";

export default class AnnexurePSB extends Component {
    constructor() {
        super();
        var data = sessionStorage.getItem("additionalData");
        this.state = {
            additionalData: JSON.parse(data),
            arr: sessionStorage.getItem("langCode"),
            selectedlang: "ENG",
        };
    }

    render() {
        return (
            <div style={{ fontFamily: "Times New Roman" }}>
                <p style={{ textAlign: "center" }}>
                    <b style={{ fontSize: "14px", paddingTop: "10px" }}>
                        Annexure A - Commission for BCA Services
                    </b>
                </p>

                <table
                    style={{
                        fontSize: "15px",
                        borderCollapse: "collapse",
                        width: "100%",
                        border: "1px solid black",
                    }}
                >


                    <tbody>
                        <tr style={{ border: "1px solid black" }}>
                            <th
                                style={{ border: "1px solid black", textAlign: "center" }}
                            >
                                <b>Sl.No.</b>
                            </th>

                            <th
                                style={{ border: "1px solid black", textAlign: "center" }}
                            >
                                <b>Parameters</b>
                            </th>
                            <th
                                style={{ border: "1px solid black", textAlign: "center" }}
                            >
                                <b>Commission to BCA</b>
                            </th>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                1.1
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                Conditional Initial Commission<br></br>
                                (Generally referred Fixed Monthly Income, though not fixed).
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <ol start="1">
                                    <li>
                                        BCA who login Minimum 20 days and perform at least 200 transactions in a month
                                    </li>
                                    <p>a. Rs.5,000/- to BCA (Additional Rs.400/- for Hilly Areas/Naxalite/LWE etc., area or any other tough area identified by the Bank)</p>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                1.1
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                Conditional Initial Commission<br></br>
                                (Generally referred Fixed Monthly Income, though not fixed).
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>

                                <ol start="2">
                                    <li>
                                        Others:
                                    </li>
                                    <p>a. Rs.3,500/- to BCAs (Additional Rs.400/- for Hilly Area/Naxalite/LWE etc., areas or any other tough area identified by the bank.</p>
                                    <li>
                                        No Fixed payment to CBC/BCA for BCAs who login less than 10 days or perform less than 100 transactions in a month
                                    </li>
                                    <p>(BCAs who are not logged on for more than 20 days due to some verifiable technical reasons such as Hardware, Software, or Networking issue to get the fixed remuneration after satisfaction of the bank)</p>
                                </ol>
                            </td>
                        </tr>


                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                1.2
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                Conditional Initial Commission<br></br>
                                (Generally referred Fixed Monthly Income, though not fixed).
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                For Those BCAs who will work offline till they are onboarded into Integra's FIG solution.
                                <ol start="1">
                                    <li>
                                        BCA Who source at least a total business (sourcing of advances/deposit/recovery in NPA accounts of Rs.5 lacs per month and sources CASA with minimum balance requirements as per the bank Scheme:
                                    </li>
                                    <p>a. Rs.5,000/- to BCA (Additional Rs.400/- for Hilly Areas/Naxalite/LWE etc., area or any other tough area identified by the Bank)</p>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                1.2
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                Conditional Initial Commission<br></br>
                                (Generally referred Fixed Monthly Income, though not fixed).
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <ol start="2">
                                    <li>
                                        Others:
                                    </li>
                                    <p>Rs.3,500/- to BCAs (Additional Rs.400/- for Hilly Area/Naxalite/LWE etc., areas or any other tough area identified by the bank.</p>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                1.2
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} >
                                Conditional Initial Commission<br></br>
                                (Generally referred Fixed Monthly Income, though not fixed).
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <ol start="3">
                                    <li>
                                        No Fixed Payment to BCA who source business less than Rs.2.00 lacs per month or do not source any CASA
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Variable Components (80% of the commission)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Commission Sharing Ratio
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.1
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                New Saving PMJDY/BSBD/Account Opening (with minimum balance requirements as per Bank’s schemes)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <ol start="1">
                                    <li>
                                        No. of accounts opened/sourced up to 10: Rs. 8 Per account;
                                    </li>
                                    <li>
                                        No. Of accounts opened/sourced between 11 to 20; Rs. 12 per account
                                    </li>
                                    <li>
                                        No. Of accounts opened/sourced more than 20; Rs. 20 per account
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.2
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                New Current Account Enrolment/Sourcing (with minimum balance requirements as per Bank’s schemes)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <ol start="1">
                                    <li>
                                        No. of accounts opened/sourced up to 2 a/cs; Rs. 32 per account.
                                    </li>
                                    <li>
                                        No. Of accounts opened/sourced more than 2 a/cs; Rs. 40 per account
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.3
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Mobilisation of Fixed Deposit
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Mobilization of Fixed Deposit accounts for a period not less than 6 months
                                <ol start="1">
                                    <li>
                                        FDR Amt up to Rs. 10,000 - Rs. 16 per a/c.
                                    </li>
                                    <li>
                                        FDR Amt more than Rs. 10,000 up to Rs. 50,000 - Rs. 24 per a/c
                                    </li>
                                    <li>
                                        FDR Amt more than Rs. 50,000 - Rs. 80 per a/c
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.4
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Mobilisation of Recurring Deposit
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Minimum period of deposit - 1 year
                                Upto 5 accounts per month - Rs. 12 per a/c
                                More than 5 accounts per month - Rs. 20 per a/c
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.5
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Mobilization / Sourcing of Retail and Priority Sector Loan Accounts/ KCC/ GCC/ Stand-up India/ PM Svanidhi/ Mudra/ other upcoming Govt. Loan Schemes etc.
                                (Collection and preliminary processing of loan applications, Field Inspection including verification of primary information/ data, submission of application to Bank and leading to sanction and disbursal)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <ol start="1">
                                    <li>
                                        Housing Loan - 0.40% of loan amount mobilized (leading to sanction & disbursal) or Rs. 8000 whichever is lower: Min Rs. 400;
                                    </li>
                                    <li>
                                        Vehicle Loan - 0.40% of loan amount mobilized (leading to sanction & disbursal) or Rs. 4,000 whichever is lower: Min Rs. 400;
                                    </li>
                                    <li>
                                        Gold Loan - 0.40% of loan amount mobilized (leading to sanction & disbursal) or Rs. 2,000 whichever is lower; Min Rs. 400;
                                    </li>
                                    <li>
                                        MSME Loan (Other than Mudra Loan) - 0.40% of loan amount mobilized (leading to sanction & disbursal) or Rs. 8,000 whichever is lower: Min Rs. 400;
                                    </li>
                                    <li>
                                        Other Loans - 0.40% of loan amount mobilized (leading to sanction & disbursal) or Rs. 4,000 whichever is lower: min Rs. 200
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} rowspan="4">
                                2.6
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Recovery in:-
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                1. NPA Accounts (Sub Standard A/c)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                0.4% of cash recovery amount or Rs. 4,000 whichever is lower for recovery not leading to upgradation.
                                0.8% of cash recovery amount or Rs. 8,000 whichever is lower for recovery leading to upgradation.
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2. Doubtful accounts
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                1.6% of cash recovery amount or Rs. 12,000 whichever is lower;
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                3. TWO accounts
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.4% of cash recovery amount or Rs. 16,000 whichever is lower;
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.7
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Holding of credit camp/counselling services attended by at least 20 persons
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 400 per camp/ counselling
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }} rowspan="4">
                                2.8
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Sale of micro insurance/ mutual fund/ pension products/ third party products.
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                i. PMJJBY (per enrolment/renewal)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 24 per enrolment; Rs. 3 per renewal
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                ii. PMSBY (per enrolment)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Re. 0.8 per enrolment
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                iii. APY (per enrolment/renewal)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 48 per enrolment; Rs. 8 per renewal
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.9
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Aadhaar/ Mobile/ Email seeding in existing accounts through or submitting Aadhaar details in branches for seeding
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per seeding
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                2.10
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Receipt and delivery of small value remittances/ other payment instruments/ Fund Transfer (for value Rs. 1,000/- and above per remittance/ instrument/ fund transfer)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Fund tx- AEPS 0.4% of Txn amount, Max Rs. 8/- per Txn
                                NEFT/IMPS - 0.20% of amount; Max Rs. 8 (only a/c to a/c txn)
                                Only successful transactions to be considered. Following txns not to be considered:

                                <ol type="a">
                                    <li>
                                        Txn of staff account
                                    </li>
                                    <li>
                                        BCA to BCA account deposit/withdrawal
                                    </li>
                                    <li>
                                        Split/round tripped transactions expect for  first transaction
                                    </li>
                                </ol>

                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.11</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Cash Deposit/Withdrawal
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                <text style={{ color: "red" }}>*0.60% </text>
                                of txn amt: Subject to min Rs. 8 per txn and Max Rs. 32 per a/c per day: Minimum txn of at least Rs. 400; Also Subject to per txn amount limit and per day txn amount limit set from time to time. Only successful transactions to be considered. Following txns not to be considered:
                                <ol type="a">
                                    <li>Txn of staff account</li>
                                    <li>BCA to BCA account deposit/withdrawal</li>
                                    <li>Split/round tripped transactions except for the first transaction</li>
                                </ol>
                                <text style={{ color: "red" }}>
                                    *For the initial period to boost more business and to enable a smoother migration of existing BCAs. The commission percentage may be reduced to 0.32% to 0.48% after 3-4 months of Go-Live
                                </text>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.12</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Collection of Cheques
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per cheque
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.13</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Passbook Printing
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per customer ID per day
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.14</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                BBPS (Bharat Bill Payment System)
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per bill successfully processed
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.15</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Pension life certificate auth through Jeevan Pramaan
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 8 per successful submission
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.16</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Request new cheque book
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per a/c
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.17</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Stop payment of cheque
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per cheque
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.18</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Apply for rupay card
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 4 per card
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.19</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Block rupay card
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Rs. 1.6 per card
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.20</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                General/Life/Health Insurance
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Max 8% of the commission earned by Bank; Min Rs. 400: Max Rs. 2,000
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>2.21</td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Target based incentives/ Other incentives
                            </td>
                            <td style={{ border: '1px solid black', textAlign: 'left' }}>
                                Subject to change from time to time
                            </td>
                        </tr>
                    </tbody>





                </table >
                <br />



            </div >












        )


    }
}
