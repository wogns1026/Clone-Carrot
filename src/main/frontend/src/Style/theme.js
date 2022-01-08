const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};
const size = {
  window: {
    home: "1024px",
    sellerInfo: "677px",
    articleDetail: "677px",
    board: "677px",
    hotArticles: "980px",
    searchResult: "800px",
  },
};
const colors = {
  black: "#000000",
  blue: "#1d74e9",
  red: "#E3393C",
  carrot: "#FF8A3D",
  lightGreen: "#c2e8c2",
  green: "#319e45",
  lightGrey: "#F8F9FA",
  grey: "rgba(0, 0, 0, 0.05)",
  darkGrey: "#868E96",
  deepDarkgrey: "#495057",
  lightDark: "rgba(0,0,0,0.1)",
  dark: "rgba(0,0,0,0.5)",
  white: "rgba(255,255,255,1)",
};
// 16px 700 underline
//
const common = {
  fullSize: `
  width: 100%;
  height: 100%;
`,
  width: (width) => `
  width: ${width};
`,
  height: (height) => `
  height: ${height};
`,
  minWidth: (minWidth) => `
  min-width: ${minWidth};
`,
  maxWidth: (maxWidth) => `
  max-width: ${maxWidth};
`,
  minHeight: (minHeight) => `
  min-height: ${minHeight};
`,
  size: (size) => `
  width: ${size}; 
  height: ${size};
`,
  border: (color) => `
  border: 1px solid ${color};
`,
  border2x: (color) => `
  border: 2px solid ${color};
`,
  borderRadius: (radius) => `
  border-radius: ${radius};
`,
  round: `
  border-radius: 50%;
`,
  relative: `
  position: relative;
`,
  absolute: `
  position: absolute;
`,
  absoluteTop: `
  position: absolute;
  top: 0;
`,
  absoluteBottom: `
  position: absolute;
  bottom: 0;
`,
  fixed: `
  position: fixed;
  top: 0;
  z-index: 1;
`,
  left: (value) => `
  left: ${value};
`,
  verticalMargin: (vMargin) => `
  margin-top: ${vMargin};
  margin-bottom: ${vMargin};
`,
  horizontalMargin: (hMargin) => `
  margin-left: ${hMargin};
  margin-right:${hMargin};
`,
  marginTop: (tMargin) => `
  margin-top: ${tMargin};
`,
  marginRight: (rMargin) => `
  margin-right: ${rMargin};
`,
  marginBottom: (bMargin) => `
  margin-bottom: ${bMargin};
`,
  marginLeft: (lMargin) => `
  margin-left: ${lMargin};
`,
  verticalPadding: (vPadding) => `
  padding-top: ${vPadding};
  padding-bottom: ${vPadding};
`,
  horizontalPadding: (hPadding) => `
  padding-left: ${hPadding};
  padding-right:${hPadding};
`,
  opacity: (o) => `
  opacity: ${o};
`,
  color: (color) => `
  color: ${color};
`,
  bgColor: (bgColor) => `
  background-color: ${bgColor};
`,
  outline: (color) => `&:focus-within {
    outline: 1px solid ${color};
  }`,
  fontSize: (fontSize) => `
  font-size: ${fontSize};
`,
  fontWeight: (fontWeight) => `
  font-weight: ${fontWeight};
`,
  interactive: `
  &:active,
  &:hover {
    opacity: 0.6;
  }
`,
  underlineEffect: `
  border-bottom: 3px solid ${colors.carrot}};
`,
  shadow: `
  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)
`,
  bottomShadow: (color) => `
  box-shadow: 0px 8px ${color};
`,
  linearGradient: (colors) => `
  background: linear-gradient(${colors.join(",")});
`,
  crossLinearGradient: (colors) => `
  background: linear-gradient(135deg, ${colors.join(",")});
`,
  textCenter: `
  text-align: center;
`,
  clickIgnore: `
  pointer-events: none;
`,
};
const text = {
  ...common,
  underline: `
  text-decoration: underline;
`,
  notOverflow: `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,
  lineHeight: (lineHeight) => `
  line-height: ${lineHeight};
`,
  whiteSpace: (whiteSpace) => `
  white-space: ${whiteSpace};
`,
};
const button = {
  ...common,
  point: colors.blue,
};
const box = {
  ...common,
};
const flex = {
  ...common,
  center: `
  justify-content: center;
  align-items: center;
`,
  column: `
  flex-direction : column;
`,
  flexDirection: (dir) => `
  flex-direction: ${dir};
`,
  spaceBetween: `
  justify-content: space-between;
`,
  flexJustify: (justify) => `
  justify-content: ${justify};
`,
  flexAlign: (align) => `
  align-items: ${align};
`,
  gap: (gap) => `
  gap: ${gap};
`,
  wrap: `
  flex-wrap: wrap;
`,
};
const image = {
  ...common,
  reverse: `
  transform: scaleX(-1);
  `,
  center: `
  background-size: cover;
  background-position: center center;
`,
};
const input = {
  ...common,
};

const theme = {
  fontSizes,
  colors,
  size,
  flex,
  box,
  button,
  image,
  text,
  input,
};

export default theme;
