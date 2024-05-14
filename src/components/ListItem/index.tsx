import React from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

export const ListItem = ({ item, onChange, onDelete }: Props) => {
  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id,!item.done)} // Altera o estado do checkbox
      />
      <label>{item.name}</label>
      <button className="deleteButton" onClick={() => onDelete(item.id)}>Deletar</button>
    </C.Container>
  );
}
