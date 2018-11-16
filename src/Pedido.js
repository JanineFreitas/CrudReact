import React, { Component } from 'react'
import axios from 'axios';
const API_URL = 'http://localhost:3000/pedidos'

export default class Pedido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exibirPedido: false,
      pedidos: [{}]
    }
  }

  _handleClick = (event) => {
    event.preventDefault()

    this.setState({
      exibirPedido: !this.state.exibirPedido
    })
  }

  _excluirPedido(pedido) {
    console.log(pedido.id);
    this.props.excluirPedido(pedido);
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
            {this.state.exibirPedido ? (
                <p>Descrição: {pedido.descricao}
                  <div className="card-action">
                    <button className="btn waves-effect waves-light" 
                      onClick={this._excluirPedido(pedido)} 
                      type="submit">Remover
                    </button>
                  </div>
                  <span className="badge white">Status: {pedido.status}</span>
                </p>
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