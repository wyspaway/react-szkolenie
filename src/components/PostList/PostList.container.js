import React, { useEffect, useState } from "react";
import PostListComponent from "./PostList.component";
import PropTypes from "prop-types";

function PostListContainer() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          setPostList(data);
          setIsLoading(false);
        }, 500)
      );
  }, []);

  // const { postList } = postList;

  return <PostListComponent isLoading={isLoading} postList={postList} />;
}

PostListContainer.propTypes = {
  postList: PropTypes.array,
};

export default PostListContainer;
