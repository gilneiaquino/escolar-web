import {LoginService} from './LoginService'; // Certifique-se de importar corretamente o serviço
import {LoginDto} from '../dtos/LoginDto';
import {SenhaDto} from "../dtos/SenhaDto"; // Importe a interface LoginDto

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

    public async recuperarSenha(email: string) {
        try {
            await this.loginService.enviarEmailRedefinicaoSenha(email);
        } catch (error: any) {
            throw new Error(error);
        }
    }


    public async alterarSenha(senhaDto: SenhaDto) {
        try {
            await this.loginService.alterarSenha(senhaDto);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async alterarSenhaRecuperada(senhaDto: SenhaDto, token: string) {
        try {
            await this.loginService.alterarSenhaRecuperada(senhaDto, token);
        } catch (error: any) {
            throw new Error(error);
        }
    }


}

export default LoginController;
