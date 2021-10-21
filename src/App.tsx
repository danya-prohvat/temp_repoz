import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { useTranslation } from 'react-i18next';
import { config } from 'config/index';
import { Main } from 'components/layout/main';

const App: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <Main />
      </ThemeProvider>
    </div>
  );
};

export { App };
