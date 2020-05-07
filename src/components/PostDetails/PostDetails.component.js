import React from "react";
import PropTypes from "prop-types";

function PostDetailsComponent({ isLoading, title, body }) {
  const renderLoader = () => <div>Ładowanie...</div>;

  const renderContent = () => (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );

  return isLoading ? renderLoader() : renderContent();
}

PostDetailsComponent.PropTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PostDetailsComponent;
