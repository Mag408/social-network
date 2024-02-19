import React, { FC } from "react";
import styles from "./users.module.css";
import defoltAvatar from "../../accets/img/defolt-avatar.jpg";
import { UserType } from "../../redux/reducers/users-reducer";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onPageChanged: (p: number) => void;
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => void;
  followingInProgress: number[];
};

const Users: FC<UsersPropsType> = (props) => {
  const countPage = props.totalUsersCount / props.pageSize;

  let pages = [];

  for (let i = 1; i <= countPage; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => (
        <span
          className={props.currentPage === p ? styles.selectedPage : ""}
          onClick={() => props.onPageChanged(p)}
        >
          {p}
        </span>
      ))}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={styles.avatar__img}
                  src={u.photos.small ? u.photos.small : defoltAvatar}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "057859b6-03b9-43df-8369-90a969a06c40",
                          },
                        }
                      )
                      .then((res) => {
                        if (res.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingInProgress(false, u.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        { withCredentials: true }
                      )
                      .then((res) => {
                        if (res.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingInProgress(false, u.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
