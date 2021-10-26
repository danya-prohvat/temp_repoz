import { ThemeProvider } from '@emotion/react';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { Main } from 'components/layout/main';
import { CommonLayout } from 'components/layout/commonLayout';
import { Router } from 'routing/router';
import 'assets/fonts/icons/style.css';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <CommonLayout>
          <Main>som text from App.ts</Main>
        </CommonLayout>
        <Router />
      </ThemeProvider>
    </>
  );
};

export { App };
