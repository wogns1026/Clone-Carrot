const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

const colors = {
  black: "#000000",
  blue: "#1d74e9",
  red: "#E3393C",
  carrot: "#FF8A3D",
  grey: "rgba(255, 255, 255, 0.5)",
  darkGrey: "rgba(255, 255, 255, 0.3)",
  deepDarkgrey: "#495057",
  lightDark: "rgba(0,0,0,0.1)",
  Dark: "rgba(0,0,0,0.5)",
};
// 16px 700 underline
//
const common = {
  fullSize: `
  width: 100%;
  height: 100%;
  `,
  absolute: `
  position: absolute;
  top:0;
 `,
  fixed: `
  position: fixed;
  top: 0;
  z-index: 1;
 `,
  verticalMargin: (vMargin) => `
  margin-top: ${vMargin};
  margin-bottom: ${vMargin};
 `,
  horizontalMargin: (hMargin) => `
  margin-left: ${hMargin};
  margin-right:${hMargin};
`,
  marginBottom: (bMargin) => `
  margin-bottom: ${bMargin};
  `,
  marginTop: (tMargin) => `
  margin-Top: ${tMargin};
  `,
};
const text = {
  ...common,
  underline: `
  text-decoration: underline;
`,
};
const button = {
  ...common,
  point: colors.blue,
};
const box = {
  ...common,
  shadow: `0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)`,
  linearGradient: ` background: linear-gradient(rgba(255, 255, 255, 0.01), rgba(0, 0, 0, 0.4));`,
};
const flex = {
  ...common,
  center: `
  display: flex;
  justify-content: center;
  align-items: center;
  `,
  column: `
  display: flex;
  flex-direction : column;
`,
  spaceBetween: `
  display: flex;
  justify-content: space-between;
  `,
  flexJustify: (justify) => `
  display: flex;
  justify-content: ${justify};
  `,
  flexAlign: (align) => `
  display: flex;
  align-items: ${align};
`,
};
const background = {
  ...common,
  center: `
  background-size: cover;
  background-position: center center;
  `,
};
const image = {
  ...common,
  round: `
  border-radius: "50%";
  `,
};

const theme = {
  fontSizes,
  colors,
  flex,
  box,
  button,
  background,
  image,
  text,
};

export default theme;
