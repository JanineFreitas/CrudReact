import React, { Component } from 'react'
import axios from 'axios';

export default class Pedido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exibirPedido: false,
      pedidos: [{
        nome:'',
        descricao:'',
        cpf:'',
        status:'Novo',
        dataHora: new Date(),
        id: 0
      }]
    }
    this._atualizarPedido = this._atualizarPedido.bind(this);
    this._excluirPedido = this._excluirPedido.bind(this);
  }

  _atualizarPedido(pedido){
    console.log(pedido.status);
    var status = pedido.status;
    if(pedido.status==='Novo'){
      status = 'Pedido sendo preparo';
    } else if(pedido.status === 'Pedido sendo preparo'){
      status = 'Pedido em conferência';
    } else if(pedido.status === 'Pedido em conferência'){
      status = 'Pronto para pagamento';
    } else if(pedido.status === 'Pronto para pagamento'){
      status = pedido.status;
    }
    var p = {
      "nome": pedido.nome,
      "descricao": pedido.descricao,
      "cpf": pedido.cpf,
      "status" : status,
      "dataHora" : pedido.dataHora,
      "id": pedido.id
    };
    this.props.atualizarPedido(p);
    this._buscarPedidos();
  }

  _handleClick = (event) => {
    event.preventDefault()
    this.setState({
      exibirPedido: !this.state.exibirPedido
    })
  }

  _excluirPedido(pedido) {
    this.props.excluirPedido(pedido);
    this._buscarPedidos();
  }

  _buscarPedidos(){
    //this.props.buscarPedidos();
  }

  _cor(pedido){
    let cor = 'badge white'
    if(pedido.status==='Novo'){
      cor = 'badge red';
    } else if(pedido.status === 'Pedido sendo preparo'){
      cor = 'badge yellow';
    } else if(pedido.status === 'Pedido em conferência'){
      cor = 'badge green';
    } else if(pedido.status === 'Pronto para pagamento'){
      cor = 'badge blue';
    }
    return cor;
  }

  _tempoPercorrido(pedido){
    const dataInicio = pedido.dataHora;
    const agora = new Date();
    const diffMilissegundos = agora - dataInicio;
    const diffSegundos = diffMilissegundos / 1000;
    const diffMinutos = diffSegundos / 60;
    console.log(dataInicio);
    console.log(agora);
    console.log("diffMilissegundos " +diffMilissegundos);
    return dataInicio;
  }

  render() {
    const {pedido} = this.props

    const textoBotao = (this.state.exibirPedido) ? 'Ocultar Pedido' : 'Exibir Pedido'

    return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card indigo darken-3">
          <div className="card-content white-text">
            <span className="card-title">Cliente: {pedido.nome}</span>
            <span className={this._cor(pedido)}>Status: {pedido.status}</span>
            
            {this.state.exibirPedido ? (  
              <div className="card-action">
                <p>
                  Descrição: {pedido.descricao} | 
                  CPF: {pedido.cpf} | 
                  Tempo: {this._tempoPercorrido(pedido)}min
                </p>
                <button id="bt1" className="right btn waves-effect waves-light" 
                  onClick={(e) => this._atualizarPedido(pedido, e)} 
                  type="submit">Avançar
                </button>
                <button className="right btn waves-effect waves-light" 
                      onClick={(e) => this._excluirPedido(pedido, e)} 
                      type="submit">Remover
                </button>
              </div>
              ) : ("")
            }
          </div>
          <div className="card-action">
            <a className="right" onClick={this._handleClick}>{textoBotao}</a>
            <br/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}