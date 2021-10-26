import { ThemeProvider } from '@emotion/react';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { Main } from 'components/layout/main';
import { CommonLayout } from 'components/layout/commonLayout';

const App: React.FC = () => {
  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <CommonLayout>
          <Main>som text from App.ts</Main>
        </CommonLayout>
      </ThemeProvider>
    </div>
  );
};

export { App };
