import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { useTranslation } from 'react-i18next';

const SomeText = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  font-size: 36px;
`;

const SomeDescription = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  font-size: 20px;
`;

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <SomeText>
          {t('Title')}
          <br />
        </SomeText>
        <SomeDescription>{t('Description')}</SomeDescription>
        <br /> {process.env.REACT_APP_USE_MOCK}
        <br /> {process.env.REACT_APP_API_BASE_URL}
        <br /> {process.env.REACT_APP_API_DELAY}
      </ThemeProvider>
    </div>
  );
};

export { App };
