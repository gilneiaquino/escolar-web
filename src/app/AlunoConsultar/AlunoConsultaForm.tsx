import { useState } from 'react';

function AlunoConsultaForm({  }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  let onConsulta:any;

  const handleConsulta = () => {
    // Chame a função de consulta com os valores atuais do formulário
    onConsulta(nome, cpf, matricula);
  };

  return (
    <div>
      <h2>Formulário de Consulta de Aluno</h2>
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          className="form-control"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="matricula">Matrícula:</label>
        <input
          type="text"
          id="matricula"
          className="form-control"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleConsulta}>
        Consultar
      </button>
    </div>
  );
}

export default AlunoConsultaForm;
