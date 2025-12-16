export interface ApiError {
	data: {
		statusCode: number;
		message: string;
	};
	status: number;
}
