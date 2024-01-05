import React from "react";

import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import {
  ActionsType,
  AddMessageAC,
  DialogsPageType,
  UpdateNewMessageAC,
  profilePageType,
} from "../../redux/store ";
import Dialogs from "./Dialogs";
import { Store } from "redux";

export type DialogsContainerPropsType = {
  store: Store;
};

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
  const state = props.store.getState();

  const onClickAddMessage = () => {
    const action = AddMessageAC();
    props.store.dispatch(action);
  };
  const onNewMessangeChange = (value: string) => {
    const action = UpdateNewMessageAC(value);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      AddMessage={onClickAddMessage}
      changeMessange={onNewMessangeChange}
      dialogsPageState={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
