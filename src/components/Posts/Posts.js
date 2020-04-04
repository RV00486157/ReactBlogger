import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";

import PostsList from "./PostsList";
import PostsInfo from "./PostsInfo";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const posts = response.data;
        this.setState({ posts });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <BrowserRouter>
        {window.location.pathname === "/posts" ? (
          <div>
            <PostsList posts={posts} />
          </div>
        ) : (
          <div>
            <PostsInfo posts={posts} id={this.props.match.params.id} />
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default Posts;
