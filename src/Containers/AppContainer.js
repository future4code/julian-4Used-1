import React, { Component } from 'react'
import Cadastro from './Cadastro'
import Carrinho from './Carrinho'
import HomePage from './HomePage'
import ListaDeProdutos from './ListaDeProdutos'
import Login from './Login'
import Produto from './Produto'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <HomePage></HomePage>
        <Cadastro></Cadastro>
        <Carrinho></Carrinho>
        <ListaDeProdutos></ListaDeProdutos>
        <Login></Login>
        <Produto></Produto>
      </div>
    )
  }
}
