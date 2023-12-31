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

export type StateType = {
  profilePage: profilePageType;
  dialogsPage: DialogsPageType;
};

export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _callSubscriber: () => void;
  subcribe: (observer: any) => void;
  dispatch: (action: ActionsType) => void;
};

export type AddPostActionType = {
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
  | NewMessageChangeActionType;

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

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
  },
  _callSubscriber() {
    console.log("rerenderEntireTree");
  },

  getState() {
    return this._state;
  },
  subcribe(observer: any) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionsType) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.postsData.push(newPost);
      this._callSubscriber();
      this._state.profilePage.newPostText = "";
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
      //@ts-ignore
      this._state.profilePage.newPostText = action.postText;
      this._callSubscriber();
    }
    if (action.type === ADD_MESSAGE) {
      const newMessage = { message: this._state.dialogsPage.newMessageText };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._callSubscriber();
      this._state.dialogsPage.newMessageText = "";
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      //@ts-ignore
      this._state.profilePage.newMessageText = action.messageText;
      this._callSubscriber();
    }
  },
};

export const AddPostAC = () => ({ type: "ADD-POST" });

export const UpdateNewPostAC = (text: string) => ({
  type: "UPDATE-NEW-POST-TEXT",
  postText: text,
});

// @ts-ignore
window.store = store;
