import React from "react";

import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import { DialogsPageType, profilePageType } from "../../redux/state";

export type DialogsPropsType = {
  dialogsPageState: DialogsPageType;
};

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElement = props.dialogsPageState.dialogsData.map((value) => {
    return <DialogsItem name={value.name} id={value.id} />;
  });

  const messangesElement = props.dialogsPageState.messagesData.map((value) => {
    return <Message message={value.message} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      <div className={classes.messanges}>
        {messangesElement}
        <textarea name=""></textarea>
        <button>add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
