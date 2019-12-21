import { createGlobalStyle } from "styled-components/macro";

import woffFile from "./fonts/zizoo-font-icon.woff";
import eotFile from "./fonts/zizoo-font-icon.eot";
import ttfFile from "./fonts/zizoo-font-icon.ttf";
import svgFile from "./fonts/zizoo-font-icon.svg";

export default createGlobalStyle`
	@font-face {
		font-family: "Zizoo-font-icon";
		src: url("${eotFile}?wxncus");
		src: url("${eotFile}?wxncus#iefix")
				format("embedded-opentype"),
			url("${ttfFile}?wxncus") format("truetype"),
			url("${woffFile}?wxncus") format("woff"),
			url("${svgFile}?wxncus#zizoo-font-icon") format("svg");
		font-weight: normal;
		font-style: normal;
		font-display: block;
	}

	[class^="icon-"],
	[class*=" icon-"] {
		/* use !important to prevent issues with browser extensions that change fonts */
		font-family: "Zizoo-font-icon" !important;
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;

		/* Better Font Rendering =========== */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-check:before {
		content: "\\e900";
	}
	.icon-star_outline:before {
		content: "\\e901";
	}
	.icon-star:before {
		content: "\\e902";
	}
	.icon-help:before {
		content: "\\e903";
	}
	.icon-like_outline:before {
		content: "\\e904";
	}
	.icon-like:before {
		content: "\\e905";
	}
	.icon-flash:before {
		content: "\\e906";
	}
`;
