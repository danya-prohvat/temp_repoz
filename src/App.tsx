import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';

const SomeText = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

const App: React.FC = () => {
  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        <SomeText>REACT fd</SomeText>
      </ThemeProvider>
    </div>
  );
};

export { App };
