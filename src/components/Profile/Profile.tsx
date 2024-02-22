import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Store } from "redux";

type ProfilePropsType = {
  //TODO дописать тип profile вместо any
  profile: any;
  status: string;
  updateStatusTC: Function;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        updateStatusTC={props.updateStatusTC}
        status={props.status}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
