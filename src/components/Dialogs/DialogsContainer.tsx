import React from "react";

import classes from "./Dialogs.module.css";
import Dialogs from "./Dialogs";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  AddMessageAC,
  DialogsStateType,
  UpdateNewMessageAC,
} from "../../redux/reducers/dialogs-reducer";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
  dialogsPageState: DialogsStateType;
};

type mapDispatchToPropsType = {
  AddMessage: () => void;
  changeMessange: (value: string) => void;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialogsPageState: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    AddMessage: () => {
      const action = AddMessageAC();
      dispatch(action);
    },
    changeMessange: (value: string) => {
      const action = UpdateNewMessageAC(value);
      dispatch(action);
    },
  };
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
