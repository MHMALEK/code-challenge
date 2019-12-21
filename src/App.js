import React from "react";
import styled, {
	createGlobalStyle,
	ThemeProvider
} from "styled-components/macro";
import GlobalFontIcons from "./components/base-ui/icon/font-icon";
import LikeButton from "./components/base-ui/like-button";
import Icon from "./components/base-ui/icon";
import TriangleBadge from "./components/base-ui/triangle-badge";
import { toUpperCase } from "./utils/strings";

const PrimaryTheme = {
	name: "primary-theme",
	colors: {
		primary: "#de6449",
		placeholder: "#b6b9ba",
		borders: "#d2d1d1",
		yellow: "#f7e61b",
		charcoalGrey: "#363e40",
		charcoalGey50: "#363e40",
		charcoalGey18: "rgba(54, 62, 64, 0.18)",
		charcoalGey08: "rgba(54, 62, 64, 0.8)",
		pinkishGrey: "#cac9c9",
		charcoalGreyTwo: "#3d4748",
		white: "#f8f8f8",
		gunmetal: "#486863",
		greenyBlue: "#36a6b4",
		paleRed: "#de6449",
		lightTeal: "#adeee3",
		uglyBlue: "#2a8691"
	},
	mediaQueriesBreackPoints: {
		mobileSmall: "320px",
		mobileMedium: "420px",
		tablet: "875px",
		desktopSmall: "1024px",
		desktopMedium: "1200px",
		desktopLarge: "1440px"
	},
	typography: {
		boldFontWeight: 800
	},
	paddings: {
		defaultSidePadding: "15px",
		defaultTopPadding: "10px"
	}
};

const defaults = {
	fontSize: "14px",
	typography: {
		fontFamily: "Open Sans"
	},
	textColor: "white"
};

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    	box-sizing: border-box;
  }
  
  p {
    margin: 0
  } 
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-size: ${defaults.fontSize}
    font-family: ${defaults.typography.fontFamily}
   @media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
        font-size: 12px;
	  }
  }

`;

const Col = styled.div`
	flex-basis: ${(props) => Math.ceil(props.span * 8.33)}%;
	flex: 1;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: 100%;
		max-width: 100%;
	}
`;

const TopRightColumn = styled(Col)`
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
`;

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

const Bold = styled.span`
	font-weight: ${(props) => props.theme.typography.boldFontWeight};
`;

const Text = styled.p`
	color: ${(props) => (props.color ? props.color : defaults.textColor)};
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

const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: 800;
	font-family: "Open Sans";
	line-height: 1.67;
`;

const SubTitle = styled.div`
	line-height: 1.67;
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

const Cell = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	flex: 1;
	border-left: 1px solid ${(props) => props.theme.colors.pinkishGrey};
`;

const FieldTitle = styled.div`
	color: ${PrimaryTheme.colors.pinkishGrey};
	font-size: 10px;
`;

const FieldValue = styled.div`
	font-weight: 600;
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.charcoalGrey};
`;

const StarsIconFilled = styled(Icon)`
	color: ${PrimaryTheme.colors.yellow};
`;

const StarsIconOutlined = styled(Icon)`
	color: ${PrimaryTheme.colors.yellow};
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

const SecondRowCol = styled(Col)`
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
	margin-left: 2rem;
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

const ComponentContainer = styled.section`
	@media screen and (min-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		width: 875px;
	}
`;

const PriceHandler = styled.div`
	display: flex;
	@media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
		display: block;
	}
`;

const StarsReview = ({ stars }) => {
	const renderStars = () => {
		const maxStars = 5;
		let starsIcons = [];
		for (let i = 0; i < stars; i++) {
			starsIcons.push(<StarsIconFilled key={i + 6} name='star' />);
		}
		const remainingStars = maxStars - starsIcons.length;
		if (remainingStars !== 0) {
			for (let i = 0; i < remainingStars; i++) {
				starsIcons.push(<StarsIconOutlined key={i} name='star_outline' />);
			}
		}
		return starsIcons;
	};
	return <div>{renderStars()}</div>;
};

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={PrimaryTheme}>
				<GlobalStyle />
				<GlobalFontIcons />

				<ComponentContainer>
					<Card>
						<CardImageContainer>
							<Figure>
								<CardImage>
									<source
										media='(max-width: 400px)'
										srcSet='images/boat-assets/boat-image.jpg'
									/>
									<source
										media='(min-width: 400px)'
										srcSet='images/boat-assets/boat-image@3x.jpg'
									/>
									<source
										media='(min-width: 600px)'
										srcSet='images/boat-assets/boat-image@3x.jpg'
									/>
									<CardImageFile
										src='images/boat-assets/boat-image@3x.jpg'
										alt='Chris standing up holding his daughter Elva'
									/>
								</CardImage>

								<CardImageCaption>
									{toUpperCase("zizoo recommended")}
								</CardImageCaption>
							</Figure>
						</CardImageContainer>

						<CardDetailsContainer>
							<FirstRow>
								<CardDetailsHeader>
									<Col span={9}>
										<Container>
											<TopTitleLeftSide>
												<Title>Jeano sun oddysey 45.2</Title>
												<SubTitle>
													<span>2001</span>
													<span>split, Croatia</span>
												</SubTitle>
											</TopTitleLeftSide>

											<LikeButtonWrapper>
												<LikeButton />
											</LikeButtonWrapper>
										</Container>
									</Col>

									<TopRightColumn span={3}>
										<TopTitleRightSide>
											<BadgeWrapper>
												<Badge>{toUpperCase("hot")}</Badge>
												<NumberOfViews>
													<Bold>
														<span>69</span> views
													</Bold>
												</NumberOfViews>
											</BadgeWrapper>
											<Text color={PrimaryTheme.colors.primary}>
												in the last 24h
											</Text>
										</TopTitleRightSide>
									</TopRightColumn>
								</CardDetailsHeader>
							</FirstRow>

							<SecondRow>
								<SecondRowCol span={7}>
									<Row>
										<Col span={4}>
											<Cell>
												<FieldValue>
													12.04 <span>m</span>
												</FieldValue>
												<FieldTitle>{toUpperCase("length")}</FieldTitle>
											</Cell>
										</Col>
										<Col span={4}>
											<Cell>
												<FieldValue>4</FieldValue>
												<FieldTitle>{toUpperCase("cabins")}</FieldTitle>
											</Cell>
										</Col>
										<Col span={4}>
											<Cell>
												<FieldValue>10</FieldValue>
												<FieldTitle>{toUpperCase("Guests")}</FieldTitle>
											</Cell>
										</Col>
									</Row>
								</SecondRowCol>

								<SecondRowCol span={5}>
									<Cell>
										<FieldValue>
											<StarsReview stars={4} />
										</FieldValue>
										<FieldTitle>
											<span>{3} </span>
											<span> {toUpperCase("Reviews")} </span>
										</FieldTitle>
									</Cell>
								</SecondRowCol>
							</SecondRow>

							<LastRow>
								<Col span={7}>
									<MoreDetailsContainer>
										<DetailesFieldRow>
											<DetailsItemValue>
												<CheckIcon name='check' />
												<span>sichrungsshein</span>
											</DetailsItemValue>
											<DetailsItemValue>
												<CheckIcon name='check' />
												<span>luxury</span>
											</DetailsItemValue>
										</DetailesFieldRow>
										<DetailesFieldRow>
											<FieldTitleInDetails>
												{toUpperCase("Sail type")}
											</FieldTitleInDetails>
											<FieldValueInDetails>
												<p>rolling Mainsail</p>
											</FieldValueInDetails>
										</DetailesFieldRow>
										<DetailesFieldRow>
											<FieldTitleInDetails>
												{toUpperCase("free Extras")}
											</FieldTitleInDetails>
											<FieldValueInDetails>
												<span>AirCon</span>,<span>WiFi</span>, ,
												<span>WiFi</span>,
											</FieldValueInDetails>
										</DetailesFieldRow>
									</MoreDetailsContainer>
								</Col>
								<Col span={5}>
									<LastRowController>
										<PriceContainer>
											<PriceHandler>
												<FromText color={PrimaryTheme.colors.pinkishGrey}>
													<Small>{toUpperCase("from")}</Small>
												</FromText>
												<Price>
													<PriceText>
														<Bold>€</Bold>
														<Bold>1,083,000</Bold>
													</PriceText>
													<Small>
														<Bold>weekly</Bold>
													</Small>
													<QuestionMarkIcon name='help'>?</QuestionMarkIcon>
												</Price>
											</PriceHandler>
										</PriceContainer>
										<BookingContainer>
											<BookingText>
												<FlashIcon name='flash' />
												<Bold>
													<small>Direct Booking</small>
												</Bold>
											</BookingText>
											<TriangleBadge> view details </TriangleBadge>
										</BookingContainer>
									</LastRowController>
								</Col>
							</LastRow>
						</CardDetailsContainer>
					</Card>
				</ComponentContainer>
			</ThemeProvider>
		</div>
	);
}

export default App;
