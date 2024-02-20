import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getProfileTC } from "../../redux/reducers/profail-reducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

export type ProfileContainerPropsType = {
  getProfileTC: Function;
  //TODO дописать тип profile вместо any
  profile: any;
  match: any;
  isAuth: boolean;
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
    this.props.getProfileTC(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

type MapStateToPropsType = {
  //TODO дописать тип profile вместо any
  profile: any;
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
});

const WithDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  getProfileTC,
})(WithDataContainerComponent);
