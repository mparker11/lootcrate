import React from 'react';

import Label from './Label';

export default class TextBox extends React.Component {
  	constructor(props) {
        super(props);
    }
    render() {
        return (
            <Label>
				{ this.props.label }
				<input type={ this.props.type } onChange={ this.props.onChange } />
			</Label>
        );
    }
}