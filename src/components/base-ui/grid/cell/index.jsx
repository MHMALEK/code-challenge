import styled from "styled-components/macro";

const Cell = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	flex: 1;
	border-left: 1px solid ${(props) => props.theme.colors.pinkishGrey};
`;

export default Cell;
