import React, { Component } from 'react'
import './App.css';
import Layout from './hoc/Layout/Layout'
import MainPageCV from './containers/MainPageCV/MainPageCV';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <MainPageCV />
        </Layout>
      </div>
    );
  }
}

export default App;