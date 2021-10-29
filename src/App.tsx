import { ThemeProvider } from '@emotion/react';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { Router } from 'routing/router';
import { useEffect } from 'react';
import { enableMock } from 'api/enableMock';
import { ToastContainer } from 'react-toastify';
import { config } from 'config/index';
import 'assets/fonts/icons/style.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  useEffect(() => {
    if (config.env.useMock) enableMock();
  }, []);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export { App };
