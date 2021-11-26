import MockAdapter from 'axios-mock-adapter';
import { omit, pick } from 'lodash';
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
    if (user) return [200, omit(user, ['password', 'subscribers', 'subscriptions'])];

    return [401];
  });

  mock.onGet(apiUrls.getUser.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];

    const user = users.find((user) => user.id === Number(userId));
    if (user) return [200, pick(user, ['userName', 'avatar', 'id', 'subscribers'])];

    return [400];
  });

  mock.onPatch(apiUrls.patchUser.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];
    // TODO: why its string

    if (typeof config.data === 'object') {
      const user = users.find((user) => user.id === Number(userId));
      if (user)
        return [
          200,
          {
            ...user,
            avatar:
              'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png',
          },
        ];
    } else {
      const data = JSON.parse(config.data);
      const user = users.find((user) => user.id === Number(userId));
      if (user) {
        return [200, { ...omit(user, ['password', 'subscribers', 'subscriptions']), ...data }];
      }
    }

    return [400];
  });

  mock.onGet(apiUrls.getPosts.regexp).reply((config) => {
    const { limit, offset } = config.params;
    const userId = config.url?.split('/')[1];

    const post = posts.find((post) => post.userId === Number(userId));

    if (post && !(offset > Math.ceil(post.total / limit)))
      return [200, post.posts.slice(limit * offset - limit, limit * offset)];

    return [401];
  });

  mock.onGet(apiUrls.getLikes.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];
    const postId = config.url?.split('/')[3];

    const allPost: any = posts.find((post) => post.userId === Number(userId));
    if (allPost) {
      const post = allPost.posts.find((post: { id: number }) => post.id === Number(postId));
      return [200, post.likes];
    }

    return [400];
  });

  mock.onGet(apiUrls.getPost.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];
    const postId = config.url?.split('/')[2];
    // TODO: TS
    const allPost: any = posts.find((post) => post.userId === Number(userId));
    if (allPost) {
      const post = allPost.posts.find((post: { id: number }) => post.id === Number(postId));
      return [200, { ...post, authorId: allPost.userId }];
    }

    return [400];
  });

  mock.onPost(apiUrls.signIn.url).reply((config) => {
    const data = JSON.parse(config.data);

    const user = users.find((user) => user.email === data.email && user.password === data.password);
    if (user) return [200, omit(user, ['password', 'subscribers', 'subscriptions'])];

    return [401];
  });

  mock.onPost(apiUrls.signUp.url).reply((config) => {
    const data = JSON.parse(config.data);

    if (data.email === 'test@gmail.com') return [400, 'bad request'];

    return [201, { ...omit(data, ['password']), token: 'token3534' }];
  });

  mock.onPost(apiUrls.checkNewUserName.url).reply((config) => {
    const data = JSON.parse(config.data);

    if (!users.find((user) => user.userName === data.userName)) return [200, `such user name isn't exist`];

    return [400];
  });

  mock.onPost(apiUrls.updatePassword.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];
    const data = JSON.parse(config.data);

    const user = users.find((user) => user.id === Number(userId));
    if (user && user.password === data.currentPassword) return [200, 'Your password was changed'];

    return [400];
  });

  mock.onGet(apiUrls.getSubscribers.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];
    const { search } = config.params;

    const user = users.find((user) => user.id === Number(userId));
    if (user) {
      if (search) {
        return [200, user.subscribers.filter((subscriber) => subscriber.userName.includes(search))];
      } else return [200, user.subscribers];
    }

    return [404];
  });

  mock.onGet(apiUrls.getSubscriptions.regexp).reply((config) => {
    const userId = config.url?.split('/')[1];
    const { search } = config.params;

    const user = users.find((user) => user.id === Number(userId));
    if (user) {
      if (search) {
        return [200, user.subscriptions.filter((subscription) => subscription.userName.includes(search))];
      } else return [200, user.subscriptions];
    }

    return [404];
  });
};
