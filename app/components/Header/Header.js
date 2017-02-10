import styled from 'styled-components';

import Defaults from 'components/defaults';

export default styled.div`
  	height: 60px;
	width: 100vw;
	padding: 3px 0;
	border-bottom: 2px solid ${ Defaults.colors.blue };
	
	.section {
		width: 50%;
		height: 100%;
		
		&.left {
			float: left;
			padding: 0 8px;
			position: relative;
		}
		&.right {
			float: right;
			display: table;
    		text-align: right;
			padding: 0 16px;
			
			& > div {
				display: table-cell;
				vertical-align: middle;
			}
		}
		img {
			max-width: 50px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`;
