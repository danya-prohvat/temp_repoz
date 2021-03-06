import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { Router } from 'routing/router';
import { enableMock } from 'api/enableMock';
import { ToastContainer } from 'react-toastify';
import { config } from 'config/index';
import { verifyUserThunk } from 'store/UserSlice';
import 'assets/fonts/icons/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalLoader } from 'hocs/globalLoader';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (config.env.useMock) enableMock();

    if (localStorage.getItem('token')) dispatch(verifyUserThunk());
  });

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <GlobalLoader>
          <Router />
        </GlobalLoader>
      </ThemeProvider>
    </>
  );
};

export { App };
