import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    this._acompanharPedido = this._acompanharPedido.bind(this);
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

  _acompanharPedido(){
    <Link to="/acompanhar">Acompanhar Pedido</Link>
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
                </p>
                <button className="right btn waves-effect waves-light" 
                      onClick={(e) => this._excluirPedido(pedido, e)} 
                      type="submit">Remover 
                </button>
                <button id="bt1" className="right btn waves-effect waves-light" 
                  onClick={(e) => this._atualizarPedido(pedido, e)} 
                  type="submit">Avançar
                </button>

                <Link className="right btn waves-effect waves-light" 
                  to="/acompanhar">Acompanhar Pedido</Link>

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