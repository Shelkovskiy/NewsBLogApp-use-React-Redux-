interface IDevice {
	mobile: string;
	tablet: string;
	desktop: string;
}

export const size = {
	mobile: "320px",
	tablet: "768px",
	desktop: "1920px",
};

export const device: IDevice = {
	mobile: `(max-width:${size.mobile})`,
	tablet: `(max-width:${size.tablet})`,
	desktop: `(max-width:${size.desktop})`,
};
