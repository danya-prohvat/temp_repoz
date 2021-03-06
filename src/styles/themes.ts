export const typography = {
  body1: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '22px',
  },
  body2: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '24px',
  },
  heading1Bold: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '42px',
  },
  body1Bold: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '22px',
  },
  body2Bold: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '24px',
  },
  body3Bold: {
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: '26px',
  },
  heading2: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '42px',
  },
  heading3: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '42px',
  },
  heading4: {
    fontSize: '44px',
    fontWeight: 'bold',
    lineHeight: '56px',
  },
  button1: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  label1: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '22px',
  },
  caption2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '16px',
  },
};

const darkTheme = {
  colors: {
    textColor: {
      black: '#282828',
      white: '#FFFFFF',
      blue: '#6E71F8',
      red: '#F34E4E',
      gray: '#DEDEDE',
    },
    backgroundColor: {
      lightGray: '#F3F3F3',
      darkGray: '#D0D0D0',
      whiteGray: '#E8E8E8',
      transparentGray: 'rgba(0, 0, 0, 0.6)',
      darkWhite: '#F9F9F9',
      red: '#F34E4E',
      blue: '#7BB9FA',
      primary: '#F34E4E',
      secondary: '#7BB9FA',
      light: '#FFFFFF',
      white: '#FFFFFF',
      lightPink: '#F8D3D3',
      beige: '#FEEFDA',
      lightBeige: '#FFF6EA',
      transparent: 'rgba(0, 0, 0, 0)',
      modalTransparent: 'rgba(78, 78, 78, 0.85)',
    },
    borderColor: {
      gray: '#DEDEDE',
      darkGray: '#979797',
      red: '#F34E4E',
    },
  },
  shadows: {
    boxShadows: {
      selectShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
    },
  },
  typography: typography,
};

const whiteTheme: Theme = {
  colors: {
    textColor: {
      black: '#282828',
      white: '#FFFFFF',
      blue: '#6E71F8',
      red: '#F34E4E',
      gray: '#DEDEDE',
    },
    backgroundColor: {
      lightGray: '#F3F3F3',
      darkGray: '#D0D0D0',
      whiteGray: '#E8E8E8',
      transparentGray: 'rgba(0, 0, 0, 0.6)',
      darkWhite: '#F9F9F9',
      red: '#F34E4E',
      blue: '#7BB9FA',
      primary: '#F34E4E',
      secondary: '#7BB9FA',
      light: '#FFFFFF',
      white: '#FFFFFF',
      lightPink: '#F8D3D3',
      beige: '#FEEFDA',
      lightBeige: '#FFF6EA',
      transparent: 'rgba(0, 0, 0, 0)',
      modalTransparent: 'rgba(78, 78, 78, 0.85)',
    },
    borderColor: {
      gray: '#DEDEDE',
      darkGray: '#979797',
      red: '#F34E4E',
    },
  },
  shadows: {
    boxShadows: {
      selectShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
    },
  },
  typography: typography,
};

export type Theme = typeof darkTheme;

export { darkTheme, whiteTheme };
