import { Global, darkMode, whiteMode } from './Styles';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

const SomeText = styled.span`
  color: ${(props: any) => props.theme.textColor};
  background-color: ${(props: any) => props.theme.backgroundColor};
`;

const App: React.FC = () => {
  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteMode}>
        <SomeText>REACT</SomeText>
      </ThemeProvider>
    </div>
  );
};

export { App };
