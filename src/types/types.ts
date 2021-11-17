export interface User {
  userName: string;
  email: string;
  id: number | null;
  avatar: string;
  firstName: string;
  lastName: string;
  profileDescription: string;
  postsCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
  privateProfile: boolean;
  allowComments: boolean;
}
