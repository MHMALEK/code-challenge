import styled from "styled-components/macro";

const CardImageFile = styled.img`
	@media screen and (min-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		max-width: 355px;
	}
`;

const CardImage = styled.picture``;

const CardImageContainer = styled.article``;

const CardImageCaption = styled.figcaption`
	font-size: 11px;
	line-height: initial;
	font-weight: bold;
	position: absolute;
	top: 20px;
	left: 0;
	background-color: #353e40;
	padding: 5px 6px 5px 15px;
	color: white;
	font-family: "Open Sans";
`;

const CardDetailsContainer = styled.article`
	display: flex;
	flex-direction: column;
	flex: 1;
	border: 1px solid ${(props) => props.theme.colors.pinkishGrey};
`;

const CardDetailsHeader = styled.header`
	background-color: #f8f8f8;
	display: flex;
	justify-content: space-between;
	flex: 1;
	border-bottom: 1px solid ${(props) => props.theme.colors.pinkishGrey};
	height: 65px;
`;

const Card = styled.article`
	display: flex;
	border: 1px solid ${(props) => props.theme.colors.pinkishGrey};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		flex-direction: column;
		max-width: 100%;
	}

	@media screen and (min-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
	}
`;

export {
	Card,
	CardDetailsHeader,
	CardDetailsContainer,
	CardImageCaption,
	CardImage,
	CardImageContainer,
	CardImageFile
};
