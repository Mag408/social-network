// import { ActionsType } from "../store ";

export type AddMessangeActionType = {
  type: "ADD_MESSAGE";
};

export type NewMessageChangeActionType = {
  type: "UPDATE-NEW-MESSAGE-TEXT";
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

export type DialogsStateType = {
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

const initialState: DialogsStateType = {
  dialogsData: [...dialogsData],
  messagesData: [...messagesData],
  newMessageText: "",
};

export const dialogReducer = (
  state: DialogsStateType = initialState,
  action: ActionsType
): DialogsStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = { message: state.newMessageText };
      const StateCopy = {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      };
      return StateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      const StateCopy = { ...state };

      StateCopy.newMessageText = action.messageText;
      return StateCopy;
    }
    default: {
      return state;
    }
  }
};

export const AddMessageAC = () => ({ type: "ADD_MESSAGE" });
export const UpdateNewMessageAC = (text: string) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  messageText: text,
});
