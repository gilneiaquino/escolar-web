import React, { useState } from 'react';

function AlterarSenha() {
  const [formData, setFormData] = useState({
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para verificar a senha atual
    // e atualizar a senha do usuário com a nova senha.
    console.log('Dados do formulário enviados:', formData);
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
                <button type="submit" className="btn btn-primary btn-block">
                  Alterar Senha
                </button>
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
