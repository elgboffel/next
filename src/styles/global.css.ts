import { globalStyle } from "@vanilla-extract/css";
import { vars } from "@styles/config/contract.css";

globalStyle(`*, ::before, ::after`, {
	boxSizing: `border-box`,
	margin: 0,
});

globalStyle(`body`, {
	height: `100%`,
	WebkitFontSmoothing: `antialiased`,
	margin: 0,
	padding: 0,
	border: 0,
	minWidth: 0,
	boxSizing: "border-box",
	font: "inherit",
	verticalAlign: "baseline",
	fontFamily: vars.font.text,
	fontSize: vars.fontSize.text,
	color: vars.color.black,
	fontWeight: vars.fontWeight.normal,
	lineHeight: vars.lineHeight.text,
	letterSpacing: vars.letterSpacing.text,
	textSizeAdjust: "100%",
});

globalStyle(`img, picture, video, canvas, svg`, {
	display: `block`,
	maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
	font: `inherit`,
	background: 0,
	border: 0,
	WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
	overflowWrap: `break-word`,
});

globalStyle(`#root`, {
	isolation: `isolate`,
});

globalStyle("ul, ol", {
	listStyle: "none",
	margin: 0,
	padding: 0,
});
