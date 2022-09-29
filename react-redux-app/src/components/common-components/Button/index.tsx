import React from "react";
import styled from "styled-components";

interface IButtonProps extends IButtonVisualProps {
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	active?: boolean;
	className?: string;
	type?: "submit" | "button" | "reset";
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
	borderRadius?: string;
}

export const Btn = styled.button<IButtonVisualProps>`
	display: block;
	width: ${(p) => p.width};
	margin: ${(p) => p.margin};
	padding: ${(p) => p.padding};
	height: ${(p) => p.height}px;
	background: ${(p) => p.background || "none"};
	font-size: ${(p) => p.fontSize || "16"}px;
	font-weight: ${(p) => p.fontWeight || "400"};
	color: ${(p) => p.color || "#313037"};
	line-height: ${(p) => p.lineheight}px;
	font-family: ${(p) => p.fontFamily || "Inter"};
	border: ${(props) => props.border || "none"};
	border-radius: ${(props) => props.borderRadius || "4"}px;
	cursor: pointer;
`;

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
	borderRadius,
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

export default React.memo(Button);
