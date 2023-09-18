import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
        console.log('Dados do formulário enviados:', formData);
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

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Tela de Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Nome de Usuário ou E-mail:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Senha:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
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
