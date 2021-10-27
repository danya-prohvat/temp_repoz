import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CommonLayout } from 'components/layout/commonLayout';
import { useSelector } from 'hooks/useTypedSelector';
import { checkAuthorization } from 'store/UserSlice';
import { Authorize } from 'components/layout/authorize';
import { Main } from 'components/layout/main';
import { Page404 } from 'components/layout/page404';
import { links } from './locations';

export const Router: React.FC = () => {
  const isAuthorized = useSelector(checkAuthorization);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={links.signIn}>
          {isAuthorized && <Redirect to={links.home} />}
          <CommonLayout>
            <Authorize authorizeType="Sign In"></Authorize>
          </CommonLayout>
        </Route>
        <Route path={links.signUp}>
          {isAuthorized && <Redirect to={links.home} />}
          <CommonLayout>
            <Authorize authorizeType="Sign Up"></Authorize>
          </CommonLayout>
        </Route>
        <Route path={links.home}>
          {!isAuthorized && <Redirect to={links.signIn} />}
          <CommonLayout>
            <Main>some content</Main>
          </CommonLayout>
        </Route>
        <Route path="*">
          <CommonLayout>
            <Page404 />
          </CommonLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
