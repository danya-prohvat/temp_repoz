import MockAdapter from 'axios-mock-adapter';
import { omit } from 'lodash';
import { config } from 'config';
import { apiUrls } from './urls';
import { instance } from './apiClient';
import { version, users, posts } from './mocks';

export const enableMock = (): void => {
  const mock = new MockAdapter(instance, { delayResponse: config.env.apiDelay });

  mock.onGet(apiUrls.getVersion.url).reply(() => {
    return [200, version];
  });

  mock.onGet(apiUrls.verifyUser.url).reply((config) => {
    const user = users.find((user) => user.token === config.headers?.Authorization.split(' ')[1]);
    if (user) return [200];

    return [401];
  });

  mock.onGet(apiUrls.getMe.url).reply((config) => {
    const user = users.find((user) => user.token === config.headers?.Authorization.split(' ')[1]);
    if (user) return [200, omit(user, ['password', 'posts'])];

    return [401];
  });

  mock.onPost(apiUrls.getPosts.regexp).reply((config) => {
    const { limit, offset } = JSON.parse(config.data);
    const userId = config.url?.split('/')[1];

    const post = posts.filter((post) => post.userId === Number(userId))[0];

    if (post && !(offset > Math.ceil(post.totalPosts / limit)))
      return [200, post.posts?.filter((post, index) => index >= limit * offset - limit && index < limit * offset)];

    return [401];
  });

  mock.onPost(apiUrls.signIn.url).reply((config) => {
    const data = JSON.parse(config.data);

    const user = users.find((user) => user.email === data.email && user.password === data.password);
    if (user) return [200, omit(user, ['password', 'posts'])];

    return [401];
  });

  mock.onPost(apiUrls.signUp.url).reply((config) => {
    const data = JSON.parse(config.data);

    if (data.email === 'test@gmail.com') return [400, 'bad request'];

    return [201, { ...omit(data, ['password', 'posts']), token: 'token3534' }];
  });

  mock.onPost(apiUrls.checkNewUserName.url).reply((config) => {
    const data = JSON.parse(config.data);

    if (!users.find((user) => user.userName === data.userName)) return [200, `such user name isn't exist`];

    return [400, 'such user name is exist'];
  });
};
