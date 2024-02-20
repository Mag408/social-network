import { useRef } from "react";
import { initialState } from "./users-reducer";
import { authAPI } from "../../api/api";
import { Dispatch } from "redux";

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

//thunks
export const getUserDataTC = () => {
  return (dispatch: Dispatch) => {
    authAPI.me().then((res) => {
      if (res.data.resultCode === 0) {
        const { id, email, login } = res.data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};
