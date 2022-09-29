import styled from "styled-components";

interface IFormProps {
	maxwidth: string;
	maxheigth: string;
	padding: string;
	margin: string;
}

export const Form = styled.form<IFormProps>`
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	max-width: ${(props) => props.maxwidth}px;
	max-height: ${(props) => props.maxheigth}px;
	padding: ${(props) => props.padding}px;
	margin: ${(props) => props.margin};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
