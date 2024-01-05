import { dialogReducer } from "./reducers/dialogs-reducer";
import { profailReducer } from "./reducers/profail-reducer";
import { sidebarReducer } from "./reducers/sidebar-reducer";

export type PostDataType = {
  message: string;
};

export type DialogItemType = {
  name: string;
  id: string;
};

export type MessageItemType = {
  message: string;
};

export type profilePageType = {
  postsData: PostDataType[];
  newPostText: string;
};

export type DialogsPageType = {
  dialogsData: DialogItemType[];
  messagesData: MessageItemType[];
  newMessageText: string;
};

export type SideBarType = {};

export type StateType = {
  profilePage: profilePageType;
  dialogsPage: DialogsPageType;
  sideBar: SideBarType;
};

export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _callSubscriber: (state: StateType) => void;
  subcribe: (observer: any) => void;
  dispatch: (action: ActionsType) => void;
};

export type AddPostActionType = {
  type: string;
};

export type AddMessangeActionType = {
  type: string;
};

export type NewPostChangeActionType = {
  type: string;
  postText: string;
};

export type NewMessageChangeActionType = {
  type: string;
  messageText: string;
};

export type ActionsType =
  | AddPostActionType
  | NewPostChangeActionType
  | NewMessageChangeActionType
  | AddMessangeActionType;

const dialogsData: DialogItemType[] = [
  { id: "1", name: "Maga" },
  { id: "2", name: "Anisa" },
  { id: "3", name: "Serega" },
  { id: "4", name: "Daun" },
  { id: "5", name: "Dimych" },
  { id: "6", name: "Sveta" },
];

const messagesData: MessageItemType[] = [
  { message: "Hi" },
  { message: "How are you" },
  { message: "Nice" },
];

const postsData: PostDataType[] = [
  { message: "Privet Nikolay" },
  { message: "Poshol nah" },
];

export const store: StoreType = {
  _state: {
    profilePage: {
      postsData: [...postsData],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [...dialogsData],
      messagesData: [...messagesData],
      newMessageText: "",
    },
    sideBar: {},
  },
  _callSubscriber(state: StateType) {
    console.log("rerenderEntireTree");
  },

  getState() {
    return this._state;
  },
  subcribe(observer: any) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionsType) {
    this._state.profilePage = profailReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export const AddPostAC = () => ({ type: "ADD-POST" });
export const UpdateNewPostAC = (text: string) => ({
  type: "UPDATE-NEW-POST-TEXT",
  postText: text,
});

export const AddMessageAC = () => ({ type: "ADD_MESSAGE" });
export const UpdateNewMessageAC = (text: string) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  messageText: text,
});

// @ts-ignore
window.store = store;
