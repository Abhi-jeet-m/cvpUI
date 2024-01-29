import React, { Component } from 'react';
import logo from './logos/integralogo.png'
class Logs extends Component{
    render(){
        return(
            <div>
                <header>
                    <img className='inegralogo' alt="IntegraLogo" src={logo} />
                </header>
            </div>
        )
    }
}
export default Logs