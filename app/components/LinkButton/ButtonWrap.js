import styled from 'styled-components';

import Defaults from 'components/defaults';

export default styled.div`
	text-align: center;

	button {
		width: 50%;
		padding: 10px 0;
		max-width: 250px;
		margin: 15px auto;
		background-color: transparent;
		color: ${ Defaults.colors.yellow };
		border: 2px solid ${ Defaults.colors.yellow };
		border-radius: 3px;
		text-transform: uppercase;
		transition: all .3s ease;
		
		&:hover, &:focus, &:active {
			background-color: ${ Defaults.colors.yellow };
			color: ${ Defaults.colors.white };
			
			& > div {
				border-bottom: 1px solid ${ Defaults.colors.white };
			}
		}
		& > div {
			border-bottom: 1px solid ${ Defaults.colors.yellow };
			display: inline-block;
		}
	}
`;
