export const typography = {
  body1: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '22px',
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
  heading2: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '42px',
  },
};

const darkTheme = {
  colors: {
    textColor: {
      black: '#282828',
    },
    backgroundColor: {
      lightGray: '#F3F3F3',
      red: '#F34E4E',
      lightPink: '#F8D3D3',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    borderColor: {
      gray: '#DEDEDE',
    },
  },
  typography: typography,
};

const whiteTheme: Theme = {
  colors: {
    textColor: {
      black: '#282828',
    },
    backgroundColor: {
      lightGray: '#F3F3F3',
      red: '#F34E4E',
      lightPink: '#F8D3D3',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    borderColor: {
      gray: '#DEDEDE',
    },
  },
  typography: typography,
};

export type Theme = typeof darkTheme;

export { darkTheme, whiteTheme };
