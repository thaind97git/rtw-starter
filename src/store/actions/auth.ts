import { getCurrentUser } from '@/apis/auth';
import { setLoading } from '.';
import { history } from '@/store';
import { getToken } from '@/helpers/local-storage';
import { AuthAction } from '../types/auth';
import { Dispatch } from 'redux';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const verifyToken =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    let response;
    if (!getToken()) {
      history.push('/login');
    }
    try {
      dispatch(setCurrentUser(null));
      dispatch(setLoading(true));
      dispatch(setIsAuthenticated(false));
      response = await getCurrentUser();
      dispatch(setLoading(false));
      if (response && response.data) {
        dispatch(setCurrentUser(response.data));
        dispatch(setIsAuthenticated(true));
      }
    } catch (error) {
      dispatch(setLoading(false));
      history.push('/login');
    }
  };

export const setIsAuthenticated = (isAuthenticated = false): AuthAction => ({
  type: SET_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

export const setCurrentUser = (currentUser: object | any): AuthAction => ({
  type: SET_CURRENT_USER,
  payload: currentUser,
});
