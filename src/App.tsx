import { ThemeProvider } from '@emotion/react';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { Router } from 'routing/router';
import 'assets/fonts/icons/style.css';
import { useEffect } from 'react';
import { enableMock } from 'api/enableMock';
import { getRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';

const App: React.FC = () => {
  useEffect(() => {
    enableMock();

    getRequest(apiUrls.getVersion.url).then((res) => console.log(res));
  }, []);

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
