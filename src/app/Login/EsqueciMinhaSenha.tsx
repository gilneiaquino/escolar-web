import React, { useState } from 'react';
import {adicionarMensagem} from "../mensagens/mensagensSlice";
import LoginController from "./LoginController";
import {useDispatch} from "react-redux";

function EsqueciMinhaSenha() {
    const loginController = new LoginController();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            loginController.recuperarSenha(email);
            setEnviado(true);
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



    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Esqueci Minha Senha</div>
                        <div className="card-body">
                            {enviado ? (
                                <p>
                                    Um email de redefinição de senha foi enviado para{' '}
                                    <strong>{email}</strong>. Verifique sua caixa de entrada.
                                </p>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Endereço de Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={handleChangeEmail}
                                            required
                                        />
                                    </div>
                                    <div className='my-3 d-flex justify-content-center align-items-end'>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Enviar Email de Redefinição
                                        </button>
                                    </div>
                                </form>
                            )}
                           <div className='my-3 d-flex justify-content-center align-items-end'>
                                <a href="/login">Voltar para a tela de login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EsqueciMinhaSenha;
