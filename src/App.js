import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AddPostForm } from "./components/AddPostForm";
import Layout from "./layouts/layout";
import AddPost from "./pages/AddPost";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/posts'></Redirect>
          </Route>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route path='/add'>
            <AddPost />
          </Route>
          <Route path='/edit/:id'>
            <AddPost />
          </Route>
          <Route path='/posts/:id'>
            <SinglePost />
          </Route>
          <Route path='/posts/:id'>
            <AddPostForm />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
