export interface User {
  userName: string;
  email: string;
  avatar: string;
  fullName: string;
  profileDescription: string;
  postsCount: number | null;
  subscribersCount: number | null;
  subscriptionsCount: number | null;
}
