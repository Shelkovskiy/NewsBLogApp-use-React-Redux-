import styled from "styled-components";

interface IPageProps {
	isSelected: boolean;
}

export const Page = styled.span<IPageProps>`
	width: 40px;
	font-family: "Inter";
	font-style: normal;
	font-weight: ${(props) => (props.isSelected ? "700" : "400")};
	font-size: 14px;
	line-height: 24px;
	text-transform: uppercase;
	cursor: pointer;
	border: ${(props) =>
		props.isSelected ? "3px solid black" : "1px solid grey"};
	border-radius: 60%;
	text-align: center;
	color: ${(props) => (props.isSelected ? "black" : "rgba(49, 48, 55, 1)")};
`;
