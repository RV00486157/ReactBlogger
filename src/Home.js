import React from 'react';
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Home(props){
	return(
		<div className="nav">
  			<Link to="/users" className="link">Users</Link>
  			<Link to="/posts" className="link">Posts</Link>
		</div>
	)
}
export default Home
