import axios, { AxiosResponse } from 'axios';
import { Usuario } from '../modelos/Usuario';
import { UsuarioDto } from '../modelos/UsuarioDto';
import { setToken } from '../Jwt/tokenSlice';
import { useDispatch } from 'react-redux';
import config from '../Configuracoes/config';

class UsuarioService {
  private dispatch = useDispatch();
  private readonly baseURL: string = `${config.API_BASE_URL}/api/usuarios`; // Usa a URL base definida
  private readonly axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async cadastrar(usuario: Usuario, token: string): Promise<Usuario> {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await this.axiosInstance.post<Usuario>('/cadastro', usuario, { headers });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async atualizar(usuario: Usuario, token: string): Promise<Usuario> {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await this.axiosInstance.put<Usuario>(`/${usuario.id}`, usuario, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async excluir(id: string, token: string): Promise<void> {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      await this.axiosInstance.delete(`/${id}`, { headers });
    } catch (error) {
      throw error;
    }
  }

  public async consultar(
    nome: string,
    cpf: string,
    matricula: string,
    token: string
  ): Promise<Usuario[]> {
    try {
      const queryParams = new URLSearchParams({ nome, cpf, matricula });

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const url = `/consultar?${queryParams.toString()}`;
      const response: AxiosResponse<Usuario[]> = await this.axiosInstance.get(url, { headers });

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async recuperar(id: string, token: string): Promise<Usuario> {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const url = `/recuperar/${id}`;
      const response = await this.axiosInstance.get<Usuario>(url, { headers });

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async login(usuarioDto: UsuarioDto) {
    try {
      const response = await this.axiosInstance.post('/autenticacao', usuarioDto);
      const { token } = response.data;
      this.dispatch(setToken(token));
      return token;
    } catch (error: any) {
      throw error.response.data.error || 'Erro ao fazer login'; // Lança a mensagem de erro específica ou genérica
    }
  }
  
  
}

export default UsuarioService;
