import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './styles.css'

import Home from "./Home";
import Users from "./components/Users/Users";
import PostsList from "./components/Posts/PostsList";
import PostsInfo from "./components/Posts/PostsInfo";
import UsersPost from "./components/Users/UsersPost";

import {startGetUsers} from "./actions/users"
import {startGetPosts} from "./actions/posts"

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startGetUsers())
store.dispatch(startGetPosts())


function App() {
  return (
    <BrowserRouter>
    <Home/>
    <br/>
      <Switch>
        <Route path="/users" component={Users} exact={true} />
        <Route path="/users/:id" component={UsersPost}/>
        
        <Route path="/posts" component={PostsList} exact={true} />
        <Route path="/posts/:id" component={PostsInfo}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
const jsx = (
  <Provider store={store}>
      <App/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
