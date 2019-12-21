import React from "react";
import styled, { keyframes } from "styled-components/macro";
import Icon from "../icon/icon";

export default ({ isLiked }) => (
	<Icon name={isLiked ? "like" : "like_outline"} />
);
