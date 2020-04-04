import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { userSelector, postsByUser } from "../../selectors/userSelector";

function UsersPost(props){
    const { posts } = props;
    const user = props.user
    return (
      <div>
        <h2 className="heading">Posts Written by User : {user.name} </h2>
        <hr/>
        <ul>
          {posts.map(post => {
            return (
              <Link to={`/posts/${post.id}`}>
                <li key={post.id}>{post.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
}


const mapStateToProps = (state,props) =>{
  return{
    user: userSelector(state.users,props.match.params.id),
    posts: postsByUser(state.posts, props.match.params.id)
  }
}

export default connect(mapStateToProps)(UsersPost);
