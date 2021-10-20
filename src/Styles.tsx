import { Global as EmotionGlobal, css } from '@emotion/react';

const darkMode = {
  textColor: 'gray',
  backgroundColor: 'black',
};

const whiteMode = {
  textColor: 'white',
  backgroundColor: 'gray',
};

const Global: React.FC = () => {
  return (
    <EmotionGlobal
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;700&display=swap');

        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Montserrat';
        }
      `}
    />
  );
};

export { Global, darkMode, whiteMode };
