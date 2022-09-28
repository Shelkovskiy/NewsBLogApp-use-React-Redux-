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
}

const Text = styled.p<ICustomText>`
	font-family: ${(props) => props.fontfamily};
	font-style: ${(props) => props.fontstyle};
	font-size: ${(props) => props.fontsize}px;
	line-height: ${(props) => props.lineheight}px;
	text-align: ${(props) => props.textAlignt};
	vertical-align: ${(props) => props.verticalAlign};
	letter-spacing: ${(props) => props.letterspacing};
	align-items: ${(props) => props.alignItems};
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontweight};
	max-width: ${(props) => props.width}px;
	cursor: ${(props) => props.cursor};
	margin-block-start: 0px;
	margin-block-end: 0px;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
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
		>
			{children}
		</Text>
	);
};

export default CustomText;
