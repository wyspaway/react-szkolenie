import React, { Component } from "react";
import PropTypes from "prop-types";
import PostDetailsComponent from "./PostDetails.component";

class PostDetailsContainer extends Component {
  static defaultProps = {
    postId: "5",
  };

  static propTypes = {
    postId: PropTypes.string.isRequired,
  };

  state = {
    postDetail: {},
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          this.setState({
            postDetail: data,
            isLoading: false,
          });
        }, 500)
      );
  }

  render() {
    const {
      isLoading,
      postDetail: { title, body },
    } = this.state;
    return (
      <PostDetailsComponent isLoading={isLoading} title={title} body={body} />
    );
  }
}

export default PostDetailsContainer;
