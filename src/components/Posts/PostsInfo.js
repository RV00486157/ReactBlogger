import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
class PostsInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('here')
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => {
        const comments = response.data;
        this.setState({ comments });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const post = this.props.posts.find(post => {
      if (post.id == this.props.match.params.id) {
        return post;
      }
    });
    let user =""
   if(post){
    user = this.props.users.find(user=>{
      if(user.id == post.userId){
        return user;
      }
    })
   }
    const { comments } = this.state;
    return (
      <div>
        {post &&user && (
          <div>
            <h2>USER NAME : {user.name}</h2>
            <br/>
            <h3>Post Title: {post.title}</h3>
            <br/>
            <p>Post content: {post.body}</p>
            <hr />
            <h4>COMMENTS</h4>
            <ul>
              {comments.length === 0 ? (<p>loading...</p>):comments.map(comment => {
                return <li key={comment.id}>{comment.body}</li>;
              })}
            </ul>
            <p>
            <Link to={`/users/${post.userId}`}>More Posts by author : {user.name}</Link>
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps=(state,props)=>{
  return{
    posts:state.posts,
    users:state.users
  }
}
export default connect(mapStateToProps)(PostsInfo)
