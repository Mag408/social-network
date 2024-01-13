export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type AddPostActionType = {
  type: "ADD-POST";
};

export type NewPostChangeActionType = {
  type: "UPDATE-NEW-POST-TEXT";
  postText: string;
};

export type ActionsType = AddPostActionType | NewPostChangeActionType;

export type PostDataType = {
  message: string;
};

export type ProfileStateType = {
  postsData: PostDataType[];
  newPostText: string;
};

const postsData: PostDataType[] = [
  { message: "Privet Nikolay" },
  { message: "Poshol nah" },
];

const initialState: ProfileStateType = {
  postsData: [...postsData],
  newPostText: "",
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
    default: {
      return state;
    }
  }
};

export const AddPostAC = () => ({ type: "ADD-POST" });
export const UpdateNewPostAC = (text: string) => ({
  type: "UPDATE-NEW-POST-TEXT",
  postText: text,
});
