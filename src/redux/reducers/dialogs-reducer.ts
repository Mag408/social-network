// import { ActionsType } from "../store ";

export type AddMessangeActionType = {
  type: string;
};

export type NewMessageChangeActionType = {
  type: string;
  messageText: string;
};

export type ActionsType = NewMessageChangeActionType | AddMessangeActionType;

export type DialogItemType = {
  name: string;
  id: string;
};

export type MessageItemType = {
  message: string;
};

export type StateType = {
  dialogsData: DialogItemType[];
  messagesData: MessageItemType[];
  newMessageText: string;
};

export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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

const initialState: StateType = {
  dialogsData: [...dialogsData],
  messagesData: [...messagesData],
  newMessageText: "",
};

export const dialogReducer = (
  state: StateType = initialState,
  action: ActionsType
): StateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = { message: state.newMessageText };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      //@ts-ignore
      state.newMessageText = action.messageText;
      return state;
    }
    default: {
      return state;
    }
  }
};
