import { Dropdown } from "bootstrap";
import React, { Component } from "react";

export default class AnnexureUCO extends Component {
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
          <b>
            Annexure-A <br />
            Business Correspondent Agent Commission
          </b>{" "}
        </p>
        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="6" style={{ textAlign: "left" }}>
                <b
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  Table 1 : Payment to Future Corparate BC / Common Service
                  Centre (CSC) & Individual BC Agent
                </b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td rowspan="3" style={{ border: "1px solid black" }}>
                1
              </td>
              <td
                rowspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                BSBDA Enrolment
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Funded Account ( Account with Minimum Rs. 500/- Deposit : Rs.
                16/-)
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Account with zero balance / less than Rs. 500/- initial deposit
                : Rs. 12/-
              </td>
            </tr>

            <tr />
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>2</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Transactions
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>
                  Cash Transaction (Other than Off-us Acquirer transactions):
                </b>
                <br />
                <b>
                  <u>CASH DEPOSIT:</u>
                </b>
                <br />
                0.32% of the total amount of cash handled by the BCA maximum to
                Rs. 16/- per transaction.
                <br />
                <b>
                  <u>CASH WITHDRAWAL:</u>
                </b>
                <br />
                0.32% of the total amount of cash handled by the BCA maximum to
                Rs. 12/- per transaction. <br />
                <b>Cash Transactions (off-us acquirer transactions):</b>
                <br />
                0.32% of the total amount of cash handled by the BCA maximum to
                Rs. 5.6/- per transaction.
                <br />
                Fixed Commission of Rs 1600/- will be paid to BCAs in the
                following states, being difficult areas subjected to min 15
                active days and min 50 transactions in a month.
                <br />
                1. Eight State in North East : Assam, Arunachal Pradesh,
                Nagaland, Manipur, Mizoram,Tirpura, Meghalaya and sikkim.
                <br />
                2. Hilly States & UTs : Jammu , Kashmir and Uttarakhand
                <br />
                3. Two difficult States : Chhattisgarh, Jharkhand.
                <br />
                0.60% commissions rate earlier applicable for difficult areas is
                withdrawn.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>3</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMJJBY Enrolment
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 24/- in 1st Year
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>4</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMJJBY Renewal
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>5</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMSBY Enrolment
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Ps. 0.80
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>6</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PMSBY Renewal
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Ps. 0.80
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>7</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                APY Enrolment
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                40% of Bank commission will be paid to Banking Correspondant
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>8</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                APY Maintenance
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                40% of Bank commission will be paid to Banking Correspondant
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>9</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                RD/FD Account
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- for RD of Rs. 500/- per month and FD with Rs. 1000/- or
                more
                <br />
                Rs. 4/- for other RD/FD
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>10</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Aadhaar Seeding
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>11</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                BHIM Aadhaar Pay Merchant On boarding
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 80/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>12</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                PPF, Sukanya Account Opening
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                40% of Bank commission earning which will be paid upon receipt
                of commission from RBI
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>13</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                BBPS
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                1) Utilities (Electricity, Gas & Water) & Telecom ( Mobile,
                Landline, Broadband):
                <br />
                48% of CCF earned
                <br />
                i.e, Rs. 2.4/- per bill up to Rs. 1000/-
                <br />
                Rs. 7.2/- per bill above Rs. 1000/-
                <br />
                2) DTH: 0.8% of the bill amount.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>14</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Request Services
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Request for new cheque book, Stop payment of cheque, Cheque
                status enquiry, Renew TD/RD. Block debit card, Request for SMS
                alert / email statement, Pension life certificate, Apply for
                RuPay debit cards, Passbook update, Cheque Collection:
                <br />
                Rs. 1.6/- per request/service
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>15</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Lead for Current A/C opening
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 40/- per A/c Opened
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="6" style={{ textAlign: "left" }}>
                <b
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  Table 2 : BCA Remuneration (Himachal Pradesh)
                </b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>1</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Account Opening
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 16/- per account but in two parts:
                <br />
                a) Rs. 8/- is paid at the time of opening of account.
                <br />
                b) In order to encourage non-zero balance accounts,
                <br />
                further amount of Rs. 8/- is paid after there is balance in the
                account.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>2</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Remittance/ Transfer Transaction
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                0.32% of the transaction amount with max. of Rs. 40/- per
                account per day, maximum up to 25000/- per month.
                <br />
                This is same for Indo Nepal transaction, IMPS, Inter Sol
                transaction.
                <br />
                The Maximum bar of Rs. 25000/- is only applicable for
                transactions. Other remunerations will be additional.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>3</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Cash Handling charges at base branch
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>No Cash</b> Handling charges for base branch
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>4</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Fixed amount to BCA for contract period:
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Fixed amount of Rs. 4000/- per month. BCAs receive the minimum
                sustenance of Rs. 4000/- subject to the condition that, the BC
                will work for minimum 20 days in a month and do the transactions
                or 50 fresh enrolment of customer per month.
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="6" style={{ textAlign: "left" }}>
                <b
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  Table 3 : Remuneration for SHG / JLG / KCC and other Loans
                </b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>1</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                For formation and promotion including credit linkage
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Not exceeding Rs. 800/- per SHG / JLG formed and credit linked
                with the Bank in stages as under:
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>2</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                For stationary and overhead expenses after saving linkage of SHG
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 240/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>3</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                4 Months after saving linkage of SHG4 Months after saving
                linkage of SHG
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 240/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>4</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Immediately after credit linkage of SHG
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 320/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td colspan="2" style={{ textAlign: "left" }}>
                <b
                  style={{
                    fontSize: "14px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  Non Cash Transactions
                </b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>5</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Remittance/Fund Transfer
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 8/- per transaction
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>6</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Balance Enquiry
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Nil
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>7</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Collection of new KCC proposal
              </td>
              <td
                colspan="3"
                rowspan="2"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Onetime of payment of 0.40% of the amount sanctioned subject to
                the Minimum Rs. 80/- & Maximum Rs. 4000/- where there has been
                at least 1st phase disbursement
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>8</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Collection of new KCC Loan proposal
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>9</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Activation of dormant/NPA/KCC Account
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Onetime payment of 0.80% to the amount Outstanding in inactive
                account subject to the Minimum Rs. 160/- & Maximum Rs. 4000/-
                per account after the successfully activated as per extant
                guidelines.
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>10</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Renewal of KCC accounts
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Payment of commissions for renewal of KCC by BCAs @ Rs. 160/-
                per renewal per account
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>11</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Collection in KCC through Micro ATM
              </td>
              <td
                colspan="3"
                rowspan="2"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                As per normal cash deposit transactions
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>12</td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Collection in Retail Loan through Micro ATM
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <td colspan="6" style={{ textAlign: "left" }}>
                <b
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  Table 4 : Fees and Commission payable on actual recovery as
                  per extant NPA Policy It is to be modified as per modification
                  in NPA Policy of the Bank
                </b>
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td rowspan="2" style={{ border: "1px solid black" }}>
                Amount Recovered
              </td>
              <td
                rowspan="2"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Recovery made in NPA account (Sub-Standard and Doubtful I & II)
                other than through compromise
              </td>
              <td
                colspan="3"
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Recovery made in Doubtful III, Loss and ML accounts other than
                through compromise
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Recovery through the efforts of RF where realizable security is
                available
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Recovery made where there is virtually no realizable security.
              </td>
            </tr>

            <td style={{ border: "1px solid black", textAlign: "left" }}>
              a) Up to Rs. 50,000
            </td>
            <td
              style={{
                border: "1px solid black",
                textAlign: "left",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              5.60%
            </td>
            <td
              style={{
                border: "1px solid black",
                textAlign: "left",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              8%
            </td>
            <td
              rowspan="10"
              style={{
                border: "1px solid black",
                textAlign: "left",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              8% of the recovered amount irrespective of any slab or balance
              outstanding.
            </td>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "left" }}>
                b) Above Rs. 50,000 to Rs. 1 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 2800/- + 4.8% of the balance amount recovered above Rs.
                50,000/-
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 4000/- + 6.4% of the balance amount recovered above Rs.
                50,000/-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "left" }}>
                c) Above Rs. 1 Lakh to Rs. 10 Lakhs
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 5200/- + 4% of the balance amount recovered above Rs. 1 Lakh
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 7200/- + 5.6% of the balance amount recovered above Rs. 1
                Lakh
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "left" }}>
                d) Above Rs. 10 Lakhs to Rs. 50 Lakhs
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 41200/- + 3.2% of the balance amount recovered above Rs. 10
                Lakhs
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 57600/- + 4.8% of the balance amount recovered above Rs. 10
                Lakhs
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", textAlign: "left" }}>
                e) Above Rs. 50 Lakhs to Rs. 100 Lakhs
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 169200/- + 2.4% of the balance amount recovered above Rs. 50
                Lakhs
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                Rs. 249600/- + 4% of the balance amount recovered above Rs. 50
                Lakhs
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <table
          style={{
            fontSize: "14px",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <tbody style={{ border: "1px solid black", textAlign: "center" }}>
            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                In case of recovery made through compromise, the commission
                payable to the RF shall be 50 % of the eligible amount depending
                up on the actual amount recovered as mentioned above.
                <br />
                <br />
                However, payment of full eligible amount of commission as per
                table above up on actual amount recovered in accounts having
                book balance up to Rs. 1 Lakh through compromise.
                <br />
                <br />
                The services of the BC shall not be utilized for possession and
                enforcement of the mortgaged securities under SARFAESI Act:-
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                <b>Incentive:</b> In addition to the above rates, payment of an
                incentive of 8% of the commissions with a maximum of Rs. 1600/-
                for BC whose monthly earning is above Rs.7500/- and on meeting
                monthly targets assigned under Social Security Scheme
              </td>
            </tr>

            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                Under new incentive structure if a minimum balance of Rs.
                25000/- per account opened by BCs per month is maintained then
                BC would get a commission of 0.08% of balance in the account
                opened by them.
              </td>
            </tr>

            <tr />
          </tbody>
        </table>
        <div style={{ fontSize: "14px" }}>
          <b>Note:</b> Service Charge and criteria may revise the above rates at
          any time by the bank.
        </div>
      </div>
    );
  }
}
