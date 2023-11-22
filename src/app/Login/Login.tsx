import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import { useDispatch } from 'react-redux';
import { adicionarMensagem, limparMensagens } from '../mensagens/mensagensSlice';
import LoginController from './LoginController';

function Login() {
    const navigate = useNavigate();
    const loginController = new LoginController();
    const dispatch = useDispatch();

    useEffect(() => {
        // Função para limpar as mensagens quando o componente é montado
        dispatch(limparMensagens());
    }, [dispatch]);


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

    const handleSubmit = async (e: any) => {
        dispatch(limparMensagens());
        e.preventDefault();

        const { email, senha } = formData;

        const usuarioDto = {
            email: email,
            senha: senha,
        };

        try {
            await loginController.login(usuarioDto);
            navigate('/usuario-list-consulta');
        } catch (error: any) {
            dispatch(
                adicionarMensagem({
                  id: Date.now(),
                  texto: error.message || String(error),
                  tipo: "danger"
                })
              );
        }
    };


    const handleForgotPasswordClick = () => {
        navigate(`/esqueci-minha-senha`);
    };

    const handleChangePasswordClick = () => {
        navigate(`/alterar-minha-senha`);
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
