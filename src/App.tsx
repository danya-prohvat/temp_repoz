import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { config } from 'config/index';
import { Main } from 'components/layout/main';

const App: React.FC = () => {
  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <Main>som text from App.ts</Main>
      </ThemeProvider>
    </div>
  );
};

export { App };
