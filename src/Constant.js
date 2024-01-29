// const HOST = "https://uatbcsign.docuexec.com/CORE_VALUE_PLEDGE_APP/";
// const HOST = "http://localhost:8092/CORE_VALUE_PLEDGE_APP/";

// const HOST = "http://10.10.40.38:8092/CORE_VALUE_PLEDGE_APP/";
const HOST="/CORE_VALUE_PLEDGE_APP/";
// const HOST = "https://docuxecstage.finfotech.co.in/CORE_VALUE_PLEDGE_APP/";

let URL = {
  generateOtp: HOST + "validatelogin",
  hrLogin: HOST + "validatelogin",
  login: HOST + "validateotp",
  getpledgedoc: HOST + "downloadPledgeInfo/",
  getrefno: HOST + "getPledgeInfo",
  signedpledgedoc: HOST + "downloadAndSaveSignedPledge/",
  signedpreview: HOST + "downloadSignedPledge/emp-",
  tonsdl: HOST + "submitConsent",
  empList: HOST + "getEmployeeList",
  getDocList: HOST + "getDocList",
  getPDFPath: HOST + "getPDFPath",
  witnessEsign: HOST + "witnessEsign",
  getSignedDocList: HOST + "getSignedDocList",
  signExistingDocument: HOST + "signExistingDocument",
  downloadDoc: HOST + "downloadDoc",
  sendNotification: HOST + "sendNotification",
  userUpdateRequest: HOST + "userUpdateRequest",
  updateProfileOnOtp: HOST + "updateProfileOnOtp",
  bcRequestsforUpdatingNames: HOST + "bcRequestsforUpdatingNames",
  bcNamesapprovedList: HOST + "bcNamesapprovedList",
  bcNamesRejectionList: HOST + "bcNamesRejectionList",
  getlangList: HOST + "getlangList",
  viewlangFile: HOST + "viewlangFile",
  bcsignrejectiondetails: HOST + "bcsignrejectiondetails",
  bcstatewisesigningstatus: HOST + "bcstatewisesigningstatus",
  generateOTPforWitnessEsign: HOST + "generateOTPforWitnessEsign",
  resendOTPforWitnessEsign: HOST + "resendOTPforWitnessEsign",
  getBcCellIP: HOST + "getBcCellIP",
  updateBcCellIP: HOST + "updateBcCellIP",
  getEmplList: HOST + "getEmplList",
  updateUserStatus: HOST + "updateUserStatus",
  templateDownload: HOST + "downloadTemplate",
  downloadTemplate: HOST + "getTemplate/",
  BulkDataUpload: HOST + "bulkDataUpload",
  getComapnyInfo: HOST + "getCompanyInfo/",
  getDataUploadStatus: HOST + "getDataUploadStatus/",
  deleteBC:HOST+"removeBCDetails",
  banksInfo: HOST+"registeredBankInfo"
};
module.exports = { URL };
