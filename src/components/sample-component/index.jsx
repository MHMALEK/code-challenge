import React from "react";
import LikeButton from "../base-ui/like-button";
import TriangleBadge from "..//base-ui/triangle-badge";
import { toUpperCase } from "../../utils/strings";
import Cell from "../base-ui/grid/cell";
import StarsReview from "../base-ui/rate-and-review";
import Tooltip from "../base-ui/tooltip";
import Column from "../base-ui/grid/column";
import Text from "../base-ui/typography/text/text";
import Title from "../base-ui/typography/title/title";
import {
	Card,
	CardImageContainer,
	CardImage,
	CardImageFile,
	CardImageCaption,
	CardDetailsContainer,
	CardDetailsHeader
} from "../base-ui/card";
import {
	Figure,
	FirstRow,
	Container,
	TopTitleLeftSide,
	LikeButtonWrapper,
	TopRightColumn,
	TopTitleRightSide,
	BadgeWrapper,
	Badge,
	NumberOfViews,
	SecondRow,
	SecondRowCol,
	Row,
	FieldValue,
	FieldTitle,
	LastRow,
	MoreDetailsContainer,
	DetailesFieldRow,
	DetailsItemValue,
	CheckIcon,
	FieldTitleInDetails,
	FieldValueInDetails,
	PriceContainer,
	LastRowController,
	PriceHandler,
	FromText,
	Small,
	Price,
	QuestionMarkIcon,
	PriceText,
	BookingContainer,
	BookingText,
	FlashIcon
} from "./styledComponents";
import Bold from "../base-ui/typography/bold";
import { PrimaryTheme } from "../../styled-component";

const SampleComponent = () => {
	return (
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
						<Column span={9}>
							<Container>
								<TopTitleLeftSide>
									<Title>Jeano sun oddysey 45.2</Title>
									<span>2001 </span>
									<span>split, Croatia</span>
								</TopTitleLeftSide>

								<LikeButtonWrapper>
									<LikeButton />
								</LikeButtonWrapper>
							</Container>
						</Column>

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
								<Text color={PrimaryTheme.colors.primary}>in the last 24h</Text>
							</TopTitleRightSide>
						</TopRightColumn>
					</CardDetailsHeader>
				</FirstRow>

				<SecondRow>
					<SecondRowCol span={7}>
						<Row>
							<Column span={4}>
								<Cell>
									<FieldValue>
										12.04 <span>m</span>
									</FieldValue>
									<FieldTitle>{toUpperCase("length")}</FieldTitle>
								</Cell>
							</Column>
							<Column span={4}>
								<Cell>
									<FieldValue>4</FieldValue>
									<FieldTitle>{toUpperCase("cabins")}</FieldTitle>
								</Cell>
							</Column>
							<Column span={4}>
								<Cell>
									<FieldValue>10</FieldValue>
									<FieldTitle>{toUpperCase("Guests")}</FieldTitle>
								</Cell>
							</Column>
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
					<Column span={7}>
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
									<span>AirCon</span>,<span>WiFi</span>, ,<span>WiFi</span>,
								</FieldValueInDetails>
							</DetailesFieldRow>
						</MoreDetailsContainer>
					</Column>
					<Column span={5}>
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
										<Tooltip content={<p>do you need help Really?</p>}>
											<QuestionMarkIcon name='help'>?</QuestionMarkIcon>
										</Tooltip>
									</Price>
								</PriceHandler>
							</PriceContainer>
							<BookingContainer>
								<BookingText>
									<FlashIcon name='flash' />
									<Bold>
										<small>{toUpperCase("Direct Booking")}</small>
									</Bold>
								</BookingText>
								<TriangleBadge> view details </TriangleBadge>
							</BookingContainer>
						</LastRowController>
					</Column>
				</LastRow>
			</CardDetailsContainer>
		</Card>
	);
};

export default SampleComponent;
