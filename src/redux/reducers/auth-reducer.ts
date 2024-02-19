import { useRef } from "react";
import { initialState } from "./users-reducer";

const SET_USER_DATA = "SET_USER_DATA";

type SetUserDataActionType = {
  type: "SET_USER_DATA";
  data: UserDataType;
};

type ActionsType = SetUserDataActionType;

type UserDataType = {
  userId: number;
  email: string;
  login: string;
};

export type AuthStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const authState: AuthStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = authState, action: ActionsType) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setUserData = (userId: number, email: string, login: string) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export default authReducer;
