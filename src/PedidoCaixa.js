import React, { Component } from 'react';

export default class PedidoCaixa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exibirPedido: false,
      pedidos: [{  }]
    }

    this._finalizarPedido = this._finalizarPedido.bind(this);
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

  _finalizarPedido(pedido){
    var p = {
      "nome": pedido.nome,
      "descricao": pedido.descricao,
      "cpf": pedido.cpf,
      "status" : "Pago",
      "dataHora" : pedido.dataHora,
      "id": pedido.id
    };
    this.props.finalizarPedido(p);
  }
    

  render() {
    const {pedido} = this.props

    return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card indigo darken-3">
          <div className="card-content white-text">
            <span className="card-title">Cliente: {pedido.nome}</span>
            <span className={this._cor(pedido)}>Status: {pedido.status}</span>
            <button className="right btn waves-effect waves-light" 
                  onClick={(e) => this._finalizarPedido(pedido, e)} 
                  type="submit">Finalizar 
            </button>
            <div className="card-action"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}