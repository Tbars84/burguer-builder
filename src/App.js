import React from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import CheckOut from "./containers/CheckOut/CheckOut";
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurguerBuilder} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
