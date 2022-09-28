import React from "react";
import styled from "styled-components";

interface IButtonProps extends IButtonVisualProps {
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	active?: boolean;
	className?: string;
	type: "submit" | "button" | "reset";
}

interface IButtonVisualProps {
	width?: string;
	height?: string;
	margin?: string;
	background?: string;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	lineheight?: string;
	fontFamily?: string;
	padding?: string;
	border?: string;
	borderRadius?:string;
}

export const Btn = styled.button<IButtonVisualProps>`
	display: block;
	width: ${(p) => p.width};
	margin: ${(p) => p.margin};
	padding: ${(p) => p.padding};
	height: ${(p) => p.height}px;
	background: ${(p) => p.background};
	font-size: ${(p) => p.fontSize}px;
	font-weight: ${(p) => p.fontWeight};
	color: ${(p) => p.color};
	line-height: ${(p) => p.lineheight}px;
	font-family: ${(p) => p.fontFamily};
	border: ${(props) => props.border};
	border-radius:${(props)=>props.borderRadius}px;
	cursor: pointer;
	
`;

interface IButtonState {
	readonly text: string;
}

const Button = ({
	children,
	disabled,
	onClick = () => {},
	className,
	type,
	height,
	width,
	background,
	margin,
	color,
	fontSize,
	fontWeight,
	lineheight,
	fontFamily,
	padding,
	border,
	borderRadius
}: IButtonProps) => {
	return (
		<Btn
			disabled={disabled}
			onClick={onClick}
			className={className}
			type={type}
			width={width}
			height={height}
			background={background}
			margin={margin}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			fontFamily={fontFamily}
			lineheight={lineheight}
			padding={padding}
			border={border}
			borderRadius={borderRadius}
		>
			{children}
		</Btn>
	);
};
Button.defaultProps = {
	children: "Button",
	type: "button | submit",
};

export default React.memo(Button);
