import styled from "styled-components/macro";
import { defaultStyles } from "../../../../styled-component";

const Text = styled.p`
	color: ${(props) => (props.color ? props.color : defaultStyles.textColor)};
`;

export default Text;
