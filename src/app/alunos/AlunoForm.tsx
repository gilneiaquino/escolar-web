// AlunoForm.tsx
import React, { useState } from "react";
import * as AlunoController from "./AlunoController";
import { Aluno } from "../modelos/Aluno";

const AlunoForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [telefones, setTelefones] = useState([{ id: 1, ddd: 0, numero: 0, tipo: 'Residencial' }]); // Inicializa com um campo de telefone vazio

  const adicionarTelefone = () => {
    const novoTelefone = { id: telefones.length + 1, ddd: 0, numero: 0, tipo: 'Comercial' };
    setTelefones([...telefones, novoTelefone]); // Adiciona um novo campo de telefone vazio
  };

  const removerTelefone = (id: number) => {
    const novosTelefones = telefones.filter((telefone) => telefone.id !== id);
    setTelefones(novosTelefones);
  };

  const handleTelefoneChange = (id: number, campo: any, value: any) => {
    const novosTelefones = telefones.map((telefone) =>
      telefone.id === id ? { ...telefone, [campo]: value } : telefone
    );
    setTelefones(novosTelefones);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Envie o formulário com nome e a matriz de telefones para onde você precisar
  };

  const handleAdicionarAluno = () => {
    const aluno: Aluno = {
      nome,
      dataNascimento: new Date(dataNascimento),
      genero,
      endereco: {
        rua,
        numero,
        cidade,
        estado,
        cep,
      },
      telefones: telefones,
    };

    AlunoController.adicionarAluno(aluno);
    setNome("");
    setDataNascimento("");
    setGenero("");
    setRua("");
    setNumero("");
    setCidade("");
    setEstado("");
    setCep("");
  };

  return (
    <div>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="row">
            <div className="form-group col-md-4 mx-sm-3">
              <label>Nome</label>
              <input
                className="form-control"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2  mx-sm-3">
              <label>Data de Nascimento</label>
              <input
                className="form-control"
                type="date"
                placeholder="Data de Nascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>
            <div className="form-group  col-md-2  mx-sm-3">
              <label>Gênero</label>
              <input
                className="form-control"
                type="text"
                placeholder="Gênero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              />
            </div>
          </div>
          <br>
          </br>
          <h3>Endereço</h3>
          <div className="row">
            <div className="col mb-2 mx-sm-3">
              <label>Rua</label>
              <input
                className="form-control"
                type="text"
                placeholder="Rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <h3>Telefones</h3>
          {telefones.map((telefone) => (
            <div key={telefone.id}>
              <input
                type="text"
                placeholder="DDD"
                maxLength={2}
                size={2}
                value={telefone.ddd}
                onChange={(e) => handleTelefoneChange(telefone.id, 'ddd', e.target.value)}
              />
              <input
                type="text"
                placeholder="Número de Telefone"
                value={telefone.numero}
                onChange={(e) => handleTelefoneChange(telefone.id, 'numero', e.target.value)}
              />
              <input
                type="text"
                placeholder="Tipo de Telefone"
                value={telefone.tipo}
                onChange={(e) => handleTelefoneChange(telefone.id, 'tipo', e.target.value)}
              />
              <button type="button" onClick={() => removerTelefone(telefone.id)}>
                Remover
              </button>
            </div>
          ))}

          <div className="row">
            <div className="form-group col-md-2  mx-sm-3">
              <button type="button" className="btn btn-primary" onClick={adicionarTelefone}>
                Adicionar Telefone
              </button>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-1  mx-sm-3">
              <button type="button" className="btn btn-secondary">Limpar</button>
            </div>
            <div className="form-group col-md-1  mx-sm-3">
              <button type="button" className="btn btn-primary" onClick={handleAdicionarAluno}>Adicionar</button>
            </div>
          </div>


        </div>
      </form>

    </div>

  );
};

export default AlunoForm;
