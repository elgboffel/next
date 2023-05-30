﻿import { style } from "@vanilla-extract/css";
import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/config/contract.css";

const { color, space } = vars;
export const selectTrigger = style([
	{
		lineHeight: 1,
		gap: "5px",
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: space.sm,
		paddingRight: space.sm,
		border: `1px solid ${color.dimmed}`,
		":hover": {
			background: `${color.secondary}`,
		},
		":focus": {
			border: `1px solid ${color.secondary}`,
		},
		selectors: {
			"&[data-placeholder]": { color: `${color.secondary}` },
		},
	},
	sprinkles({
		all: "unset",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "m",
		fontSize: "sm",
		height: 3,
		color: "text",
	}),
]);

export const selectIcon = style({
	color: `${color.primary}`,
});

export const selectContent = style({
	overflow: "hidden",
	background: `${color.white}`,
	borderRadius: "m",
	boxShadow: `0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)`,
});

export const selectViewport = sprinkles({
	paddingTop: "sm",
	paddingBottom: "sm",
});

export const selectItem = style(
	{
		lineHeight: 1,
		userSelect: "none",
		selectors: {
			"&[data-disabled]": { color: `${color.dimmed}`, pointerEvents: "none" },
			"&[data-highlighted]": { background: `${color.dimmed}`, pointerEvents: "none" },
		},
	},
	sprinkles({
		position: "relative",
		display: "flex",
		alignItems: "center",
		fontSize: "sm",
		color: `primary`,
		borderRadius: "sm",
		height: 6,
		paddingTop: 0,
		paddingRight: 8,
		paddingBottom: 0,
		paddingLeft: 6,
	})
);

export const selectLabel = style(
	{
		lineHeight: "25px",
	},
	sprinkles({
		paddingTop: 0,
		paddingRight: 6,
		paddingBottom: 0,
		paddingLeft: 6,
		fontSize: "sm",
		color: "text",
	})
);

export const selectSeparator = style(
	{
		height: "1px",
	},
	sprinkles({
		background: "dimmed",
		marginTop: 1,
		marginRight: 1,
		marginBottom: 1,
		marginLeft: 1,
	})
);

export const selectItemIndicator = sprinkles({
	position: "absolute",
	left: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: 6,
});

export const selectScrollButton = style([
	{
		cursor: "default",
	},
	sprinkles({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 6,
		background: "white",
		color: "dimmed",
	}),
]);

export const variantBase = style([
	{
		letterSpacing: "1px",
		outline: "0",
		border: "1px solid black",
		cursor: "pointer",
		position: "relative",
		backgroundColor: "rgba(0, 0, 0, 0)",
		userSelect: "none",
		WebkitUserSelect: "none",
		touchAction: "manipulation",
		color: "white",
		":after": {
			content: '""',
			backgroundColor: `${color.dimmed}`,
			width: "100%",
			zIndex: -1,
			position: "absolute",
			height: "100%",
			top: "7px",
			left: "7px",
			transition: "0.2s",
		},
		selectors: {
			"&:hover:after": {
				top: "0px",
				left: "0px",
			},
		},
	},
	sprinkles({
		paddingTop: 3,
		paddingRight: 4,
		paddingBottom: 3,
		paddingLeft: 4,
		fontSize: "md",
	}),
]);

export const variantBaseChosen = style([
	variantBase,
	{
		color: `${color.white}`,
		":after": {
			top: "0px",
			left: "0px",
			backgroundColor: `${color.dimmed}`,
		},
	},
]);
