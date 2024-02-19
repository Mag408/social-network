import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  UserType,
  setTotalUserCount,
  toggleIsFetching,
  toggleFollowingInProgress,
} from "../../redux/reducers/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userApi } from "../../api/api";

type UsersAPIComponetPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageValue: number) => void;
  setTotalUserCount: (count: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => void;
  followingInProgress: number[];
};

class UsersAPIComponet extends React.Component<UsersAPIComponetPropsType> {
  componentDidMount() {
    userApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (p: number) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);

    userApi.getUsers(p, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     follow: (userId: number) => {
//       dispatch(FollowAC(userId));
//     },
//     unfollow: (userId: number) => {
//       dispatch(UnfollowAC(userId));
//     },
//     setUsers: (users: UserType[]) => {
//       dispatch(SetUsersAC(users));
//     },
//     setCurrentPage: (pageValue: number) => {
//       dispatch(SetCurrentPageAC(pageValue));
//     },
//     setTotalUserCount: (count: number) => {
//       dispatch(setTotalUserCountAC(count));
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatctoggleIsFetchingAC(isFetching));
//     },
//   };
// };

export const UsersContainer = connect(mapStateToProps, {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalUserCount,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersAPIComponet);
