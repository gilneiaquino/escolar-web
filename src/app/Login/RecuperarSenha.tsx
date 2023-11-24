import React, {useEffect, useState} from 'react';
import LoginController from "./LoginController";
import {SenhaDto} from "../dtos/SenhaDto";
import {adicionarMensagem, limparMensagens} from "../mensagens/mensagensSlice";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

function RecuperarSenha() {
    const loginController = new LoginController();
    const dispatch = useDispatch();
    const routerLocation = useLocation();

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        dispatch(limparMensagens());

        const searchParams = new URLSearchParams(routerLocation.search);
        const emailParam = searchParams.get('email');
        const tokenParam = searchParams.get('token');


        if (emailParam) {
            setFormData((prevState) => ({
                ...prevState,
                email: emailParam,
            }));
        }

        if (tokenParam) {
            setToken(tokenParam);
        }
    }, [dispatch, routerLocation.search]);


    const [formData, setFormData] = useState<SenhaDto>({
        email: '',
        novaSenha: '',
        confirmarSenha: '',
    });

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        dispatch(limparMensagens());
        try {
            if (formData.novaSenha !== formData.confirmarSenha) {
git s                console.error('As senhas não correspondem');
                dispatch(
                    adicionarMensagem({
                        id: Date.now(),
                        texto: 'As senhas não correspondem',
                        tipo: "danger"
                    })
                );
                return;
            }

            if (token) {
                await loginController.alterarSenhaRecuperada(formData, token);
                const successMessage = encodeURIComponent('Senha alterada com sucesso');
                window.location.href = `/login?message=${successMessage}`;
            }
        } catch (error: any) {
            // Lógica para tratamento de erros
            console.error('Erro ao alterar senha:', error.message || String(error));
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Recuperar Senha</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
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
                                    <label htmlFor="novaSenha">Nova Senha:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="novaSenha"
                                        name="novaSenha"
                                        value={formData.novaSenha}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmarSenha">Confirmar Nova Senha:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmarSenha"
                                        name="confirmarSenha"
                                        value={formData.confirmarSenha}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="my-3">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Alterar Senha
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecuperarSenha;
