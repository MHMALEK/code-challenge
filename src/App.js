import React from "react";
import { ThemeProvider } from "styled-components/macro";
import GlobalFontIcons from "./components/base-ui/icon/font-icon";
import SmaplePage from "./components/pages";
import { PrimaryTheme } from "./styled-component";
import GlobalStyle from "./styled-component/global-styles";

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={PrimaryTheme}>
				<GlobalStyle />
				<GlobalFontIcons />
				<SmaplePage />
			</ThemeProvider>
		</div>
	);
}

export default App;
