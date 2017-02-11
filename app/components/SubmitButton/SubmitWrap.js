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
		transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
		cursor: pointer;
		
		&:hover, &:focus {
      		box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
      		transition-delay: 0s;
    	}
	}
`;
