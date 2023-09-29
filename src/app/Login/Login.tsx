import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from "react-input-mask";
import UsuarioController from '../Usuario/UsuarioController';

function Login() {
    const navigate = useNavigate();

    const usuarioController = new UsuarioController();

    const [formData, setFormData] = useState({
        nomeUsuario: '',
        senha: '',
        tipoLogin: 'email', // Defina o valor padrão como 'email'
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { tipoLogin, nomeUsuario, senha } = formData;

        let usuarioDto = {
            nomeUsuario: '',
            senha: '',
            email: '',
            cpf: '',
        };

        if (tipoLogin === 'email') {
            usuarioDto.senha = senha;
            usuarioDto.nomeUsuario = nomeUsuario;
            usuarioDto.email = nomeUsuario; // Defina o e-mail com o valor de nomeUsuario
        } else if (tipoLogin === 'cpf') {
            const cpf = nomeUsuario.replace(/\D/g, '');
            usuarioDto.senha = senha;
            usuarioDto.cpf = cpf;
        } else if (tipoLogin === 'username') {
            usuarioDto.senha = senha;
            usuarioDto.nomeUsuario = nomeUsuario;
        }

        usuarioController.login(usuarioDto, dispatchEvent);
    };

    const handleForgotPasswordClick = () => {
        navigate(`/esqueci-minha-senha`);
    };

    const handleChangePasswordClick = () => {
        navigate(`/alterar-minha-senha`);
    };

    const handleGoogleLoginClick = () => {
        // Adicione a lógica para o login com Google aqui
    };

    const handleFacebookLoginClick = () => {
        // Adicione a lógica para o login com Facebook aqui
    };

    const limparCamposLoginEnviados = () => {
        const { tipoLogin } = formData;
        if (tipoLogin === 'email') {
            setFormData({ ...formData, nomeUsuario: '' });
        } 
        else {
            setFormData({ ...formData, nomeUsuario: '' });
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Tela de Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="tipoLogin">Tipo de Entrada:</label>
                                    <select
                                        className="form-control"
                                        id="tipoLogin"
                                        name="tipoLogin"
                                        value={formData.tipoLogin}
                                        onChange={handleInputChange}
                                        onBlur={limparCamposLoginEnviados}
                                    >
                                        <option value="email">E-mail</option>
                                        <option value="cpf">CPF</option>
                                        <option value="username">Nome de Usuário</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    {formData.tipoLogin === 'cpf' ? (
                                        <label htmlFor="nomeUsuario">CPF:</label>
                                    ) : (
                                        <label htmlFor="nomeUsuario">
                                            {formData.tipoLogin === 'email' ? 'E-mail:' : 'Nome de Usuário ou E-mail:'}
                                        </label>
                                    )}
                                    {formData.tipoLogin === 'cpf' ? (
                                        <InputMask
                                            mask="999.999.999-99"
                                            className="form-control"
                                            id="nomeUsuario"
                                            name="nomeUsuario"
                                            value={formData.nomeUsuario}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    ) : (
                                        <input
                                            type={formData.tipoLogin === 'email' ? 'email' : 'text'}
                                            className="form-control"
                                            id="nomeUsuario"
                                            name="nomeUsuario"
                                            value={formData.nomeUsuario}
                                            onChange={handleInputChange}
                                            required
                                            pattern={formData.tipoLogin === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' : undefined}
                                        />
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Senha:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="senha"
                                        name="senha"
                                        value={formData.senha}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className='my-3 d-flex justify-content-center align-items-end'>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Entrar
                                    </button>
                                </div>
                            </form>
                            <div className="mt-3">
                                <button
                                    className="btn btn-link"
                                    onClick={handleForgotPasswordClick}
                                >
                                    Esqueci minha senha
                                </button>
                            </div>
                            <div className="mt-3">
                                <button
                                    className="btn btn-link"
                                    onClick={handleChangePasswordClick}
                                >
                                    Alterar senha
                                </button>
                            </div>
                            <div className="mt-3">
                                <button
                                    className="btn btn-outline-primary btn-block"
                                    onClick={handleGoogleLoginClick}
                                >
                                    Entrar com Google
                                </button>
                            </div>
                            <div className="mt-3">
                                <button
                                    className="btn btn-outline-primary btn-block"
                                    onClick={handleFacebookLoginClick}
                                >
                                    Entrar com Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
