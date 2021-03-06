export const apiUrls = {
  getVersion: {
    url: '/version',
  },
  getUser: {
    url: 'user/:userId',
    regexp: /user\/\d+$/,
  },
  patchUser: {
    url: 'user/:userId',
    regexp: /user\/\d+$/,
  },
  deleteUser: {
    url: '/user/:userId',
    regexp: /user\/d+$/,
  },
  signIn: {
    url: '/user/sign-in',
  },
  signUp: {
    url: '/user/sign-up',
  },
  checkNewUserName: {
    url: '/user/check-new-user-name',
  },
  updatePassword: {
    url: 'users/:userId/new-password',
    regexp: /users\/\d+\/new-password$/,
  },
  verifyUser: {
    url: '/auth/verify',
  },
  getMe: {
    url: '/auth/me',
  },
  getPosts: {
    url: 'user/:userId/posts',
    regexp: /user\/\d+\/posts$/,
  },
  getPost: {
    url: 'posts/:userId/:postId',
    regexp: /posts\/\d+\/\d+$/,
  },
  getLikes: {
    url: 'users/:userId/posts/:postId/likes',
    regexp: /users\/\d+\/posts\/\d+\/likes$/,
  },
  getSubscribers: {
    url: 'user/:userId/subscribers',
    regexp: /user\/\d+\/subscribers$/,
  },
  getSubscriptions: {
    url: 'user/:userId/subscriptions',
    regexp: /user\/\d+\/subscriptions$/,
  },
  getSavedPosts: {
    url: 'user/:userId/saved-posts',
    regexp: /user\/\d+\/saved-posts$/,
  },
};
