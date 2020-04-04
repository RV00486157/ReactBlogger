import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

function Users(props){
    return (
        <div>
          <h1 className="heading">Listing Users- {props.users.length}</h1>
          <ul>
            {props.users.map(user => {
              return (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
    );
  
}
const mapStateToProps=(state)=>{
  return{
    users:state.users
  }
}
export default connect(mapStateToProps)(Users);
