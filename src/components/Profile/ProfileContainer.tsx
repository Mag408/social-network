import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  addPost,
  setUsrerProfile,
  updateNewPost,
} from "../../redux/reducers/profail-reducer";
import { useParams } from "react-router-dom";

export type ProfileContainerPropsType = {
  setUsrerProfile: (profile: any) => void;
  //TODO дописать тип profile вместо any
  profile: any;
  match: any;
};

export function withRouter(Children: any) {
  return (props: any) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.id;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUsrerProfile(res.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

type MapStateToPropsType = {
  //TODO дописать тип profile вместо any
  profile: any;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

const WithDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUsrerProfile,
})(WithDataContainerComponent);
