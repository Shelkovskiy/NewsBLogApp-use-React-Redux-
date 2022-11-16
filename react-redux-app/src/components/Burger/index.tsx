import React from "react";
import styled from "styled-components";

export const StyledBurger = styled.button`
	align-items: center;
	position: absolute;
	left: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}

	span {
		width: 2rem;
		height: 0.25rem;
		background: black;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}
`;

interface IBurgerProps {}

const Burger = () => {
	return (
		<StyledBurger>
			<span></span>
			<span></span>
			<span></span>
		</StyledBurger>
	);
};

export default Burger;
