import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
  messange: string;
};

const Post: React.FC<PostPropsType> = ({ messange }) => {
  return <div className={classes.item}>{messange}</div>;
};

export default Post;
