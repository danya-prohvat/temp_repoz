export const apiUrls = {
  getVersion: {
    url: '/version',
  },
  getUser: {
    url: '/user/:userId',
    regexp: /user\/d+$/,
  },
  patchUser: {
    url: '/user/:userId',
    regexp: /user\/d+$/,
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
  verifyUser: {
    url: '/auth/verify',
  },
  getMe: {
    url: '/auth/me',
  },
  getPosts: {
    url: '/user/w',
  },
};
