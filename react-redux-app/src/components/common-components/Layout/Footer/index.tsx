import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import { faCopyright, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomText from "../../Text/index";

interface IFooter {
	background?: string;
	margin?: string;
	padding?: string;
}

const FooterBlock = styled.footer<IFooter>`
	max-width: 1120px;
	border-top: 2px solid rgba(49, 48, 55, 0.1);
	display: flex;
	background: ${(props) => props.background || "none"};
	margin: ${(props) => props.margin || "start"};
	padding: ${(props) => props.padding || "0"}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	width: 100%;
	flex-shrink: 0;
	left: 270px;
`;

const DarkThemeBlock = styled.div`
	gap: 20px;
	padding: 0;
	align-items: center;
	display: flex;
	justify-content: center;
`;

const Footer = () => {
	return (
		<>
			<FooterBlock background="none" margin="auto" padding="34">
				<div>
					<div>{<FontAwesomeIcon icon={faCopyright} size="1x" />}</div>
					<CustomText
						fontfamily="Inter"
						fontsize="16"
						color="rgba(49, 48, 55, 0.5)"
						lineheight="24"
						fontweight="400"
					>
						2022 Blogolog
					</CustomText>
				</div>
				<DarkThemeBlock>
					<CustomText
						fontfamily="Inter"
						fontsize="16"
						color="rgba(49, 48, 55, 0.5)"
						lineheight="24"
						fontweight="400"
					>
						Dark theme
					</CustomText>
					<Button background="none" border="none">
						<FontAwesomeIcon
							icon={faToggleOn}
							color="rgba(49, 48, 55, 0.5)"
							size="2x"
						/>
					</Button>
				</DarkThemeBlock>
			</FooterBlock>
		</>
	);
};

export default React.memo(Footer);
