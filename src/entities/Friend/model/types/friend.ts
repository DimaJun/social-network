import { Profile } from '@/entities/Profile/model/types/profile';

export type FriendProfileCard = Omit<Profile, 'age' | 'nationality'>;
