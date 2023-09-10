import axios from 'axios';
import { Aluno } from '../modelos/Aluno';
 
class AlunoService {
  private readonly baseURL: string = 'http://localhost:8080/api/alunos';
  private readonly axiosInstance;

   constructor() {
    this.baseURL = 'http://localhost:8080/api/alunos';  
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } 

  private customConfig = {  
    headers: {
    'baseURL':  this.baseURL,
    'Content-Type': 'application/json'
    }
  };

  public async criarAluno(aluno: Aluno): Promise<Aluno> { 
    try{    
      const response  = await axios.post(this.baseURL, aluno, this.customConfig);
      return response.data;
     } catch (error: any) {
      throw error;
    }
  } 

  public async atualizarAluno(aluno: Aluno): Promise<Aluno> {
    try {
      const response = await this.axiosInstance.put<Aluno>(
        `/${aluno.id}`,
        aluno
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async excluirAluno(id: number): Promise<void> {
    try {
      await this.axiosInstance.delete(`/${id}`);
    } catch (error) {
      throw error;
    }
  }

  

  public async consultar(nome: string, cpf: string, matricula: string): Promise<Aluno[]> {
    try {
      const queryParams = new URLSearchParams({
        nome: nome,
        cpf: cpf,
        matricula: matricula,
      });
  
      const url = `http://localhost:8080/api/alunos/consultar?${queryParams.toString()}`;
  
      const response = await axios.get<Aluno[]>(url, this.customConfig);
  
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  
  public async recuperar(id: string): Promise<Aluno> {
    try {
      const queryParams = new URLSearchParams({
        id: id
      });
  
      const url = `http://localhost:8080/api/alunos?${queryParams.toString()}`;
  
      const response = await axios.get<Aluno>(url, this.customConfig);
  
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
  
}

export default AlunoService;
