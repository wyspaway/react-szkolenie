import React from "react";
import Header from "../components/Header";
import ShowData from "../components/ShowData";

function Post(props) {
  return (
    <div>
      <Header />
      <ShowData postId={props.match.params.id} />
    </div>
  );
}

export default Post;
