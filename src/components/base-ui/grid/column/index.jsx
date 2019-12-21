import styled from "styled-components/macro";

const Column = styled.div`
	flex-basis: ${(props) => Math.ceil(props.span * 8.33)}%;
	flex: 1;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: 100%;
		max-width: 100%;
	}
`;

export default Column;
