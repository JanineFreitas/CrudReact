import React, { Component } from 'react'
import Pedido from './Pedido'
import CadastroPedidos from './CadastroPedidos'
import Carregando from './Carregando'
import axios from 'axios';
const API_URL = 'http://localhost:3000/pedidos';

export default class Taskboard extends Component {

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

  _buscarPedidos = event => {
    let data;
    axios.get(API_URL).then(response => {
      data = response.data;
      this.setState({pedidos: data});
    })
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
        atualizarPedido={this._atualizarPedido}
        buscarPedidos={this._buscarPedidos}/>
    );
  }

  _adicionarPedido(pedido)  {
    axios.post(API_URL, pedido)
      .then( response => {
        console.log(response.data);
      })
      .catch( error => {
        console.log(error);
      });   
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
          <CadastroPedidos adicionarPedido={this._adicionarPedido} />
          
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
          <h6> Legenda </h6>
          <p>
            ATENÇÃO: Dirija-se ao caixa quando seu pedido estiver azul.<br/>
            <span className={'red'}>Pedido Novo</span><br/>
            <span className={'yellow'}>Pedido sendo Processado</span><br/>
            <span className={'green'}>Pedido em conferência</span><br/>
            <span className={'blue'}>Pronto para pagamento</span><br/>
          </p>
        </div>
      </div>
    )
  }
}