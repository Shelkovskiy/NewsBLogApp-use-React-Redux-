import styled from "styled-components";
import { DEVICE } from "../../../constants";

export const NavWrap = styled.nav`
	max-width: 305px;
	display: flex;
	justify-content: space-evenly;
	border-bottom: 1px solid rgba(49, 48, 55, 0.1);

	@media ${DEVICE.mobile} {
		max-width: 272px;
	}
`;

export const NavWrapItem = styled.nav`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #313037;

	align-items: flex-start;
	padding: 0px 40px 24px;

	:hover {
		border-bottom: 2px solid #313037;
		transition: 0.1s;
		cursor: pointer;
		color: #6c1bdb;
	}

	@media ${DEVICE.desktop} {
		max-width: 141px;
	}
	@media ${DEVICE.tablet} {
		max-width: 141px;
	}

	@media ${DEVICE.mobile} {
		max-width: 124px;
		font-size: 16px;
		margin: start;
	}
`;
