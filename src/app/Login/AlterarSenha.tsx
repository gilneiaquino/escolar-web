import React, {useEffect, useState} from 'react';
import LoginController from "./LoginController";
import {SenhaDto} from "../dtos/SenhaDto";
import {adicionarMensagem, limparMensagens} from "../mensagens/mensagensSlice";
import {useDispatch} from "react-redux";

function AlterarSenha() {
    const loginController = new LoginController();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(limparMensagens());
    }, [dispatch]);


    const [formData, setFormData] = useState<SenhaDto>({
        email: '',
        senhaAtual: '',
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
            await loginController.alterarSenha(formData);
            localStorage.removeItem('token'); // Remover o token após a alteração
            dispatch(
                adicionarMensagem({
                    id: Date.now(),
                    texto: String('Senha alterada com sucesso'),
                    tipo: "success"
                })
            );
            // Redirecionar para a tela de login após a alteração da senha
            setTimeout(() => {
                window.location.href = '/login';
            }, 3000); // Redirecionamento após 3 segundos

        } catch (error: any) {
            // Lógica para tratamento de erros
            console.error('Erro ao alterar senha:', error.message || String(error));
            dispatch(
                adicionarMensagem({
                    id: Date.now(),
                    texto: String('Erro ao alterar senha'),
                    tipo: "danger"
                })
            );
        }
    };


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Alterar Senha</div>
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
                                    <label htmlFor="senhaAtual">Senha Atual:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="senhaAtual"
                                        name="senhaAtual"
                                        value={formData.senhaAtual}
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
                            <div className="mt-3">
                                <a href="/login">Voltar para a tela de login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlterarSenha;
