import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import PinStash from './containers/PinStash/PinStash';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            <PinStash />
        </Layout>
      </div>
    );
  }
}

export default App;
