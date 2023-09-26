const colors = {
  primary: "#A1E092",
  secondary: "#FF9393",
  tertiary: "#86A8FE",

  black: "#000000",
  white: "#ffffff",

  lightgreen5: "#B2E6A6",
  lightgreen10: "#C3EBBA",
  lightgreen15: "#D4F1CE",
  lightgreen20: "#E5F7E1",
  lightgreen25: "#F7FCF5",

  darkgreen5: "#90DA7E",
  darkgreen10: "#7FD56A",
  darkgreen15: "#6ECF56",
  darkgreen20: "#5CC943",
  darkgreen25: "#50BD36",
  darkgreen30: "#47A930",
  darkgreen35: "#3F952A",
  darkgreen40: "#378125",
  darkgreen45: "#2E6D1F",
  darkgreen50: "#265919",
  darkgreen55: "#1D4614",
  darkgreen60: "#15320E",

  lightred5: "#FFACAC",
  lightred10: "#FFC6C6",
  lightred15: "#FFDFDF",
  lightred20: "#FFF9F9",

  darkred5: "#FF7979",
  darkred10: "#FF6060",
  darkred15: "#FF4646",
  darkred20: "#FF2D2D",
  darkred25: "#FF1313",
  darkred30: "#F90000",
  darkred35: "#DF0000",
  darkred40: "#C60000",
  darkred45: "#AC0000",
  darkred50: "#930000",
  darkred55: "#790000",
  darkred60: "#600000",

  lightblue5: "#9FBAFE",
  lightblue10: "#B9CCFE",
  lightblue15: "#D2DFFF",
  lightblue20: "#EBF1FF",

  darkblue5: "#6D96FE",
  darkblue10: "#5384FE",
  darkblue15: "#3A71FD",
  darkblue20: "#215FFD",
  darkblue25: "#084DFD",
  darkblue30: "#0243E9",
  darkblue35: "#023CD0",
  darkblue40: "#0235B6",
  darkblue45: "#012D9D",
  darkblue50: "#012684",
  darkblue55: "#011F6B",
  darkblue60: "#011851",

  gray900: "#111827",
  gray800: "#1f2937",
  gray700: "#4b5563",
  gray500: "#6b7280",
  gray400: "#9CA3AF",
  gray300: "#D1D5DB",
  gray200: "#E5E7EB",
  gray100: "#F3F4F6",
  gray50: "#FAFAFA",
};

const fontSizes = {
  largeTitle: "40px",
  title: "32px",
  xlarge: "24px",
  large: "20px",
  regular: "16px",
  small: "14px",
  xsmall: "14px",
};

const fontWeights = {
  bold: "800",
  semibold: "600",
  regular: "500",
  light: "400",
};

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "920px",
  web: "1920px",
};

const dragStyles = {
  preventDrag: `-ms-user-select: none;
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
  -webkit-user-drag: none;`,
};

const flexStyles = {
  center: `display: flex;
  align-items: center;
  justify-content: center;`,
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  web: `screen and (max-width: ${deviceSizes.web})`,
};

const theme = {
  colors,
  fontSizes,
  device,
  dragStyles,
  fontWeights,
  flexStyles,
};

export default theme;
