import React, { Component } from 'react'

const INITIAL_STATE = {
  nome:'',
  descricao:'',
  cpf:'',
  status:'Novo',
  id: 0
}

export default class CasdastroPedidos extends Component {
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
          <h5>Cadastro de Pedidos</h5>
          <div className="input-field col s12">
           <input placeholder="Nome do cliente:" name="nome" value={nome} onChange={this._handleChange}/><br/>
           <input placeholder="CPF:" name="cpf" value={cpf} onChange={this._handleChange}/><br/>
           <textarea placeholder="Descrição do pedido" name="descricao" value={descricao} onChange={this._handleChange}>
           </textarea>
           <button className="btn waves-effect waves-light" type="submit">Registar</button>
          </div>
        </form>
      </div>
    )
  }
}