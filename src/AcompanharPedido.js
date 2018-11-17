import React, { Component } from 'react';
import Legenda from './Legenda';
import PedidoResumido from './PedidoResumido';
import Carregando from './Carregando';
import axios from 'axios';

const API_URL = 'http://localhost:3000/pedidos';

export default class AvancarStatusPedido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedidos:[{}],
      carregando: false,
    }

    this._handleChange = this._handleChange.bind(this)
  }

  componentDidMount() {
    this._buscarPedidos();
  }

  _buscarPedidos = event => {
    let data;
    axios.get(API_URL).then(response => {
      data = response.data;
      this.setState({pedidos: data});
    })
  }

  _handleChange = event => {
    event.preventDefault()
    console.log([event.target.name])
    this.setState({
    [event.target.name]: event.target.value
    })  
  }

  _listPedidos(pedidos) {
    return pedidos.map((pedido) =>
      <PedidoResumido key={pedido.id} pedido={pedido} />
    );
  }
  
  render() {
    const { pedidos, carregando } = this.state

    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h5>Acompanhamento dos Pedidos</h5>
          
          {carregando ? (
            <Carregando />
          ) : (
              <div>
                {this._listPedidos(pedidos)}
              </div>
            )
          }
          <Legenda />
        </div>
      </div>
    )
  }
}