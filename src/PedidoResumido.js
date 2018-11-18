import React, { Component } from 'react'

export default class PedidoResumido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exibirPedido: false,
      pedidos: [{  }]
    }
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

  render() {
    const {pedido} = this.props

    return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card indigo darken-3">
          <div className="card-content white-text">
            <span className="card-title">Cliente: {pedido.nome}</span>
            Tempo em espera: {pedido.dataHora}min
            <span className={this._cor(pedido)}>Status: {pedido.status}</span>
             
            <div className="card-action"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}