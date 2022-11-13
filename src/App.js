import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layouts/layout";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/posts'></Redirect>
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
