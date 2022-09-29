import React from "react";
import styled from "styled-components";

interface ICustomComponentsContainer {
	maxWidth?: string;
	display?: string;
	margin?: string;
	padding?: string;
	justifyContent?: string;
	alignItems?: string;
   width?:string;
}

interface IComponentsContainer extends ICustomComponentsContainer {
	children?: React.ReactNode;
}

const CustomComponentsContainer = styled.div<ICustomComponentsContainer>`
	width: ${(props) => props.width};
   max-width: ${(props) => props.maxWidth};
	display: ${(props) => props.display};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`;

const ComponentsContainer = ({
	margin,
	display,
	maxWidth,
	padding,
	children,
	justifyContent,
	alignItems,
   width
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
