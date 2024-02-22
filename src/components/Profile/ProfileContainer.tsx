import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getProfileTC,
  getStatusTC,
  updateStatusTC,
} from "../../redux/reducers/profail-reducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

export type ProfileContainerPropsType = {
  getProfileTC: Function;
  getStatusTC: Function;
  updateStatusTC: Function;
  //TODO дописать тип profile вместо any
  profile: any;
  match: any;
  isAuth: boolean;
  status: string;
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
      userId = 30510;
    }
    this.props.getProfileTC(userId);
    this.props.getStatusTC(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusTC={this.props.updateStatusTC}
      />
    );
  }
}

type MapStateToPropsType = {
  //TODO дописать тип profile вместо any
  profile: any;
  status: string;
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

const WithDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  getProfileTC,
  getStatusTC,
  updateStatusTC,
})(WithDataContainerComponent);
