import React, { Component } from 'react'

const INITIAL_STATE = {

}

export default class AvancarStatusPedido extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange = event => {
    event.preventDefault()
    console.log([event.target.name])
    this.setState({
    [event.target.name]: event.target.value
    })  
  }

  _handleSubmit = event => {
    event.preventDefault()
    const pedido = {...this.state}
    this.props.adicionarPedido(pedido)
    this.setState({...this.state, ...INITIAL_STATE})
  }
  
  render() {
    const {nome, cpf, descricao} = this.state

    return (
      <div className="row">
        <form className="col s12" onSubmit={this._handleSubmit}>
          <h5>Avança Status do Pedido</h5>
          
        </form>
      </div>
    )
  }
}