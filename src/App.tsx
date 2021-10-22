import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { changeUserName } from 'store/UserReducer';

const App: React.FC = () => {
  const { userName } = useTypedSelector((state) => state.UserSlice);
  const dispatch = useDispatch();

  const changeUserNameOnClick = () => {
    dispatch(changeUserName('some userName'));
  };

  return (
    <div>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        {userName}
        <br />
        <button onClick={changeUserNameOnClick}>change UserName</button>
        <br />
      </ThemeProvider>
    </div>
  );
};

export { App };
