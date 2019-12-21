import { createGlobalStyle } from "styled-components/macro";
import { defaultStyles } from ".";

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
    font-size: ${defaultStyles.fontSize}
    font-family: ${defaultStyles.typography.fontFamily}
   @media screen and (max-width: ${(props) =>
			props.theme.mediaQueriesBreackPoints.tablet}) {
        font-size: 12px;
	  }
  }

`;

export default GlobalStyle;
