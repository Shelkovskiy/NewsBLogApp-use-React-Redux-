import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import { faCopyright, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomText from "../../Text/index";
import { device } from "../../../../constants/size";
import ComponentsContainer from "../../Container";

interface IFooter {
	background?: string;
	margin?: string;
	padding?: string;
	maxWidth?: string;
}

const FooterBlock = styled.footer<IFooter>`
	box-sizing:border-box;
	max-width: ${(props) => props.maxWidth};
	border-top: 2px solid rgba(49, 48, 55, 0.1);
	display: flex;
	background: ${(props) => props.background || "none"};
	margin: ${(props) => props.margin || "start"};
	padding: ${(props) => props.padding || "0"}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	left: 270px;
	width:100%;

	@media ${device.desktop} {
		padding: 34px;
		max-width:1120px
	}

	@media ${device.tablet} {
		padding: 34px;
		max-width:688px;
	}

	@media ${device.mobile} {
		padding: 32px 0px;
		flex-direction: column;
		max-width:272px;
	}
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
			<FooterBlock background="none" margin="auto auto 0">
				<ComponentsContainer
					width="140px"
					display="flex"
					justifyContent="center"
				>
					<div>
						{
							<FontAwesomeIcon
								icon={faCopyright}
								size="1x"
								color="rgba(49, 48, 55, 0.5)"
							/>
						}
					</div>
					<CustomText
						fontfamily="Inter"
						fontsize="16"
						color="rgba(49, 48, 55, 0.5)"
						lineheight="24"
						fontweight="400"
						margin="start"
					>
						2022 Blogolog
					</CustomText>
				</ComponentsContainer>
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
					<Button background="none" width="32px" border="none">
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
