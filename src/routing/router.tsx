import { BrowserRouter, Switch } from 'react-router-dom';
import { CommonLayout } from 'components/layout/commonLayout';
import { Authorize } from 'components/layout/authorize';
import { Main } from 'components/layout/main';
import { Page404 } from 'components/pages/page404';
import { links } from './locations';
import { PrivateRoute } from './privateRoute';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={links.signIn}>
          <CommonLayout>
            <Authorize authorizeType="Sign In"></Authorize>
          </CommonLayout>
        </PrivateRoute>
        <PrivateRoute path={links.signUp}>
          <CommonLayout>
            <Authorize authorizeType="Sign Up"></Authorize>
          </CommonLayout>
        </PrivateRoute>
        <PrivateRoute path={links.home} exact>
          <CommonLayout>
            <Main>some content</Main>
          </CommonLayout>
        </PrivateRoute>
        <PrivateRoute path="*">
          <CommonLayout>
            <Main>
              <Page404 />
            </Main>
          </CommonLayout>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};
