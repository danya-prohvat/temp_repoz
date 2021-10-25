import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Global } from 'styles/Styles';
import { whiteTheme } from 'styles/themes';
import { useSelector } from 'hooks/useTypedSelector';
import { changeUserName, getUserName } from 'store/UserSlice';
import { toggleSideBar, getVisibilitySideBar } from 'store/UiSlice';

const App: React.FC = () => {
  const userName = getUserName(useSelector((state) => state));
  const showSideBar = getVisibilitySideBar(useSelector((state) => state));
  const dispatch = useDispatch();

  const toggleSideBarOnClick = () => {
    dispatch(toggleSideBar());
  };

  const inputOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeUserName(event.currentTarget.value));
  };

  return (
    <>
      <Global />
      <ThemeProvider theme={whiteTheme}>
        {userName}
        <br />
        <input type="text" onChange={inputOnChange} />
        <br />
        <button onClick={toggleSideBarOnClick}>{showSideBar ? 'hide' : 'show'} SideBar</button>
        <br />
      </ThemeProvider>
    </>
  );
};

export { App };
