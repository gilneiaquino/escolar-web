import axios, { AxiosResponse } from 'axios';
import { Usuario } from '../modelos/Usuario';
import config from '../Configuracoes/config';

class UsuarioService {
  private readonly baseURL: string = `${config.API_BASE_URL}/api/usuarios`; // Usa a URL base definida
  private readonly axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
    );
  }

  public async cadastrar(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await this.axiosInstance.post<Usuario>('/cadastro', usuario);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async atualizar(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await this.axiosInstance.put<Usuario>(`/${usuario.id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async excluir(id: string): Promise<void> {
    try {
      await this.axiosInstance.delete(`/${id}`);
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
      const url = `/consultar?${queryParams.toString()}`;
      const response: AxiosResponse<Usuario[]> = await this.axiosInstance.get(url);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async recuperar(id: string): Promise<Usuario> {
    try {
      const url = `/recuperar/${id}`;
      const response = await this.axiosInstance.get<Usuario>(url);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
 
}

export default UsuarioService;
