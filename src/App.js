//import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import Topo from './Topo'
import Rodape from './Rodape'
import Taskboard from './Taskboard'

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <Taskboard />
        <Rodape />
      </div>
    );
  }
}

export default App;
