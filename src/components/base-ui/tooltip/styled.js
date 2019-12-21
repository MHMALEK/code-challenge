import styled from "styled-components";

const ToolTipContent = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	padding: 10px 10px;
	border-radius: 10px;
	max-width: 130px;
	min-width: 120px;
	z-index: 1;
	position: absolute;
	border: 1px solid ${(props) => props.theme.colors.pinkishGrey};
`;

const TooltipWrapper = styled.div`
	width: 10px;
	height: 10px;
	display: inline-block;
	position: relative;
`;

export { ToolTipContent, TooltipWrapper };
