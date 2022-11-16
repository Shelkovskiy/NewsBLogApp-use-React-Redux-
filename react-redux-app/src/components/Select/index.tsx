import React from "react";
import styled from "styled-components";
import { DEVICE } from "../../constants";

interface ISelectProps {
	option: { label: string; value: string }[];
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Options = styled.option`
	font-size: 16px;
	font-family: "Inter";
	color: #313037;
`;

const CustomSelect = styled.select`
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 500;
	color: #444;
	line-height: 24px;
	padding: 16px;
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px "rgba(49, 48, 55, 1)";
	border-radius: 8px;
	appearance: none;
	background-color: #fff;
	background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
		linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right 11px top 50%, 0 0;
	background-size: 10px auto, 100%;

	@media ${DEVICE.desktop} {
		max-width: 256px;
	}

	@media ${DEVICE.tablet} {
		max-width: 328px;
	}

	@media ${DEVICE.mobile} {
		max-width: 272px;
	}
`;

const Select = ({ option, onChange, value }: ISelectProps) => {
	return (
		<CustomSelect value={value} onChange={onChange}>
			{option.map((item) => {
				return (
					<Options key={item.value} value={item.value}>
						{item.label}
					</Options>
				);
			})}
		</CustomSelect>
	);
};

export default React.memo(Select);
