import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsType, profilePageType } from "../../redux/state";

type ProfilePropsType = {
  profilePageState: profilePageType;
  dispatch: (action: ActionsType) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePageState.postsData}
        newPostText={props.profilePageState.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
