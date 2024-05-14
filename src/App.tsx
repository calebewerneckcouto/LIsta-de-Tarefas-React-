import React, { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import axios from 'axios';

const API_URL = 'http://localhost:8080/tarefas'; // Substitua pelo URL do seu backend

export const getDados = async () => {
  try {
    const response = await axios.get(`${API_URL}/lista`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

export const adicionarDados = async (id: number, name: string, done: boolean) => {
  try {
    const data = {
      id: id,
      name: name,
      done: done
    };
    const response = await axios.post(`${API_URL}/lista`, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
    throw error;
  }
};

export const deleteDados = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/lista/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar dados:", error);
    throw error;
  }
};

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDados();
      setList(data);
    };

    fetchData();
  }, []);

  const handleAddTask = async (taskName: string) => {
    let newList = [...list];
    const newTask = {
      id: list.length + 1,
      name: taskName,
      done: false
    };
    newList.push(newTask);
    setList(newList);

    // Adiciona a nova tarefa ao backend
    try {
      await adicionarDados(newTask.id, newTask.name, newTask.done);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      // Opção para remover a tarefa da lista local se a adição falhar
      // setList(newList.filter(task => task.id!== newTask.id));
    }
  };

  const handleTaskChange = (id: number, done: boolean) => {
  let newList = [...list];
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].id === id) {
      newList[i].done = done;
    }
  }
  setList(newList);
};


  const handleDeleteTask = async (id: number) => {
    try {
      await deleteDados(id);
      setList(list.filter(item => item.id!== id)); // Atualiza a lista removendo a tarefa deletada
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={(done) => handleTaskChange(item.id, false)} // Ajuste aqui para passar o estado atual do checkbox
            onDelete={() => handleDeleteTask(item.id)} // Passando a função para deletar a tarefa
          />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
