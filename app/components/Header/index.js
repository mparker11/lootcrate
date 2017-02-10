import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import routeNames from 'routeNames';

import HeaderWrap from './Header';
import PrivateTitle from 'components/PrivateTitle';

export default class Header extends React.Component {
  	constructor(props) {
        super(props);
    }
    render() {
        let pathname = browserHistory.getCurrentLocation().pathname.substring(1);
        let title = routeNames[pathname];
        return (
            <div>
                <HeaderWrap>
                    <div className="left section">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bus-21.appspot.com/o/bus21-wordless.svg?alt=media&token=687f6ec8-ffa5-44e4-848f-6bb2cb5112e2" alt="Bus 21" />
                    </div>
                    <div className="right section">
                        <div>Menu <i className="fa fa-bars" aria-hidden="true"></i></div>
                    </div>
                </HeaderWrap>
                <PrivateTitle title={ title } />
            </div>
        );
    }
}