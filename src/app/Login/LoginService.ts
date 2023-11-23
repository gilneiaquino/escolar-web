import axios, {AxiosInstance} from 'axios';
import {useDispatch} from 'react-redux';
import config from '../Configuracoes/config';
import {LoginDto} from '../dtos/LoginDto';
import {SenhaDto} from "../dtos/SenhaDto";

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
            const {token} = response.data;
            localStorage.setItem("token", token);
            return token;
        } catch (error: any) {
            throw error.response.data.error || 'Erro ao fazer login';
        }
    }

    async enviarEmailRedefinicaoSenha(email: string) {
        try {
            const response = await this.axiosInstance.get(`/esqueci-senha?email=${email}`);
            return response.data;
        } catch (error: any) {
            throw error.response.data.error || 'Erro ao enviar o email de redefinição de senha.';
        }
    }

    async alterarSenha(senhaDto: SenhaDto) {
        try {
            const response = await this.axiosInstance.put('/alterar-senha', senhaDto);

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Falha ao alterar senha');
            }
        } catch (error: any) {
            throw new Error(error.response.data.message || 'Erro ao processar a requisição');
        }
    }


}

export default LoginService;
