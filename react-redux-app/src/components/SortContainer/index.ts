import styled from "styled-components";
import { device } from "../../constants/size";

export const SortContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media ${device.desktop} {
		max-width: 535px;
	}

	@media ${device.tablet} {
		display: none;
	}

	@media ${device.mobile} {
		display: none;
	}
`;
