import {AxiosInstance} from 'axios';
import {useDispatch} from 'react-redux';
import config from '../Configuracoes/config';
import {LoginDto} from '../dtos/LoginDto';
import {SenhaDto} from "../dtos/SenhaDto";
import axiosInstance from "../Configuracoes/axiosConfig";

export class LoginService {
    private dispatch = useDispatch();
    private readonly baseURL: string = `${config.API_BASE_URL}/api/logins`;
    private readonly axiosInstance;

    constructor() {
        this.axiosInstance = axiosInstance;
    }

    async login(loginDto: LoginDto) {
        try {
            const response = await this.axiosInstance.post(`${this.baseURL}/autenticacao`, loginDto);
            const {token} = response.data;
            localStorage.setItem("token", token);
            return token;
        } catch (error: any) {
            throw error.response.data.error || 'Erro ao fazer login';
        }
    }

    async enviarEmailRedefinicaoSenha(email: string) {
        try {
            const response = await this.axiosInstance.get(`${this.baseURL}/esqueci-senha?email=${email}`);
            return response.data;
        } catch (error: any) {
            throw error.response.data.error || 'Erro ao enviar o email de redefinição de senha.';
        }
    }

    async alterarSenha(senhaDto: SenhaDto) {
        try {
            const response = await this.axiosInstance.put(`${this.baseURL}/alterar-senha`, senhaDto);
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Falha ao alterar senha');
            }
        } catch (error: any) {
            throw new Error(error.response.data.message || 'Erro ao processar a requisição');
        }
    }

    async alterarSenhaRecuperada(senhaDto: SenhaDto, token: string) {
        try {
            const response = await this.axiosInstance.put(`${this.baseURL}/alterar-senha-recuperada`, senhaDto, {
                headers: {
                    Authorization: `${token}`
                }
            });
            if (response.status === 200) {
                // Redirecionamento no frontend após a alteração de senha com sucesso
                window.location.href = '/login';
                return response.data;
            } else {
                window.location.href = '/token-invalido';
            }
        } catch (error: any) {
            window.location.href = '/token-invalido';
            throw new Error(error.response.data.message || 'Erro ao processar a requisição');
        }
    }



}

export default LoginService;
