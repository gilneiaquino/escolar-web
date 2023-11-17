import axios, { AxiosInstance } from 'axios';
import { useDispatch } from 'react-redux';
import { clearToken, setToken } from '../Jwt/tokenSlice';
import config from '../Configuracoes/config';
import { LoginDto } from '../dtos/LoginDto';  

export class LoginService {
  private dispatch = useDispatch();
  private readonly baseURL: string = `${config.API_BASE_URL}/api/logins`;  
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(loginDto: LoginDto) {
    try {
      const response = await this.axiosInstance.post('/autenticacao', loginDto);
      const { token } = response.data;
      this.dispatch(setToken(token));
      return token;
    } catch (error: any) {
      throw error.response.data.error || 'Erro ao fazer login'; 
    }
  }
}

export default LoginService;
