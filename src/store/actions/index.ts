import { IndexAction } from '../types';

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (isLoading: boolean): IndexAction => ({
  type: SET_LOADING,
  payload: {
    loading: isLoading,
  },
});
