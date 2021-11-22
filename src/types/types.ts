export interface Pearson {
  id: number;
  userName: string;
  description: string;
  avatar: string;
}
export interface User {
  userName: string;
  email: string;
  id: number | null;
  avatar: string | null;
  firstName: string;
  lastName: string;
  profileDescription: string;
  postsCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
  privateProfile: boolean;
  allowComments: boolean;

  subscribers: Pearson[];
  subscriptions: Pearson[];
}
