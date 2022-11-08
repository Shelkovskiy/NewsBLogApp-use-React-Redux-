import React from "react";
import styled from "styled-components";
import { device } from "../../../../../constants/size";

interface IListItem {
	children: React.ReactNode;
}

const ListItemLi = styled.li`
	cursor: pointer;
	margin-top: 40px;
	overflow: hidden;
	max-width: 352px;
	align-items: flex-start;
	padding: 0px;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	@media ${device.desktop} {
		max-width: 352px;
	}
	@media ${device.tablet} {
		max-width: 328px;
	}
	@media ${device.mobile} {
		max-width: 272px;
	}
`;

const ListItem = ({ children }: IListItem) => {
	return <ListItemLi> {children} </ListItemLi>;
};

export default ListItem;
