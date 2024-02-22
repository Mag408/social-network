import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfailStatus from "./ProfailStatus";

export type ProfileInfoPropsType = {
  //TODO дописать тип profile вместо any
  profile: any;
  status: string;
  updateStatusTC: Function;
};

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="">
      {/* <img
        src="https://white-rainbow.ru/upload/resize_cache/iblock/b26/7sf66d03tagu4tqpxywzr9e18325c05v/600_400_1/BSA_3747_Pano_copy.750.jpg"
        alt=""
      /> */}
      <div className="">
        <img src={props.profile.photos.large} alt="" />
        <ProfailStatus
          status={props.status}
          updateStatusTC={props.updateStatusTC}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
