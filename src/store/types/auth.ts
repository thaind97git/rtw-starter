export interface IAuth {
  isAuthenticated?: boolean;
  currentUser?: object;
}

export type AuthAction = {
  type: string;
  payload: IAuth;
};
