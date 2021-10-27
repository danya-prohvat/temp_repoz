import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CommonLayout } from 'components/layout/commonLayout';
import { Authorize } from 'components/layout/authorize';
import { PrivateRoute } from './privateRouter';
import { Main } from 'components/layout/main';
import { Page404 } from 'components/layout/page404';
import { links } from './locations';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={links.home} exact>
        <PrivateRoute>
          <CommonLayout>
            <Main>some content</Main>
          </CommonLayout>
        </PrivateRoute>
      </Route>
      <Route path={links.signIn}>
        <CommonLayout>
          <Authorize authorizeType="Sign In"></Authorize>
        </CommonLayout>
      </Route>
      <Route path={links.signUp}>
        <CommonLayout>
          <Authorize authorizeType="Sign Up"></Authorize>
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
