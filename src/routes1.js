import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';

//importing required components
import Login from './views/Pages/Login/Login';
import Page404 from './views/Pages/Page404/Page404';
import Page500 from './views/Pages/Page500/Page500';
import PledgeInfo from './containers/PledgeInfoDoc/PledgeInfoDoc';
import Instructions from './containers/Instructions/instructions';
import HrLogin from './containers/HrLogin/HrLogin';
import Reports from './containers/Reports/Reports';
import Success from './containers/Success/Success';
import Response from './containers/Response/Response';
import Failed from './containers/Failure/Failed';
import Charts from './views/Charts/Charts';
import DocumentList from './containers/DocumentList/DocumentList'
import BcaAgreement from './containers/BcaAgreement/BcaAgreement'
import BcaAgreementContentOBC from './containers/BcaAgreement/BcaAgreementContentOBC'
import BcaAgreementContentUBIN from './containers/BcaAgreement/BcaAgreementContentUBI'

import WitnessInfo from './containers/WitnessInfo/WitnessInfo';
import DSCTokenSign from './containers/DSCToken/DSCTokenSign';
  
import UpdateUser from "./containers/DSCToken/UpdateUser"


import ApproveNameUpdation from './containers/ApproveNameRequests/ApproveNameUpdation';
import WitnessSigning from './containers/WitnessInfo/WitnessSigning';

import BulkDataUpload from "./containers/BulkDataUpload/BulkDataUpload";

import BcLogin from "./views/Pages/BCLogin/BcLogin";
import ServerMaintainanceLogin from "./views/Pages/ServerMaintance/ServerMaintainance";
const hist = createBrowserHistory();

const checkAuth = () => {
    let isAuthenticated = sessionStorage.getItem("isAuthenticated")
	if (isAuthenticated === "true") {
		return true
	}else {
		return false
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => (

	<Route {...rest} render={(props) => (
    checkAuth()
      ? <Component {...props} />
      : <Redirect to = "/" />
  )} />
)

export default (
  <Router history={hist}>
    <Switch>
      <Route exact path="/CVP/empLogin" component={Login} />
      <Route path="/404" component={Page404} />
      <Route path="/500" component={Page500} />
      <Route path="/CVP/hrlogin" component={HrLogin} />
      <PrivateRoute path="/CVP/pledgeInfoDoc" component={PledgeInfo} />
      <PrivateRoute path="/CVP/instructions" component={Instructions} />
      <PrivateRoute path="/CVP/reports" component={Reports} />
      <PrivateRoute path="/CVP/success" component={Success} />
      <Route path="/CVP/response" component={Response} />
      <Route
        path="/CVP/bcaAgreementContentOBC"
        component={BcaAgreementContentOBC}
      />
      <Route
        path="/CVP/bcaAgreementContentUBIN"
        component={BcaAgreementContentUBIN}
      />
      <Route path="/CVP/failed" component={Failed} />
      <Route path="/CVP/UpdateUser" component={UpdateUser} />
      <PrivateRoute path="/CVP/charts" component={Charts} />

      <Route path="/CVP/BulkDataUpload" component={BulkDataUpload} />
      <Route exact path="/CVP/bcLogin" component={BcLogin} />
      {/* <Route exact path="/CVP/bcLogin" component={ServerMaintainanceLogin} /> */}
      <PrivateRoute path="/CVP/documentList" component={DocumentList} />
      <PrivateRoute path="/CVP/bcaAgreement" component={BcaAgreement} />
      <PrivateRoute path="/CVP/witnessInfo" component={WitnessInfo} />
      <PrivateRoute path="/CVP/dsctokenSign" component={DSCTokenSign} />
      <PrivateRoute
        path="/CVP/approveNameList"
        component={ApproveNameUpdation}
      />
      <PrivateRoute path="/CVP/witnessSigning" component={WitnessSigning} />

     <PrivateRoute path = "/test" component = {BcLogin} /> 
    </Switch>
  </Router>
);