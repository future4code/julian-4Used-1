import React from "react";
import { CardContainer } from "./style";
// import { FotoProduto } from "./style";
import {
  ContainerDetalhes,
  BotaoExcluir,
  DetalhesDireita,
  DetalhesEsquerda,
  ContainerImg,
  Imagem,
} from "./style";
import {} from "./style";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';

class CardCarrinho extends React.Component {
  render() {
    return (
      <CardContainer elevation={20}>
        <ContainerImg>
          <Imagem src={this.props.produtoCarrinho.photos} alt="foto" />
        </ContainerImg>
        <ContainerDetalhes>
            <p>{this.props.produtoCarrinho.name}</p>
            <p>{this.props.produtoCarrinho.description}</p>
            <p>Valor: R$ {this.props.produtoCarrinho.price * this.props.produtoCarrinho.qtd}</p>
            <p>Forma de pagamento: {this.props.produtoCarrinho.paymentMethod}</p>
            <p>Quantidade:<Fab color="secondary" aria-label="minus" onClick={this.props.diminuirQtd}>
                <RemoveIcon/>
              </Fab> {this.props.produtoCarrinho.qtd} 
              <Fab color="secondary" aria-label="add" onClick={this.props.adicionarQtd}>
                <AddIcon/>
              </Fab>
            </p>
            <BotaoExcluir onClick={this.props.removerProduto}></BotaoExcluir>
        </ContainerDetalhes>
      </CardContainer>
    );
  }
}

export default CardCarrinho;
