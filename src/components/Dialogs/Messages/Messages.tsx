import { MessageItemType } from "../../../redux/state";
import classes from "../Dialogs.module.css";

type MessangePropsType = {
  message: string;
};

const Message: React.FC<MessangePropsType> = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

export default Message;
