import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Taskboard from './Taskboard'
import AcompanharPedido from './AcompanharPedido';
import CadastroPedidos from './CadastroPedidos';
import Caixa from './Caixa';

export default class MenuForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.inicio = this.inicio.bind(this);
    this.acompanhar = this.acompanhar.bind(this);
    this.cadastro = this.cadastro.bind(this);
    this.caixa = this.caixa.bind(this);
  }

  inicio() {
    return (
      <Taskboard />
    );
  }

  acompanhar(){
    return (
      <AcompanharPedido />
    );
  }

  cadastro(){
    return(
      <CadastroPedidos />
    )
  }

  caixa(){
    return(
      <Caixa />
    )
  }

  render() {
    return(
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Avança Status do Pedido</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro de Pedidos</Link>
          </li>
          <li>
            <Link to="/acompanhar">Acompanhar Pedido</Link>
          </li>
          <li>
            <Link to="/caixa">Caixa</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={this.inicio} />
        <Route path="/cadastro" component={this.cadastro} />
        <Route path="/acompanhar" component={this.acompanhar} />
        <Route path="/caixa" component={this.caixa} />
      </div>
    </Router>
    )
  }
}