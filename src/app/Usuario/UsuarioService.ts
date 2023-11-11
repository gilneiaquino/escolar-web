import axios from 'axios';
import { Usuario } from '../modelos/Usuario';
import { UsuarioDto } from '../modelos/UsuarioDto';
 
class UsuarioService {
  private readonly baseURL: string = 'http://localhost:8080/api/usuarios';
  private readonly axiosInstance;

  constructor() {
    this.baseURL = 'http://localhost:8080';
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private customConfig = {
    headers: {
      baseURL: this.baseURL,
      'Content-Type': 'application/json',
    },
  };

  public async criar(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await axios.post(this.baseURL, usuario, this.customConfig);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async atualizar(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await this.axiosInstance.put<Usuario>(
        `/${usuario.id}`,
        usuario
      );
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
      const queryParams = new URLSearchParams({
        nome: nome,
        cpf: cpf,
        matricula: matricula,
      });

      const url = `http://localhost:8080/api/usuarios/consultar?${queryParams.toString()}`;

      const response = await axios.get<Usuario[]>(url, this.customConfig);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async recuperar(id: string): Promise<Usuario> {
    try {
      const url = `http://localhost:8080/api/usuarios/recuperar/${id}`;

      const response = await axios.get<Usuario>(url, this.customConfig);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async login(usuarioDto: UsuarioDto) {
    try {
        const response = await this.axiosInstance.get('/api/usuarios/autenticacao', { params: usuarioDto });
        return response.data; // Se a solicitação foi bem-sucedida, a resposta pode conter dados do usuário logado
    } catch (error) {
        throw new Error('Erro ao fazer login');
    }
}

}

export default UsuarioService;
