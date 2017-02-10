import React from 'react';

import H2 from 'components/H2';
import PrivateTitleWrap from './PrivateTitle';

export default class PrivateTitle extends React.Component {
	constructor(props) {
        super(props);
    }
  	render() {
        return (
            <PrivateTitleWrap>
                <H2>{ this.props.title }</H2>
            </PrivateTitleWrap>
            
        );
    }
}