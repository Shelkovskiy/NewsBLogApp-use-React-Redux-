import styled from "styled-components";
import { device } from "../../constants/size";

export const MainTitle = styled.p`
	font-weight: 700;
	font-size: 56px;
	line-height: 80px;
	color: #313037;
	align-items: center;
	width: 100%;

	@media ${device.mobile} {
		font-size: 32px;
		line-height: 48px;
	}
`;
