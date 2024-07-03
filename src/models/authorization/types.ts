export interface AuthState {
  isLoggedIn: boolean;
}

export enum Actions {
  LOGIN = "logIn",
  LOGOUT = "logOut",
}
