//import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import Topo from './Topo'
import Rodape from './Rodape'
import MenuForm from './MenuForm';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <MenuForm />
        <Rodape />
      </div>
    );
  }
}

export default App;
