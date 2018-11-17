import React, { Component } from 'react'

export default class Legenda extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h6> Legenda </h6>
                <p>
                ATENÇÃO: Dirija-se ao caixa quando seu pedido estiver azul.<br/>
                <span className={'red'}>Pedido Novo</span><br/>
                <span className={'yellow'}>Pedido sendo Processado</span><br/>
                <span className={'green'}>Pedido em conferência</span><br/>
                <span className={'blue'}>Pronto para pagamento</span><br/>
                </p>
            </div>
        );   
    }
}