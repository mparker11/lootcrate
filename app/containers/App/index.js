import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import withProgressBar from '../../components/ProgressBar';

const AppWrapper = styled.div`
  	width: 100%;
`;
const ContentWrapper = styled.div`
  	max-width: calc(768px + 16px * 2);
  	margin: 0 auto;
  	display: flex;
  	min-height: 100%;
  	padding: 20px 16px 0;
  	flex-direction: column;
`;

export function App(props) {
  	return (
	    <AppWrapper>
	      	<Helmet
	        	titleTemplate="%s - Bus 21"
	        	defaultTitle="Bus 21"
	        	meta={[
	          		{ name: 'description', content: 'An application that closes the gap between students, parents and administrators.' },
	        	]}
	      	/>
	      	<Header />
            <ContentWrapper>
      		    {React.Children.toArray(props.children)}
                <Footer />
            </ContentWrapper>
	    </AppWrapper>
  	);
}

App.propTypes = {
	children: React.PropTypes.node,
};

export default withProgressBar(App);