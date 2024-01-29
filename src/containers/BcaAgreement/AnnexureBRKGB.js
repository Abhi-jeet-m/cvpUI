import React, { Component } from "react";

export default class AnnexureBRKGB extends Component {
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


                    <tbody style={{ border: "1px solid black" }}>
                        <tr style={{ border: "1px solid black" }}>
                            <th
                                style={{ border: "1px solid black", textAlign: "center" }}
                            >
                                <b>Activity</b>
                            </th>

                            <th
                                style={{ border: "1px solid black", textAlign: "center" }}
                            >
                                <b>BCA PORTION</b>
                            </th>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowspan="2">Opening of savings bank account under
                                eKYC</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs. 8/- per account, if not funded immediately
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Rs. 16/- per account, if funded immediately</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Opening of Recurring Deposit account</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Rs. 8 per account</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Opening of Fixed Deposit Account</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.08% of deposit amount; (Min. Re.0.80 & Max of
                                Rs.16/-per a/c)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}><b>Cash Deposit:</b></td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}></td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Cash Deposit Other than AEPS</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.32% of the Amount; (Min. Re.0.80 & Max of Rs
                                16/- per transaction)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Cash Deposit (AEPS on-us)</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.32% of the Amount; (Min. Re. 0.80 & Max of Rs
                                20/- per transaction)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Cash deposit (using Rupay Card and AEPS off-us)
                            </td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.32% of the Amount; (Min. Re. 0.80 & Max of Rs
                                20/- per transaction)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}><b>Cash Withdrawal:</b></td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}></td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Cash withdrawal other than AEPS</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.32% of the Amount; (Min. Re.0.80 & Max of Rs
                                16/- per transaction)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Cash withdrawal (using AEPS on-us & Rupay card
                                on-us)</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.32% of the Amount; (Min. Re.0.80 & Max of Rs
                                16/- per transaction)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Cash withdrawal (using AEPS off-us & Rupay Card
                                off-us)</td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>0.32% of the Amount; (Min. Re.0.80 & Max of Rs
                                16/- per transaction)</td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Remittance/Fund transfer within Bank and outside the Bank with Aadhaar Number
                            </td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                0.08% of the amount; (Min Rs 0.80/ - & Max Rs 8/ - per transaction)
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Mobile Seeding
                            </td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs. 2.4/- per account
                            </td>
                        </tr>


                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Aadhaar Seeding/authentication
                            </td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs. 2.4/- per account duly verified by branch in CBS
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowspan="5">
                                PMJJBY for fresh online enrolment
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                I Qtr - 24 per policy
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                II Qtr - 18 per policy
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                III Qtr - 12 per policy
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                IV Qtr - 6 per policy
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                PMSBY (for fresh online enrolment)
                            </td>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs. 0.80/- per policy
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowSpan={3}>
                                APY (for fresh online enrolment)
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs 24/- per APY, if 5 APY enrolled during month
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs 40/- per APY, if more than 5 APY enrolled during month
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowspan="7">
                                Incentive payable to BC for mobilization of SB
                                Deposits<br />
                                <ol start="1">

                                    <li >BC maintains at least 500 accounts</li>
                                    <li>At least 85% of accounts opened by the BC are funded</li>
                                    <li>Base year for calculation of Incentive – 31-10-2020</li>
                                </ol>

                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Growth in Average daily balance after 31-10-2020 (% Incentive Rate)
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Till Rs 5 lac - 0.08% Annually
                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs.5 lac to Rs.10 lac - 0.12% Annually
                            </td>

                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs.10 lac to Rs,15 lac - 0.16% Annually
                            </td>

                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Rs.15 lac to Rs,25 lac - 0.24% Annually
                            </td>

                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                Above Rs.25 lac - 0.32% Annually
                            </td>

                        </tr>



                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowspan="5">
                                Commission for Recovery in Loan Accounts
                                <ol type="A">
                                    <li >Cash Recovery in NPA Accounts (Doubtful Category) </li>
                                    <li> Cash Recovery in NPA Accounts (Loss Category)</li>
                                    <li> Cash Recovery in Written off Accounts</li>
                                </ol>

                            </td>

                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                <br />
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                1.6% of recovered amount
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                4% of recovered amount
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                8% of recovered amount
                            </td>
                        </tr>




                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowspan="5">
                                Incentive for Transaction in SHG Accounts via Dual
                                Authentication<br />
                                <ol type="A">
                                    <li > Cash Deposit</li>
                                    <li>Cash Withdrawal</li>
                                    <li> Fund Transfer</li>
                                </ol>

                            </td>

                        </tr>


                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                <br />
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                0.32% of cash deposit (Min Rs. 0.80/- & Max of Rs 20/-)
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                0.32% of cash Withdrawal (Min Rs 0.80/- & Max of Rs 20/-)
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                0.16% of cash deposit (Min Rs 0.80/- & Max of Rs 8/-)
                            </td>
                        </tr>







                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }} rowspan="5">
                                Commission on Renewal of Micro Insurance
                                (PMJJBY/PMSBY) and APY<br />
                                <ol type="A">
                                    <li >PMSBY Auto renewal</li>
                                    <li> PMJJBY Auto renewal</li>
                                    <li>APY Persistency</li>
                                </ol>

                            </td>

                        </tr>


                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>
                                <br />
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Rs. 0.40/- per annual renewal
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Rs. 3.2/- per annual renewal
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid black", textAlign: "left" }}>Rs. 8/-, if APY persistent for ONE YEAR
                            </td>
                        </tr>

                    </tbody>
                </table>
                <br />

                <div style={{ fontSize: "14px" }}>
                    <ol type="a">
                        <li>Min. 22 days login, 300 Txns per month, Transactions with 100 Unique Customers. </li>
                        <li>Low value, Split transactions & Accommodation Transactions are not considered for computing the
                            monthly commission. </li>
                        <li>Commission rate changes if any will be communicated time to time by the bank.</li>

                    </ol>
                </div>

            </div>












        )


    }
}
