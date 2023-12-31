import React, { ChangeEvent, useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  ActionsType,
  AddPostAC,
  PostDataType,
  UpdateNewPostAC,
} from "../../../redux/state";

export type MyPostsPropsType = {
  postsData: PostDataType[];
  newPostText: string;
  dispatch: (action: ActionsType) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElement = props.postsData.map((value) => {
    return <Post messange={value.message} />;
  });

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  const onClickAddPost = () => {
    if (newPostElement.current) {
      const actoin = AddPostAC();
      props.dispatch(actoin);
    }
  };

  const onPostChange = (text: string) => {
    if (newPostElement.current) {
      const actoin = UpdateNewPostAC(text);
      props.dispatch(actoin);
    }
  };

  return (
    <div className="">
      My posts
      <div className="">
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={(e) => onPostChange(e.target.value)}
        ></textarea>
        <button onClick={onClickAddPost}>Add post</button>
      </div>
      <div className="">New posts</div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
