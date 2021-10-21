import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { useTranslation } from 'react-i18next';
import { config } from 'config/index';

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
        <br /> {config.env.useMock}
        <br /> {config.env.apiBaseUrl}
        <br /> {config.env.apiDelay}
      </ThemeProvider>
    </div>
  );
};

export { App };
