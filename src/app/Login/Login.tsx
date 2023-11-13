import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioController from '../Usuario/UsuarioController';

function Login() {
    const navigate = useNavigate();
    const usuarioController = new UsuarioController();

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
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

        const { email, senha } = formData;

        const usuarioDto = {
            email: email,
            senha: senha,
        };

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
        // Redirecione para a página de autenticação do Google
    };

    const handleFacebookLoginClick = () => {
        // Adicione a lógica para o login com Facebook aqui
        // Redirecione para a página de autenticação do Facebook
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
                                    <label htmlFor="email">E-mail:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
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
