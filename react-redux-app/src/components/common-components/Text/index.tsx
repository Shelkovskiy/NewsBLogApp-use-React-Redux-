import React from "react";
import styled from "styled-components";

interface ICustomText {
	fontfamily?: string;
	fontstyle?: string;
	fontsize?: string;
	lineheight?: string;
	textAlignt?: string;
	verticalAlign?: string;
	letterspacing?: string;
	alignItems?: string;
	color?: string;
	fontweight?: string;
	width?: string;
	cursor?: string;
	margin?: string;
}

const Text = styled.div<ICustomText>`
	font-family: ${(props) => props.fontfamily || "Inter"};
	font-style: ${(props) => props.fontstyle || "normal"};
	font-size: ${(props) => props.fontsize || 16}px;
	line-height: ${(props) => props.lineheight || 18}px;
	text-align: ${(props) => props.textAlignt || "center"};
	vertical-align: ${(props) => props.verticalAlign};
	letter-spacing: ${(props) => props.letterspacing};
	align-items: ${(props) => props.alignItems};
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontweight || "400"};
	max-width: ${(props) => props.width}px;
	cursor: ${(props) => props.cursor};
	margin-block-start: 0px;
	margin-block-end: 0px;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	margin: ${(props) => props.margin};
`;

interface IText extends ICustomText {
	children?: React.ReactNode;
}

const CustomText = ({
	children,
	fontfamily,
	fontsize,
	fontstyle,
	lineheight,
	textAlignt,
	verticalAlign,
	letterspacing,
	color,
	alignItems,
	fontweight,
	width,
	cursor,
	margin,
}: IText) => {
	return (
		<Text
			fontfamily={fontfamily}
			fontsize={fontsize}
			fontstyle={fontstyle}
			lineheight={lineheight}
			textAlignt={textAlignt}
			verticalAlign={verticalAlign}
			letterspacing={letterspacing}
			color={color}
			alignItems={alignItems}
			fontweight={fontweight}
			width={width}
			cursor={cursor}
			margin={margin}
		>
			{children}
		</Text>
	);
};

export default CustomText;
