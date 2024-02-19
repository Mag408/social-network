import { Dispatch, Store } from "redux";
import MyPosts from "./MyPosts";
import {
  addPost,
  PostDataType,
  updateNewPost,
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
      dispatch(addPost());
    },
    updateNewPostText: (text: string) => {
      dispatch(updateNewPost(text));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
