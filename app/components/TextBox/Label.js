import styled from 'styled-components';

import Defaults from 'components/defaults';

export default styled.label`
	font-weight: 700;
	
	input {
		width: 100%;
		padding: 5px;
		border: 1px solid ${ Defaults.colors.gray };
		border-radius: 3px;
		margin-bottom: 10px;
		
		&:active, &:focus {
			outline: ${ Defaults.colors.blue } auto 5px;
		}
	}
`;
