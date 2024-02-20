import React from "react";
import Header from "./Header";
import axios from "axios";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { getUserDataTC, setUserData } from "../../redux/reducers/auth-reducer";
import { authAPI } from "../../api/api";

type HeaderContainerPropsType = {
  isAuth: boolean;
  login: string | null;
  getUserDataTC: Function;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    this.props.getUserDataTC();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { getUserDataTC })(HeaderContainer);
