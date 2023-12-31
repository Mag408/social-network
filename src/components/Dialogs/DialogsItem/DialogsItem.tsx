import { NavLink } from "react-router-dom";

import classes from "../Dialogs.module.css";
import { DialogItemType } from "../../../redux/state";

const DialogItem: React.FC<DialogItemType> = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
