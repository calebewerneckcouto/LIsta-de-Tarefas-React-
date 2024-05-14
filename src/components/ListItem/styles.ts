import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  position: relative; /* Adiciona para posicionar absolutamente o botão */

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    color: #CCC;
    text-decoration: ${props => (props.done? 'line-through' : 'initial')};
  }

 .deleteButton {
    position: absolute;
    right: 10px; /* Posiciona o botão à direita do componente */
    top: 10px; /* Posiciona o botão no topo do componente */
    background-color: red; /* Cor de fundo vermelha */
    color: white; /* Texto branco */
    border: none; /* Remove a borda padrão */
    border-radius: 8px 0px 8px 0px; /* Bordas arredondadas no canto superior direito */
    padding: 6px 12px; /* Espaçamento interno */
    cursor: pointer; /* Muda o cursor para um ponteiro quando passa o mouse */
    font-size: 18px; /* Tamanho do texto */
  }
`;
