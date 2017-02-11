import styled from 'styled-components';

import Defaults from 'components/defaults';

export default styled.div`
	.divider {
        width: 70%;
        margin: 25px auto 0;
        
        .mask { 
            height: 30px; 
			overflow: hidden;
            
            &:after, .inner { 
                margin: -25px auto 0;
                height: 20px;  
                border-radius: 125px / 25px;  
                box-shadow: 0 0 25px ${ Defaults.colors.yellow };
            }
        }
    }
`;
