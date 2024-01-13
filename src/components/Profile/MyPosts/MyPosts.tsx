import React, { useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostDataType } from "../../../redux/reducers/profail-reducer";

export type MyPostsPropsType = {
  postsData: PostDataType[];
  newPostText: string;
  addPost: () => void;
  updateNewPostText: (text: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElement = props.postsData.map((value) => {
    return <Post messange={value.message} />;
  });

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  const onClickAddPost = () => {
    if (newPostElement.current) {
      props.addPost();
    }
  };

  const onPostChange = (text: string) => {
    if (newPostElement.current) {
      props.updateNewPostText(text);
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
