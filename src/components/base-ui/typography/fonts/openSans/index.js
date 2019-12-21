import { createGlobalStyle } from "styled-components/macro";

import woffFile from "./fonts/zizoo-font-icon.woff";
import eotFile from "./fonts/zizoo-font-icon.eot";
import ttfFile from "./fonts/zizoo-font-icon.ttf";
import svgFile from "./fonts/zizoo-font-icon.svg";

export default createGlobalStyle`
@font-face {
  font-family: OpenSans;
  src: local(OpenSans),
    url(/path/to/OpenSans.woff2) format("woff2"),
    url(/path/to/OpenSans.woff) format("woff"),
    url(/path/to/OpenSans.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
}
@font-face {
  font-family: OpenSans;
  src: local(OpenSans-Semibold),
    url(/path/to/OpenSans-Semibold.woff2) format("woff2"),
    url(/path/to/OpenSans-Semibold.woff) format("woff"),
    url(/path/to/OpenSans-Semibold.ttf) format("truetype");
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
}
@font-face {
  font-family: OpenSans;
  src: local(OpenSans-Bold),
    url(/path/to/OpenSans-Bold.woff2) format("woff2"),
    url(/path/to/OpenSans-Bold.woff) format("woff"),
    url(/path/to/OpenSans-Bold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
}

`;
