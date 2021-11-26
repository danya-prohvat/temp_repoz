export interface Pearson {
  id: number;
  userName: string;
  description: string;
  avatar: string;
}

export interface SavedPosts {
  id: number;
  likesCount: number;
  commentsCount: number;
  src: string;
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
  savedPostsCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
  privateProfile: boolean;
  allowComments: boolean;
  actualToken: boolean | null;

  subscribers: Pearson[];
  subscriptions: Pearson[];
  savedPosts: SavedPosts[];
}
