import { Global as EmotionGlobal, css } from '@emotion/react';

const Global: React.FC = () => {
  return (
    <EmotionGlobal
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;700&display=swap');

        @font-face {
          font-family: 'icomoon';
          src: url('assets/fonts/icons/icomoon.eot');
          src: url('assets/fonts/icons/icomoon.eot') format('embedded-opentype'),
            url('assets/fonts/icons/icomoon.ttf') format('truetype'),
            url('assets/fonts/icons/icomoon.woff') format('woff'), url('assets/fonts/icons/icomoon.svg') format('svg');
          font-weight: normal;
          font-style: normal;
          font-display: block;
        }

        * {
          font-family: 'Montserrat';
        }

        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
  );
};

export { Global };
