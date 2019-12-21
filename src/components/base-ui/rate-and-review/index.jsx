import React from "react";
import styled from "styled-components/macro";
import Icon from "../icon/icon";

const StarsIconOutlined = styled(Icon)`
	color: ${(props) => props.theme.colors.yellow};
	font-size: 14px;
`;

const StarsIconFilled = styled(Icon)`
	color: ${(props) => props.theme.colors.yellow};
	font-size: 14px;
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

export default StarsReview;
