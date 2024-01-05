import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsType, profilePageType } from "../../redux/store ";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Store } from "redux";

type ProfilePropsType = {
  store: Store;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
