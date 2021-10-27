import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CommonLayout } from 'components/layout/commonLayout';
import { Authorize } from 'components/layout/authorize';
import { PrivateRoute } from './privateRouter';
import { Main } from 'components/layout/main';
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
          <div>404 - page not found</div>
        </CommonLayout>
      </Route>
    </Switch>
  </BrowserRouter>
);
