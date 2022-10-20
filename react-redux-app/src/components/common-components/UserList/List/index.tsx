import React from "react";
import ListItem from "./ListItem/index";
import styled from "styled-components";
import CustomText from "../../Text";
import { Image } from "../../Image/index";
import ComponentsContainer from "../../Container/index";
import { CustomLnk } from "../../CustomLink/index";
import { IAsyncBlogsResponseData } from "../../../../redux/Types/responseType";

interface IListProps {
	items: IAsyncBlogsResponseData[];
}

export const UlList = styled.ul`
	justify-content: space-between;
	width: 100%;
	flex-direction: row;
	display: flex;
	flex-wrap: wrap;
	padding-inline-start: 0px;
`;

export const CardImageContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	::before {
		content: "";
		width: 100%;
		height: 100%;
		background: linear-gradient(
			133.87deg,
			rgba(77, 10, 199, 0.6) -10.18%,
			rgba(145, 46, 242, 0.6) 108.59%
		);
		display: block;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 2;
		opacity: 1;
	}
	:hover {
		::before {
			opacity: 0;
		}
	}
`;

const List = ({ items }: IListProps) => {
	return (
		<UlList>
			{items.map((item) => {
				return (
					<ListItem key={item.id}>
						<CardImageContainer>
							<Image src={item.imageUrl} alt="" />
						</CardImageContainer>
						<ComponentsContainer width="287px" margin="auto" padding="32px">
							<CustomText
								fontfamily="Inter"
								fontstyle="normal"
								fontweight="500"
								fontsize="16"
								lineheight="24"
								alignItems="center"
								color="rgba(49, 48, 55, 0.5)"
								width="123"
								textAlignt="start"
								margin="0px 0px 8px"
							>
								{item.publishedAt}
							</CustomText>
							<CustomLnk to={`/selectedpage/${item.id}`}>
								<CustomText
									fontfamily="Inter"
									fontstyle="normal"
									fontweight="600"
									fontsize="18"
									lineheight="28"
									alignItems="center"
									color="#313037"
									textAlignt="start"
								>
									{item.title}
								</CustomText>
							</CustomLnk>
						</ComponentsContainer>
					</ListItem>
				);
			})}
		</UlList>
	);
};

export default React.memo(List);
