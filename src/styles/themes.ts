const darkTheme = {
  colors: {
    textColor: 'gray',
    backgroundColor: 'black',
  },
};

const whiteTheme: Theme = {
  colors: {
    textColor: 'white',
    backgroundColor: 'gray',
  },
};

export type Theme = typeof darkTheme;

export { darkTheme, whiteTheme };
