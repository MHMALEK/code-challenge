import React from "react";
import SampleComponent from "../sample-component";
import styled from "styled-components";
// this is show case for the component
const ComponentContainer = styled.section`
	@media screen and (min-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: 875px;
	}
`;

const SmaplePage = () => {
	return (
		<>
			<header>header</header>
			<section>
				<article>
					<ComponentContainer>
						<SampleComponent />
					</ComponentContainer>
				</article>
			</section>
			<footer> footer</footer>
		</>
	);
};

export default SmaplePage;
