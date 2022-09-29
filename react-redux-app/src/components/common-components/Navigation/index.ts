import styled from "styled-components";

export const NavWrap = styled.div`
	max-width: 305px;
	display: flex;
	justify-content: space-evenly;
	border-bottom: 1px solid rgba(49, 48, 55, 0.1);
`;

export const NavWrapItem = styled.div`
	width: 141px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #313037;
	text-align: center;
	align-items: flex-start;
	padding: 0px 40px 24px;
	gap: 10px;

	:hover {
		border-bottom: 2px solid #313037;
		transition: 0.1s;
		cursor: pointer;
		color: #6c1bdb;
	}
`;
