import React from "react";
import { ThemeProvider } from "styled-components/macro";
import GlobalFontIcons from "./components/base-ui/icon/font-icon";
import GlobalStyles from "./styles/global-styles";
import SmaplePage from "./components/pages";
import { PrimaryTheme } from "./styles";

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={PrimaryTheme}>
				<GlobalStyles />
				<GlobalFontIcons />
				<SmaplePage />
			</ThemeProvider>
		</div>
	);
}

export default App;
