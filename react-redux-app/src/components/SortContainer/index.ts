import styled from "styled-components";
import { DEVICE } from "../../constants";

export const SortContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 5px;

	@media ${DEVICE.desktop} {
		max-width: 535px;
	}
`;

export const SortWrapper = styled.div`
	gap: 5px;
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media ${DEVICE.desktop} {
		max-width: 1120px;
	}

	@media ${DEVICE.tablet} {
		max-width: 688px;
	}

	@media ${DEVICE.mobile} {
		flex-direction: column;
		max-width: 272px;
	}
`;
