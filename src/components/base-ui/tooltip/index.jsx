import React from "react";
import { ToolTipContent, TooltipWrapper } from "./styled";

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: false };
		this.handleMouseOutAndIn = this.handleMouseOutAndIn.bind(this);
		this.state = {
			showTooltip: false
		};
	}

	handleMouseOutAndIn() {
		this.setState(
			(prevState) => ({
				showTooltip: !prevState.showTooltip
			}),
			() => {
				console.log(this.state);
			}
		);
	}

	render() {
		const { showTooltip } = this.state;
		const { children, content } = this.props;

		return (
			<TooltipWrapper>
				<div
					onMouseOver={this.handleMouseOutAndIn}
					onMouseOut={this.handleMouseOutAndIn}>
					{children}
				</div>
				{showTooltip && (
					<div>
						<ToolTipContent>{content}</ToolTipContent>
					</div>
				)}
			</TooltipWrapper>
		);
	}
}

export default Tooltip;
