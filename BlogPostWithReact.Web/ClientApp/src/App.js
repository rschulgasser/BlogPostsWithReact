import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Pages/Home';
import ViewBlog from './Pages/ViewBlog'
import Admin from './Pages/Admin'
import Layout from './Layout';
import MostRecent from './Pages/MostRecent';


export default class App extends Component {
  render() {
    return (
      <Layout>
          <Route exact path='/MostRecent' component={MostRecent} />
        <Route exact path='/' component={Home} />
        <Route exact path='/ViewBlog/:id' component={ViewBlog} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Page/:pageNumber' component={Home} />
      
        
      </Layout>
    );
  }
}