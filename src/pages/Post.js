import React from "react";
import PostDetailsContainer from "../components/PostDetails/PostDetails.container";

function Post(props) {
  return (
    <div>
      <PostDetailsContainer postId={props.match.params.id} />
    </div>
  );
}

export default Post;
