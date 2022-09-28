import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../Input";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CustomText from "../../Text/index";

interface IHeader {
	background?: string;
	margin?: string;
	padding?: string;
}

const HeaderBlock = styled.div<IHeader>`
	padding: ${(props) => props.padding}px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	top: 0px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

interface ILink {
	textDecoration?: string;
}

const CustomLnk = styled(Link)<ILink>`
	text-decoration: ${(p) => p.textDecoration};
`;

const InputForm = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 1300px;
`;

const Header = () => {
	return (
		<HeaderBlock padding="20">
			<CustomLnk to="/mainpage">
				<div>
					<img src={require("./img/Logo.png")} alt="logo" />
				</div>
			</CustomLnk>

			<InputForm>
				<Input
					border="none"
					margin="auto"
					width="100"
					onChange={(e) => console.log(e.target.value)}
					height="56px"
					type="search"
				/>
				<Button background="none" border="none">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Button>
			</InputForm>
			<CustomLnk to="/signinpage" textDecoration="none">
				<div>
					<CustomText
						fontfamily="Inter"
						color="rgba(49, 48, 55, 1)"
						fontweight="600"
						lineheight="34"
						fontsize="16"
					>
						Login
					</CustomText>
				</div>
			</CustomLnk>
		</HeaderBlock>
	);
};

export default Header;
