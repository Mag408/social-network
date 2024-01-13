import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  FollowAC,
  SetUsersAC,
  UnfollowAC,
  UserType,
  UsersStateType,
} from "../../redux/reducers/users-reducer";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: UserType[];
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userId: number) => {
      dispatch(FollowAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(UnfollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(SetUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
