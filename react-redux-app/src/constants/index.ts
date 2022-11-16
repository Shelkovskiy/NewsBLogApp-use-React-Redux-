// pagination constants
export const PAGE_SIZE: number = 12;
export const SIBLING_COUNT: number = 2;

// media queries
interface IDevice {
	mobile: string;
	tablet: string;
	desktop: string;
}

export const SIZE = {
	mobile: "320px",
	tablet: "768px",
	desktop: "1920px",
};

export const DEVICE: IDevice = {
	mobile: `(max-width:${SIZE.mobile})`,
	tablet: `(max-width:${SIZE.tablet})`,
	desktop: `(max-width:${SIZE.desktop})`,
};

// option
export const OPTION = [
	{ label: "Default Posts", value: "id" },
	{ label: "Title (A-Z)", value: "title" },
	{ label: "Description (A-Z)", value: "summary" },
];

// sort item
export const SortItemArr: string[] = ["Day", "Week", "Monath", "Year"];

export const SORT_OPTION = [
	{ label: "Data:Day", value: "DAY" },
	{ label: "Data:Week", value: "Week" },
	{ label: "Data:Monath", value: "Monath" },
	{ label: "Data:Yeary", value: "Year" },
];
