import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from './styles/Styles';
import { darkTheme, whiteTheme, Theme } from './styles/themes';

const SomeText = styled.span`
  color: ${(props: Theme) => props.theme?.colors?.textColor};
  background-color: ${(props: Theme) => props.theme?.colors?.backgroundColor};
`;

const App: React.FC = () => {
  return (
    <div>
      <Global />
      <ThemeProvider theme={darkTheme}>
        <SomeText>REACT fd</SomeText>
      </ThemeProvider>
    </div>
  );
};

export { App };
