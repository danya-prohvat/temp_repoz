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
};