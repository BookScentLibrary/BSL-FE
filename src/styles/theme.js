const colors = {
  //font
  main: '#F35F4C',
  primary: '#F35F4C',
  default: '#1A202C', //font default color
  second: '#0047FF',

  sub01: '#FEBFB7',
  sub02: '#FFDFDB',
  sub03: '#FFEAE8',

  subTitle: '#666',
  blueTitle: '#718AFF',
  blueBanner: '#B9EAFF',
  borderColor: '#e1e1e1',
  hoverMain: '#00a18d',
  buttonText: '#fff',
  grayText: '#333',

  black: '#000000',
  white: '#ffffff',

  gray90: '#252525',
  gray80: '#6A6A6A',
  gray70: '#9A9A9A',
  gray60: '#BCBCBC',
  gray50: '#DBFBFB',
  gray40: '#E9E9E9',
  gray30: '#D3D6D5',
  gray20: '#F8F8F8',
  gray10: '#FBFBFB',

  coolgray900: '#111827',
  coolgray800: '#1f2937',
  coolgray700: '#4b5563',
  coolgray500: '#6b7280',
  coolgray400: '#9CA3AF',
  coolgray300: '#D1D5DB',
  coolgray200: '#E5E7EB',
  coolgray100: '#F3F4F6',
  coolgray50: '#FAFAFA',
};

const fontSizes = {
  title: '40px',
  xxlarge: '32px',
  xlarge: '24px',
  large: '20px',
  regular: '16px',
  small: '12px',
};

const fontWeights = {
  bold: '900',
  regular: '500',
  light: '400',
};

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '920px',
  web: '1920px',
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