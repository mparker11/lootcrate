import React from 'react';

import SubmitWrap from './SubmitWrap';

export default class SubmitButton extends React.Component {
  	constructor(props) {
        super(props);
    }
    render() {
        return (
            <SubmitWrap>
                <input type="submit" value={ this.props.text } />
            </SubmitWrap>
        );
    }
}