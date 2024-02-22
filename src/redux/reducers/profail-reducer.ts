import { Dispatch } from "redux";
import { profailAPI, userApi } from "../../api/api";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";

export type AddPostActionType = {
  type: "ADD_POST";
};

export type NewPostChangeActionType = {
  type: "UPDATE_NEW_POST_TEXT";
  postText: string;
};

export type SetUsrerProfileType = {
  type: "SET_USER_PROFILE";
  profile: any; //TODO дописать тип profile вместо any
};

export type SetStatusType = {
  type: "SET_STATUS";
  status: string;
};

export type ActionsType =
  | AddPostActionType
  | NewPostChangeActionType
  | SetUsrerProfileType
  | SetStatusType;

export type PostDataType = {
  message: string;
};

export type ProfileStateType = {
  postsData: PostDataType[];
  newPostText: string;
  profile: any; //TODO дописать тип profile вместо any
  status: string;
};

const postsData: PostDataType[] = [
  { message: "Privet Nikolay" },
  { message: "Poshol nah" },
];

const initialState: ProfileStateType = {
  postsData: [...postsData],
  newPostText: "",
  profile: null,
  status: "your status",
};

export const profailReducer = (
  state: ProfileStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
      };

      const StateCopy = {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };

      return StateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const StateCopy = { ...state };

      StateCopy.newPostText = action.postText;
      return StateCopy;
    }
    case SET_USER_PROFILE: {
      const StateCopy = { ...state, profile: action.profile };

      return StateCopy;
    }
    case SET_STATUS: {
      const StateCopy = { ...state, status: action.status };

      return StateCopy;
    }
    default: {
      return state;
    }
  }
};

export const addPost = () => ({ type: "ADD_POST" });
export const updateNewPost = (text: string) => ({
  type: "UPDATE_NEW_POST_TEXT",
  postText: text,
});
//TODO дописать тип profile вместо any
export const setUsrerProfile = (profile: any) => ({
  type: "SET_USER_PROFILE",
  profile,
});
export const setStatus = (status: string) => ({
  type: "SET_STATUS",
  status,
});

//thunk

export const getProfileTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    userApi.getProfile(userId).then((res) => {
      dispatch(setUsrerProfile(res.data));
    });
  };
};
export const getStatusTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    profailAPI.getStatus(userId).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
};
export const updateStatusTC = (status: string) => {
  return (dispatch: Dispatch) => {
    profailAPI.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
