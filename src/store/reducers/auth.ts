import { SET_AUTHENTICATED, SET_CURRENT_USER } from '../actions/auth';
import { AuthAction, IAuth } from '../types/auth';

const initialState: IAuth = {
  isAuthenticated: false,
  currentUser: null,
};

export default (state = initialState, action: AuthAction): IAuth => {
  const { type, payload }: { type: string; payload: IAuth } = action;

  switch (type) {
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: payload.isAuthenticated };

    case SET_CURRENT_USER:
      return { ...state, currentUser: payload.currentUser };

    default:
      return { ...state };
  }
};
