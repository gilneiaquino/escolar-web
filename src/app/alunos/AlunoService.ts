import { Aluno } from "../modelos/Aluno";
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/alunos';

let alunos: Aluno[] = [];  

export const listarAlunos = async (): Promise<Aluno[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Não foi possível buscar os alunos.');
    }
    const data: Aluno[] = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Erro ao listar alunos: ${error.message}`);
  }
};

export const adicionarAluno = async (aluno: Omit<Aluno, 'id'>) => {
  try {
    const response = await axios.post(API_URL, aluno);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar aluno:', error);
    throw error; // Você pode tratar o erro ou lançá-lo novamente para que o componente React trate
  }
};

export const atualizarAluno = (aluno: Aluno): void => {
  const index = alunos.findIndex((a) => a.id === aluno.id);
  if (index !== -1) {
    alunos[index] = aluno;
  }
};

export const deletarAluno = (id: number): void => {
  alunos = alunos.filter((aluno) => aluno.id !== id);
};
