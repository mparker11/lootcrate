import React from 'react';
import md5 from 'md5';

import LoginWrap from './Login';
import TextBox from 'components/Textbox';
import SubmitButton from 'components/SubmitButton';
import LinkButton from 'components/LinkButton';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleFieldChange(elementName, event) {
        this.setState({
            email: elementName === 'email' ? event.target.value : this.state.email,
            password: elementName === 'password' ? md5(event.target.value) : this.state.password
        });
    }
    handleLogin(event) {
        
    }
  	render() {
        return (
            <LoginWrap>
                <p>Please enter your credentials below.</p>
                <form onSubmit={ this.handleLogin }>
                    <TextBox label="Email Address" type="email" onChange={ this.handleFieldChange.bind(this, 'email') }/>
                    <TextBox label="Password" type="password" onChange={ this.handleFieldChange.bind(this, 'password') } />
                    <SubmitButton text="Login" />
                </form>
                <div className="divider"><div className="mask"><div className="inner"></div></div></div>
                <p>
                    If you are here for the first time and need to request access, 
                    please call (432) 138-3192. If you have completed this step, please 
                    continue registration below.
                </p>
                <LinkButton text="Register" />
            </LoginWrap>
        );
    }
}