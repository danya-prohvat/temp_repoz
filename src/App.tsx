import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { changeUserName } from 'store/UserSlice';

const App: React.FC = () => {
  const { userName } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const changeUserNameOnClick = () => {
    dispatch(changeUserName('some userName'));
  };

  return (
    <>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        {userName}
        <br />
        <button onClick={changeUserNameOnClick}>change UserName</button>
        <br />
      </ThemeProvider>
    </>
  );
};

export { App };
