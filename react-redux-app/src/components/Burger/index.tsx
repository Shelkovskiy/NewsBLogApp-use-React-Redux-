import React from "react";
import styled from "styled-components";

export const StyledBurger = styled.button`
	width: 70px;
	height: 20px;
	background: transparent;
	box-shadow: none;
	padding: 0;
	border-style: solid;
	border-color: gray transparent;
	border-width: 2px 0;
	position: relative;
	transition: all 0.2s ease-in-out;
	&::after,
	&::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -1px;
		height: 2px;
		background: gray;
		transition: all 0.2s ease-in-out;
	}
	&.active,
	&:hover {
		border-color: transparent;
		&::after {
			transform: rotate(-45deg);
		}
		&::before {
			transform: rotate(45deg);
		}
	}
`;

const Burger = () => {
	return <StyledBurger></StyledBurger>;
};

export default Burger;
