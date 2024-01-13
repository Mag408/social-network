import React from "react";

import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import { DialogsStateType } from "../../redux/reducers/dialogs-reducer";

export type DialogsPropsType = {
  dialogsPageState: DialogsStateType;
  AddMessage: () => void;
  changeMessange: (value: string) => void;
};

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElement = props.dialogsPageState.dialogsData.map((value) => {
    return <DialogsItem name={value.name} id={value.id} />;
  });

  const messangesElement = props.dialogsPageState.messagesData.map((value) => {
    return <Message message={value.message} />;
  });

  const onClickAddMessage = () => {
    props.AddMessage();
  };
  const onNewMessangeChange = (value: string) => {
    props.changeMessange(value);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      <div className={classes.messanges}>
        <div className="">{messangesElement}</div>
        <div className="">
          <textarea
            value={props.dialogsPageState.newMessageText}
            onChange={(e) => onNewMessangeChange(e.target.value)}
          ></textarea>
        </div>
        <div className="">
          <button onClick={onClickAddMessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
