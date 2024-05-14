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


export const deleteDados = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/lista/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar dados:", error);
    throw error;
  }
};

// Exemplo de função para adicionar dados
export const adicionarDados = async (dados) => {
  try {
    const response = await axios.post(`${API_URL}/lista`, dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
    throw error;
  }
};

// Adicione mais funções conforme necessário para outras operações CRUD
