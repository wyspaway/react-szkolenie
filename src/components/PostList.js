import React, { Component } from "react";
import { Link } from "react-router-dom";

const API = "https://jsonplaceholder.typicode.com/posts";

class PostList extends Component {
  state = {
    postList: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          this.setState({
            postList: data,
            isLoading: false,
          });
        }, 500)
      );
  }

  renderPostList = () =>
    this.state.postList.map((postElement) => (
      <li>
        <Link key={postElement.id} to={`/post/${postElement.id}`}>
          {postElement.title}
        </Link>
      </li>
    ));

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h2>Inne posty:</h2>
        {isLoading && <div>Ładowanie danych...</div>}
        <ul>{!isLoading && this.renderPostList()}</ul>
      </div>
    );
  }
}

export default PostList;
