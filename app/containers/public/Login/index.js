import React from 'react';

import LoginWrap from './Login';
import TextBox from 'components/Textbox';

export default class Login extends React.Component {
  	render() {
        return (
            <LoginWrap>
                <p>Please enter your credentials below.</p>
                <TextBox label="Email Address" type="email" />
                <TextBox label="Password" type="password" />
            </LoginWrap>
        );
    }
}