import { Dispatch, Store } from "redux";
import MyPosts from "./MyPosts";
import {
  AddPostAC,
  PostDataType,
  UpdateNewPostAC,
} from "../../../redux/reducers/profail-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

type mapStateToPropsType = {
  postsData: PostDataType[];
  newPostText: string;
};

type mapDispatchToPropsType = {
  addPost: () => void;
  updateNewPostText: (text: string) => void;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(AddPostAC());
    },
    updateNewPostText: (text: string) => {
      dispatch(UpdateNewPostAC(text));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
