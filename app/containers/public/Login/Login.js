import styled from 'styled-components';

import Defaults from 'components/defaults';

export default styled.div`
	.divider {
		width: 70%;
		max-width: 350px;
		margin: 25px auto 0;
		position:relative; 
		
		.mask { 
			overflow: hidden; 
			height: 30px; 
			
			&:after { 
				content: ''; 
				display: block; 
				margin: -25px auto 0;
				width: 100%; 
				height: 25px;  
				border-radius: 125px / 12px;  
				box-shadow: 0 0 25px ${ Defaults.colors.yellow };
			}
		}
	}
`;
