import React from "react";
import styled from "styled-components";
import CustomText from "../../Text/index";
import { CustomLnk } from "../../CustomLink/index";
import Image from "./img/logo.png";
import useWindowSize, { useAppSelector } from "../../../../redux/hooks";
import {
	dataSelectors,
	isAuthSelector,
} from "../../../../redux/selectors/authSelectrors";
import { DEVICE } from "../../../../constants";
import SearchForm from "../../../SearchForm";
import { Logo } from "../../../Logo";
import Burger from "../../../Burger";

interface IHeader {
	background?: string;
	margin?: string;
	padding?: string;
}

const HeaderBlock = styled.header<IHeader>`
	gap: 10px;
	box-sizing: border-box;
	background: ${(props) => props.background || "none"};
	margin: ${(props) => props.margin || "start"};
	padding: ${(props) => props.padding || "0px"};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	top: 0px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	@media ${DEVICE.desktop} {
		padding: 20px 32px;
	}
	@media ${DEVICE.tablet} {
		padding: 20px 32px;
	}
	@media ${DEVICE.mobile} {
		padding: 18px 24px;
	}
`;

const SearchContainer = styled.div`
	width: 100%;
	@media ${DEVICE.desktop} {
		max-width: 1300px;
	}
`;

const Header = () => {
	const { username } = useAppSelector(dataSelectors);
	const isAuth = useAppSelector(isAuthSelector);
	const size = useWindowSize();

	return (
		<>
			<HeaderBlock>
				<CustomLnk to="/mainpage">
					<div>
						<Logo src={Image} alt="logo" />
					</div>
				</CustomLnk>
				<SearchContainer>{size.width > 320 && <SearchForm />}</SearchContainer>
				{size.width < 321 ? (
					<Burger />
				) : (
					<>
						{!isAuth ? (
							<CustomLnk to="/signinpage" textDecoration="none">
								<div>
									<CustomText
										fontfamily="Inter"
										color="rgba(49, 48, 55, 1)"
										fontweight="700"
										lineheight="34"
										fontsize="16"
									>
										Login
									</CustomText>
								</div>
							</CustomLnk>
						) : (
							<CustomText
								fontfamily="Inter"
								color="rgba(49, 48, 55, 1)"
								fontweight="600"
								lineheight="34"
								fontsize="16"
							>
								{username}
							</CustomText>
						)}
					</>
				)}
			</HeaderBlock>
		</>
	);
};

export default React.memo(Header);
