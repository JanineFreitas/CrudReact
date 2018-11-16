import React from 'react'

export default props => {
  return this.props.pedidos.map((pedido) =>
      <Pedido key={pedido.id} nome={pedido.nome} cpf={pedido.cpf} descricao={pedido.descricao} status={pedido.status}/>
    );
}