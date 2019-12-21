import React from "react";
import SampleComponent from "../sample-component";
import { Header, Footer } from "../layout/layout";

import styled from "styled-components";
// this is show case for the component
const ComponentContainer = styled.section`
	@media screen and (min-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: 875px;
		margin: 100px auto;
	}
`;

const SmaplePage = () => {
	return (
		<>
			<Header />
			<article>
				<ComponentContainer>
					<SampleComponent />
				</ComponentContainer>
			</article>
			<Footer> footer sample</Footer>
		</>
	);
};

export default SmaplePage;
