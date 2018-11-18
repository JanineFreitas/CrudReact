import React, { Component } from 'react';
import Legenda from './Legenda';
import PedidoCaixa from './PedidoCaixa';
import Carregando from './Carregando';
import axios from 'axios';

const API_URL = 'http://localhost:3000/pedidos';

export default class Caixa extends Component {
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
    const API_URL_PESQUISA = API_URL+'?q=Pronto para pagamento';
    let data;
    axios.get(API_URL_PESQUISA).then(response => {
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
      <PedidoCaixa key={pedido.id} pedido={pedido} 
      finalizarPedido={this._finalizarPedido}/>
    );
  }

  _finalizarPedido(pedido){
    console.log(pedido)
    axios.put(API_URL+'/'+pedido.id, pedido)
      .then( response => {
        console.log(response.data);
      })
      .catch( error => {
        console.log(error);
      });   
  }
  
  render() {
    const { pedidos, carregando } = this.state

    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h5>Caixa</h5>
          
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