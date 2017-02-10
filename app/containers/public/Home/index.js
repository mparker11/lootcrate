import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import H1 from 'components/H1';

export default class Home extends React.Component {
  	render() {
        return (
            <article>
                <H1>HOME PAGE</H1>
                <Link to="/login">Login</Link>
            </article>
        );
    }
}