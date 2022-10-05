import styled from "styled-components";

interface IImage {
	height?: string;
	width?: string;
	borderRadius?: string;
	objectFit?: string;
}

export const Image = styled.img<IImage>`
	height: ${(props) => props.height || "208"}px;
	width: ${(props) => props.width || "352px"};
	border-radius: ${(props) => props.borderRadius || "0px"};
	object-fit: ${(props) => props.objectFit || "cover"};
	z-index: 1;
`;
