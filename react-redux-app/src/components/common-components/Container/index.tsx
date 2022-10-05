import React from "react";
import styled from "styled-components";

interface ICustomComponentsContainer {
	maxWidth?: string;
	display?: string;
	margin?: string;
	padding?: string;
	justifyContent?: string;
	alignItems?: string;
	width?: string;
}

interface IComponentsContainer extends ICustomComponentsContainer {
	children?: React.ReactNode;
}

const CustomComponentsContainer = styled.div<ICustomComponentsContainer>`
	width: ${(props) => props.width || "100%"};
	max-width: ${(props) => props.maxWidth || "100%"};
	display: ${(props) => props.display || "block"};
	margin: ${(props) => props.margin || "0"};
	padding: ${(props) => props.padding || 0};
	justify-content: ${(props) => props.justifyContent || "space-between"};
	align-items: ${(props) => props.alignItems || "center"};
`;

const ComponentsContainer = ({
	margin,
	display,
	maxWidth,
	padding,
	children,
	justifyContent,
	alignItems,
	width,
}: IComponentsContainer) => {
	return (
		<CustomComponentsContainer
			margin={margin}
			padding={padding}
			maxWidth={maxWidth}
			display={display}
			justifyContent={justifyContent}
			alignItems={alignItems}
			width={width}
		>
			{children}
		</CustomComponentsContainer>
	);
};

export default ComponentsContainer;
