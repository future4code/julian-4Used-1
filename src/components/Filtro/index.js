import React from "react";
import {
  BarraFiltroContainer,
  FiltroContainer,
  FormContainer,
  FormControle,
  InputContainer,
  LabelSelect,
  SelectContainer,
  Option,
  Botao,
  SortContainer,
} from "./style";

class Filtro extends React.Component {
  render() {
    return (
      <BarraFiltroContainer>
        <FiltroContainer>
          <FormContainer>
            <FormControle>
              <InputContainer
                value={this.props.inputNome}
                label="Nome ou descrição"
                onChange={this.props.onChangeFiltro("inputNome")}
              />
            </FormControle>
            <FormControle>
              <InputContainer
                value={this.props.inputMinimo}
                label="Valor mínimo"
                onChange={this.props.onChangeFiltro("inputValorMinimo")}
              />
            </FormControle>
            <FormControle>
              <InputContainer
                value={this.props.inputMaximo}
                label="Valor máximo"
                onChange={this.props.onChangeFiltro("inputValorMaximo")}
              />
            </FormControle>
            <FormControle>
              <LabelSelect>Categoria</LabelSelect>
              <SelectContainer
                value={this.props.inputCategoria}
                onChange={this.props.onChangeFiltro("inputCategoria")}
                autoWidth
              ></SelectContainer>
            </FormControle>
          </FormContainer>
          <SortContainer>
            <FormControle>
              <SelectContainer onChange={this.props.onChangeOrdem} autoWidth>
                <Option value={"Nome"}>Nome</Option>
                <Option value={"Categoria"}>Categoria</Option>
                <Option value={"Menor Preço"}>Menor preço</Option>
                <Option value={"Maior Preço"}>Maior preço</Option>
              </SelectContainer>
            </FormControle>
          </SortContainer>
        </FiltroContainer>
        <Botao onClick={this.props.onClickLimpa}>Limpar Filtros</Botao>
      </BarraFiltroContainer>
    );
  }
}

export default Filtro;
