import styled from 'styled-components';

import Defaults from 'components/defaults';

export default styled.div`
	text-align: center;
	
	input[type="submit"] {
		width: 50%;
		padding: 10px 0;
		max-width: 250px;
		margin: 15px auto;
		border-radius: 3px;
		background-color: ${ Defaults.colors.blue };
		color: ${ Defaults.colors.white };
		text-transform: uppercase;
	}
`;
