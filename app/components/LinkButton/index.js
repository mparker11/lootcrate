import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ButtonWrap from './ButtonWrap';

export default class LinkButton extends React.Component {
  	constructor(props) {
        super(props);
    }
    render() {
        return (
			<ButtonWrap>
	            <Link to="/register">
					<button><div>{ this.props.text }</div></button>
				</Link>
			</ButtonWrap>
        );
    }
}