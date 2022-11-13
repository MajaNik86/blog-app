import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layouts/layout";
import AppPosts from "./pages/AppPosts";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/posts'></Redirect>
          </Route>
          <Route path='/posts'>
            <AppPosts />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
