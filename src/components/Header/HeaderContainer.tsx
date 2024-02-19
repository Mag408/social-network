import React from "react";
import Header from "./Header";
import axios from "axios";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { setUserData } from "../../redux/reducers/auth-reducer";

type HeaderContainerPropsType = {
  isAuth: boolean;
  login: string | null;
  setUserData: (id: number, email: string, login: string) => void;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          const { id, email, login } = res.data.data;
          this.props.setUserData(id, email, login);
        }
      });
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
