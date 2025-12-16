import { User } from '@/entities/User';

export interface AuthStateSchema {
	access_token: string | null;
	user: User | null;
}

export interface RegisterResponse extends User {
	createdAt: string;
}

export interface RegisterQueryArgs {
	username: string;
	email: string;
	password: string;
}

export interface LoginQueryArgs {
	email: string;
	password: string;
}
