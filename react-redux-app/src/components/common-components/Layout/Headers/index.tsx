import React, { useCallback, useState, useMemo } from "react";
import styled from "styled-components";
import Input from "../../Input";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CustomText from "../../Text/index";
import { CustomLnk } from "../../CustomLink/index";
import { Form } from "../../Form/index";
import Image from "./img/logo.png";
import { AppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useDispatch } from "react-redux";
import { getAsyncBlogsSearch } from "../../../../redux/action/blogsActionCreators/index";
import {
	dataSelectors,
	isAuthSelector,
} from "../../../../redux/selectors/authSelectrors";
import ComponentsContainer from "../../Container";
import { device } from "../../../../constants/size";

interface IHeader {
	background?: string;
	margin?: string;
	padding?: string;
}

const HeaderBlock = styled.header<IHeader>`
	box-sizing: border-box;
	background: ${(props) => props.background || "none"};
	margin: ${(props) => props.margin || "start"};
	padding: ${(props) => props.padding || "0px"};
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	top: 0px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	@media ${device.mobile} {
		${Form} {
			display: none;
		}
	}

	@media ${device.tablet} {
		${Form} {
			max-width: 330px;
		}
	}

	@media ${device.desktop} {
		${Form} {
			max-width: 1400px;
		}
	}
`;

const initialSearchValue = {
	searchText: "",
};

const Header = () => {
	const [searchForm, setSearchForm] = useState(initialSearchValue);
	const dispatch: AppDispatch = useDispatch();
	const { username } = useAppSelector(dataSelectors);
	const isAuth = useAppSelector(isAuthSelector);

	const onBtnSearch = useCallback(async () => {
		dispatch(getAsyncBlogsSearch(searchForm.searchText));
	}, [dispatch, searchForm.searchText]);

	const handleSearchChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setSearchForm((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			})),
		[],
	);

	return (
		<>
			<HeaderBlock padding="20px 32px">
				<CustomLnk to="/mainpage">
					<div>
						<img src={Image} alt="logo" />
					</div>
				</CustomLnk>
				<Form
					width="100%"
					maxheigth="100"
					padding="0"
					margin="auto"
					flexDirection="row"
				>
					<Input
						fieldName="searchText"
						border="none"
						margin="auto"
						width="100%"
						value={searchForm.searchText}
						onChange={handleSearchChange}
						height="56px"
						type="text"
					/>
					<ComponentsContainer width="20px" alignItems="center" display="flex">
						<CustomLnk to="/searchpage" textDecoration="none">
							<Button
								width="100%"
								type="submit"
								onClick={onBtnSearch}
								background="none"
								border="none"
							>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</Button>
						</CustomLnk>
					</ComponentsContainer>
				</Form>
				{!isAuth ? (
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
				) : (
					<CustomText>{username}</CustomText>
				)}
			</HeaderBlock>
		</>
	);
};

export default React.memo(Header);
