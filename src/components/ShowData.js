import React, { Component } from "react";

const API = "https://jsonplaceholder.typicode.com/posts/";

class ShowData extends Component {
  state = {
    // postId: this.props.postId,
    postDetail: {},
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + this.props.postId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) =>
        setTimeout(() => {
          this.setState({
            postDetail: data,
            isLoading: false,
          });
        }, 500)
      )
      .catch((error) => this.setState({ isError: true, isLoading: false }));
  }

  render() {
    const {
      isLoading,
      postDetail: { title, body },
      isError,
    } = this.state;
    // if (isError) {
    //   return <p>{error.message}</p>;
    // }
    return (
      <div>
        {isError && <div>Error...</div>}
        {isLoading && !isError && <div>Ładowanie danych...</div>}

        {!isLoading && (
          <>
            <h2>{title}</h2>
            <p>{body}</p>
          </>
        )}
      </div>
    );
  }
}

export default ShowData;
