import { Theme } from './typing/emotion.d';
const darkTheme = {
  colors: {
    textColor: 'gray',
    backgroundColor: 'black',
  },
};

const whiteTheme = {
  colors: {
    textColor: 'white',
    backgroundColor: 'gray',
  },
};

export type Theme = {
  theme: Partial<typeof darkTheme>;
};

export { darkTheme, whiteTheme };
