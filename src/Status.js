import React, { Component } from 'react'
import Pedido from './Pedido'
import Carregando from './Carregando'
import axios from 'axios';
import Legenda from './Legenda';

const API_URL = 'http://localhost:3000/pedidos';

export default class Status extends Component {

  constructor(props) {
    super(props)

    this.state = {
      carregando: false,
      pedidos: [{
        nome:'',
        descricao:'',
        cpf:'',
        status:'Novo',
        dataHora: new Date(),
        id: 0
      }]
    }
  }

  componentDidMount() {
    this._buscarPedidos();
  }

  _buscarPedidos(){
    let data;
    axios.get(API_URL).then(response => 
      this.setState({pedidos: response.data, carregando: false})
    )
  }

  _getTitulo(total) {
    if (total === 0) {
      return ""
    } else if (total === 1) {
      return "1 pedido"
    } else {
      return `${total} pedidos`
    }
  }

  _listPedidos(pedidos) {
    return pedidos.map((pedido) =>
      <Pedido key={pedido.id} pedido={pedido} 
        excluirPedido={this._excluirPedido} 
        atualizarPedido={this._atualizarPedido}/>
    );
  }

  _excluirPedido(pedido) {
    axios.delete(API_URL+'/'+pedido.id)
      .then( response => {
        console.log(response.data);
      })
      .catch( error => {
        console.log(error);
      });   
  }

  _atualizarPedido(pedido){
    console.log(pedido.status);
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
    const titulo = this._getTitulo(pedidos.length)

    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">         
          <h5>Avança Status do Pedido</h5>

          {carregando ? (
            <Carregando />
          ) : (
              <div>
                <h3>{titulo}</h3>
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