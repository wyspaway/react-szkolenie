import React, { useEffect, useReducer } from "react";
import PostDetailsComponent from "./PostDetails.component";
import {
  POST_DETAILS_INIT_STATE,
  POST_DETAILS_ACTION_TYPES,
  PostDetailReducer,
} from "./PostDetails.reducer";
import PropTypes from "prop-types";

function PostDetailsContainer({ postId }) {
  const [postDetailsState, dispatch] = useReducer(
    PostDetailReducer,
    POST_DETAILS_INIT_STATE
  );

  useEffect(() => {
    dispatch({ type: POST_DETAILS_ACTION_TYPES.SET_LOADING });
    fetch(`https://jsonplaceholder.typicode.com/postss/${postId}`)
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          dispatch({ type: POST_DETAILS_ACTION_TYPES.SET_DATA, value: data });
        }, 500)
      )
      .catch(() => {
        dispatch({ type: POST_DETAILS_ACTION_TYPES.SET_ERROR });
      });
  }, []);

  const {
    data: { title, body },
    isLoading,
    isError,
  } = postDetailsState;

  return (
    <PostDetailsComponent
      isLoading={isLoading}
      isError={isError}
      title={title}
      body={body}
    />
  );
}

PostDetailsContainer.defaultProps = {
  postId: "5",
};

PostDetailsContainer.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostDetailsContainer;
