import { ThemeProvider } from '@emotion/react';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { Router } from 'routing/router';
import 'assets/fonts/icons/style.css';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export { App };
