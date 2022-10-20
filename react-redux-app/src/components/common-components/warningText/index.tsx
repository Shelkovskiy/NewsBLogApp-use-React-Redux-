import React from "react";

interface IWarningTextProps extends React.ComponentProps<"p"> {
	children: React.ReactNode;
}

const WarningText = ({ children, ...rest }: IWarningTextProps) => {
	return <p {...rest}>{children}</p>;
};

export default WarningText;
