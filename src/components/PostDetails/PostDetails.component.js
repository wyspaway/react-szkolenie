import React from "react";
import PropTypes from "prop-types";

function PostDetailsComponent({ isLoading, isError, title, body }) {
  const renderLoader = () => <div>Ładowanie...</div>;
  const renderError = () => <div>ERROR!</div>;

  const renderContent = () => (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );

  if (isLoading) return renderLoader();
  else if (isError) return renderError();
  else return renderContent();
}

PostDetailsComponent.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PostDetailsComponent;
