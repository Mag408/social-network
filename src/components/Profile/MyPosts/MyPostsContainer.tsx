import { Store } from "redux";
import {
  ActionsType,
  AddPostAC,
  PostDataType,
  UpdateNewPostAC,
} from "../../../redux/store ";
import MyPosts from "./MyPosts";

export type MyPostsContainerPropsType = {
  store: Store;
};

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
  const state = props.store.getState();

  const onClickAddPost = () => {
    props.store.dispatch(AddPostAC());
  };

  const onPostChange = (text: string) => {
    props.store.dispatch(UpdateNewPostAC(text));
  };

  return (
    <MyPosts
      addPost={onClickAddPost}
      updateNewPostText={onPostChange}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
