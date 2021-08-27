import { ApiError } from './ApiError';

export const requestFailed = (): ApiError => new ApiError(1001, 'User request failed');
