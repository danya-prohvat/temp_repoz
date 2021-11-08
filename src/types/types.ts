export interface User {
  userName: string;
  email: string;
  id: number | null;
  avatar: string;
  fullName: string;
  profileDescription: string;
  postsCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
  token?: '';
}
