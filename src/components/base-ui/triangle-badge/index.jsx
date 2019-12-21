import React from "react";
import styled from "styled-components/macro";
import { toUpperCase } from "../../../utils/strings";

const Front = styled.div`
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 16px 0 16px 7px;
	border-color: transparent transparent transparent
		${(props) => props.theme.colors.primary};
`;

const Back = styled.div`
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 16px 0 16px 7px;
	border-color: transparent transparent transparent white;
	position: absolute;
`;

const Middle = styled.div`
	width: 170px;
	height: 32px;
	color: ${(props) => props.theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;
	background-color: ${(props) => props.theme.colors.primary};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: 120px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	position: relative;
`;

export default ({ children }) => (
	<Wrapper>
		<Back />
		<Middle> {toUpperCase(children)}</Middle>
		<Front />
	</Wrapper>
);
