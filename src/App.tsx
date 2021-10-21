import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { env, Global, whiteTheme, useTranslation } from 'config/index';

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
        <br /> {env.useMock}
        <br /> {env.apiBaseUrl}
        <br /> {env.apiDelay}
      </ThemeProvider>
    </div>
  );
};

export { App };
