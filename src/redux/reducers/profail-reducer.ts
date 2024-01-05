// import { ActionsType, StateType, profilePageType } from "../store ";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type AddPostActionType = {
  type: string;
};

export type NewPostChangeActionType = {
  type: string;
  postText: string;
};

export type ActionsType = AddPostActionType | NewPostChangeActionType;

export type PostDataType = {
  message: string;
};

export type StateType = {
  postsData: PostDataType[];
  newPostText: string;
};

const postsData: PostDataType[] = [
  { message: "Privet Nikolay" },
  { message: "Poshol nah" },
];

const initialState: StateType = {
  postsData: [...postsData],
  newPostText: "",
};

export const profailReducer = (
  state: StateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      //@ts-ignore
      state.newPostText = action.postText;
      return state;
    }
    default: {
      return state;
    }
  }
};
