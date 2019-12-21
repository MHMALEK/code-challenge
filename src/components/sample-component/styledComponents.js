import styled from "styled-components/macro";
import Icon from "../base-ui/icon";
import Column from "../base-ui/grid/column";
import Text from "../base-ui/typography/text/text";
import { PrimaryTheme } from "../../styled-component";

const TopRightColumn = styled(Column)`
	flex: 0.5;
`;

const FeildValueSmall = styled.div`
	font-family: OpenSans;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
`;

const CalDisabled = styled.div`
	font-family: OpenSans;
	font-size: 12px;
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
`;

const Figure = styled.figure`
	margin: 0;
	line-height: 0;
	padding: 10px 10px 10px 10px;
	position: relative;
`;

const TopTitleLeftSide = styled.div``;

const TopTitleRightSide = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex: 1;
	height: 100%;
	border-left: 1px solid ${(props) => props.theme.colors.pinkishGrey};
`;

const Badge = styled.span`
	background-color: ${(props) => props.theme.colors.primary};
	color: white;
	font-weight: bold;
	padding: 2px 4px;
	border-radius: 2px;
	font-size: 9px;
`;

const NumberOfViews = styled.span`
	color: ${(props) => props.theme.colors.primary};
	margin-left: 5px;
	font-size: 0.9em;
`;

const LikeButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		display: none;
	}
`;

const Container = styled.div`
	padding: 0 11px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

const BadgeWrapper = styled.div`
	margin-bottom: 3px;
`;

const FieldTitle = styled.div`
	color: ${PrimaryTheme.colors.pinkishGrey};
	font-size: 10px;
`;

const FieldValue = styled.div`
	font-weight: 600;
	font-size: 14px;
	color: ${(props) => props.theme.colors.charcoalGrey};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		font-size: 1.1rem;
	}
`;

const Price = styled.div`
	display: flex;
	align-items: center;
`;

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 35%;
	border-bottom: 1px solid ${(props) => props.theme.colors.pinkishGrey};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		flex-direction: column;
		border-bottom: none;
		flex-basis: 50%;
	}
`;

const BookingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 65%;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		border-left: 1px solid ${(props) => props.theme.colors.pinkishGrey};
		flex-basis: 50%;
		height: 75px;
	}
`;

const BookingText = styled.p`
	margin-bottom: 6px;
`;

const CheckIcon = styled(Icon)`
	font-size: 12px;
	margin-right: 4px;
`;

const FlashIcon = styled(Icon)`
	font-size: 12px;
	margin-right: 4px;
`;

const Row = styled.section`
	display: flex;
	flex: 1;
	width: 100%;
	height: 100%;
`;

const SecondRowCol = styled(Column)`
	height: 100%;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		height: 50px;
	}
`;

const MoreDetailsContainer = styled.div`
	width: 100%;
	height: 100%;
	flex: 1;
	border-right: 1px solid ${(props) => props.theme.colors.pinkishGrey};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		display: flex;
		justify-content: space-between;
		padding: 12px 10px;
		box-sizing: border-box;
	}
`;

const FirstRow = styled(Row)`
	flex: 1.2;
`;

const SecondRow = styled(Row)`
	flex: 1;
	align-items: center;
`;

const LastRow = styled(Row)`
	flex: 2;
	border-top: 1px solid ${(props) => props.theme.colors.pinkishGrey};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		flex-direction: column;
	}
`;

const FromText = styled(Text)`
	margin-right: 5px;
`;

const Small = styled.small`
	font-size: 0.8rem;
`;

const QuestionMarkIcon = styled(Icon)`
	color: ${(props) => props.theme.colors.charcoalGey18};
	font-size: 1.2em;
	margin-left: 0.6rem;
	&:hover {
		cursor: pointer;
	}
`;

const PriceText = styled.p`
	font-size: 1.3rem;
	margin-top: -6px;
	margin-right: 5px;
`;

const DetailesFieldRow = styled.div`
	display: flex;
	align-items: center;
	padding-left: ${(props) => props.theme.paddings.defaultSidePadding};
	padding-top: ${(props) => props.theme.paddings.defaultTopPadding};
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		flex-direction: column;
		padding-left: 0;
		padding-top: 0;
		align-items: flex-start;
	}
`;

const DetailsItemValue = styled.div`
	color: ${(props) => props.theme.colors.charcoalGey08};
	margin-right: 15px;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		margin-right: 0;
	}
`;

const FieldTitleInDetails = styled(FieldTitle)`
	font-size: 10px;
	width: 30%;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: auto;
	}
`;

const FieldValueInDetails = styled(FieldValue)`
	font-size: 12px;
	font-weight: 600;
`;

const LastRowController = styled.div`
	flex: 1;
	height: 100%;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		display: flex;
		align-items: center;
		border-top: 1px solid ${(props) => props.theme.colors.pinkishGrey};
		justify-content: space-evenly;
	}
`;

const PriceHandler = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 85%;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		display: block;
	}
`;

export {
	SecondRowCol,
	Row,
	FlashIcon,
	CheckIcon,
	BookingText,
	BookingContainer,
	PriceContainer,
	PriceHandler,
	LastRowController,
	FieldValueInDetails,
	FieldTitleInDetails,
	DetailsItemValue,
	DetailesFieldRow,
	PriceText,
	QuestionMarkIcon,
	Small,
	FromText,
	LastRow,
	SecondRow,
	FirstRow,
	MoreDetailsContainer,
	Price,
	FieldValue,
	FieldTitle,
	BadgeWrapper,
	Container,
	LikeButtonWrapper,
	NumberOfViews,
	Badge,
	TopTitleRightSide,
	TopTitleLeftSide,
	Figure,
	CalDisabled,
	FeildValueSmall,
	TopRightColumn
};
