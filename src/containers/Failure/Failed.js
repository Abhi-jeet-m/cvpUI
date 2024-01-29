import React, { Component, Suspense } from 'react';
import {AppHeader} from '@coreui/react';
import DefaultHeader from '../PledgeInfoDoc/DefaultHeader';
import {Button} from 'reactstrap';

class Failed extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
 
  signOut(e) {
    e.preventDefault()
    sessionStorage.clear();
    this.props.history.push("/CVP/bclogin")
  }

  logOut = () => {
    sessionStorage.clear()
    if(sessionStorage.getItem("type") === "BC"){
        this.props.history.push("/CVP/bclogin")
        sessionStorage.clear()
      }else if(sessionStorage.getItem("type") === "EMP"){
        this.props.history.push("/CVP/empLogin")
        sessionStorage.clear()
      }else{
        this.props.history.push("/CVP/bclogin")
        sessionStorage.clear()
      }
}

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)} />
          </Suspense>
        </AppHeader>

        <div className="app-container">
            <div className="failure-msg">
				<h2>Signing Failed. Please try after sometime!!!</h2>
        <Button color="primary" style={{marginLeft:"45%", marginTop:"1%",display:"none"}} id="signOut" className="px-4" onClick={this.logOut} >Sign Out</Button>
			</div>
        </div>
      </div>
    );
  }
}

export default Failed;