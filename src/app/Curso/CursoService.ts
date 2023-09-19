import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/cursos';

export const getCursos = async (): Promise<any[]> => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter cursos');
  }
};

export const getCursoById = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter curso por ID');
  }
};

export const criarCurso = async (novoCurso: any): Promise<any> => {
  try {
    const response = await axios.post(apiUrl, novoCurso);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar curso');
  }
};

export const atualizarCurso = async (id: number, cursoAtualizado: any): Promise<any> => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, cursoAtualizado);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar curso');
  }
};

export const excluirCurso = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    throw new Error('Erro ao excluir curso');
  }
};
