import { LoginService } from './LoginService'; // Certifique-se de importar corretamente o serviço
import { LoginDto } from '../dtos/LoginDto'; // Importe a interface LoginDto

class LoginController {
  private readonly loginService: LoginService;

  constructor() {
    this.loginService = new LoginService(); // Instancia o serviço
  }

  public async login(loginDto: LoginDto) {
    try {
      const token = await this.loginService.login(loginDto);
      
      if (token) {
        return token;
      } else {
        return null;
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default LoginController;
