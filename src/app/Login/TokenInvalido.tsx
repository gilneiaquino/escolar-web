import React from 'react';

const TokenInvalido = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Token Inválido</div>
                        <div className="card-body">
                            <p>O token fornecido é inválido ou expirou. Por favor, solicite um novo link para redefinir sua senha.</p>
                            <div className='my-3 d-flex justify-content-center align-items-end'>
                                <a href="/esqueci-minha-senha">Voltar para a recuperação de senha</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenInvalido;
