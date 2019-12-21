import React from "react";
import styled, { keyframes } from "styled-components/macro";
import Icon from "../icon/icon";

const likeAnimation = keyframes`
  from {
    transform: scale(0.2);
  }
  to {
    transform: rotate(1);
  }
`;

const LikeButtonBigger = styled(Icon)`
	font-size: 1.5em;
	color: ${(props) => props.theme.colors.charcoalGey08};
	cursor: pointer;
	animation: ${likeAnimation};
`;
export default ({ isLiked }) => (
	<LikeButtonBigger name={isLiked ? "like" : "like_outline"} />
);
