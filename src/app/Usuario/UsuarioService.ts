import axios, { AxiosResponse } from 'axios';
import { Usuario } from '../modelos/Usuario';
import config from '../Configuracoes/config';
import axiosInstance from "../Configuracoes/axiosConfig";

class UsuarioService {
  private readonly baseURL: string = `${config.API_BASE_URL}/api/usuarios`; // Usa a URL base definida
  private readonly axiosInstance;

  constructor() {
    this.axiosInstance = axiosInstance;
  }

  public async cadastrar(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await this.axiosInstance.post<Usuario>(`${this.baseURL}/cadastro`, usuario);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async atualizar(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await this.axiosInstance.put<Usuario>(`${this.baseURL}/${usuario.id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async excluir(id: string): Promise<void> {
    try {
      await this.axiosInstance.delete(`${this.baseURL}/${id}`);
    } catch (error) {
      throw error;
    }
  }

  public async consultar(
    nome: string,
    cpf: string,
    matricula: string
  ): Promise<Usuario[]> {
    try {
      const queryParams = new URLSearchParams({ nome, cpf, matricula });
      const url = `${this.baseURL}/consultar?${queryParams.toString()}`;
      const response: AxiosResponse<Usuario[]> = await this.axiosInstance.get(url);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async recuperar(id: string): Promise<Usuario> {
    try {
      const url = `${this.baseURL}/recuperar/${id}`;
      const response = await this.axiosInstance.get<Usuario>(url);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
 
}

export default UsuarioService;
