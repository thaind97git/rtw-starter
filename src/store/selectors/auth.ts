import { IAuth } from '../types/auth';

export const getIsAuthenticated = (state: IAuth): boolean =>
  state.isAuthenticated;

export const getCurrentUser = (state: IAuth): object => state.currentUser;
