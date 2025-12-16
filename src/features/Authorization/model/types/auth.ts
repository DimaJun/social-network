import { User } from '@/entities/User';

export interface AuthStateSchema {
	access_token: string | null;
	user: User | null;
}

export interface RegisterQueryArgs {
	username: string;
	email: string;
	password: string;
}
