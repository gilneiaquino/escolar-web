// AlunoForm.tsx
import React, { useState } from "react";
import * as AlunoController from "./AlunoController";
import { Aluno } from "../modelos/Aluno";
import InputMask from "react-input-mask";



const estados = [
  { nome: 'Acre', uf: 'AC' },
  { nome: 'Alagoas', uf: 'AL' },
  { nome: 'Amapá', uf: 'AP' },
  { nome: 'Amazonas', uf: 'AM' },
  { nome: 'Bahia', uf: 'BA' },
  { nome: 'Ceará', uf: 'CE' },
  { nome: 'Distrito Federal', uf: 'DF' },
  { nome: 'Espírito Santo', uf: 'ES' },
  { nome: 'Goiás', uf: 'GO' },
  { nome: 'Maranhão', uf: 'MA' },
  { nome: 'Mato Grosso', uf: 'MT' },
  { nome: 'Mato Grosso do Sul', uf: 'MS' },
  { nome: 'Minas Gerais', uf: 'MG' },
  { nome: 'Pará', uf: 'PA' },
  { nome: 'Paraíba', uf: 'PB' },
  { nome: 'Paraná', uf: 'PR' },
  { nome: 'Pernambuco', uf: 'PE' },
  { nome: 'Piauí', uf: 'PI' },
  { nome: 'Rio de Janeiro', uf: 'RJ' },
  { nome: 'Rio Grande do Norte', uf: 'RN' },
  { nome: 'Rio Grande do Sul', uf: 'RS' },
  { nome: 'Rondônia', uf: 'RO' },
  { nome: 'Roraima', uf: 'RR' },
  { nome: 'Santa Catarina', uf: 'SC' },
  { nome: 'São Paulo', uf: 'SP' },
  { nome: 'Sergipe', uf: 'SE' },
  { nome: 'Tocantins', uf: 'TO' }
];

const tipoTelefones = [
  { nome: 'Residencial' },
  { nome: 'Comercial' }
];


const AlunoForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [telefones, setTelefones] = useState([{ id: 1, ddd: "", numero: "", tipo: 'Residencial' }]); // Inicializa com um campo de telefone vazio
  const [selectedTipoTelefone, setTipoTelefone] = useState('');


  const adicionarTelefone = () => {
    const novoTelefone = { id: telefones.length + 1, ddd: "", numero: "", tipo: 'Comercial' };
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

  const handleChangeEstado = (event: any) => {
    setEstado(event.target.value);
  };

  const handleChangeTipoTelefone = (event: any) => {
    setTipoTelefone(event.target.value);
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


    <form onSubmit={handleSubmit}>
      <div className="container card">
        <div className="card-header mx-sm-3">
          Dados Cadastrais
        </div>

        <div className="card-body">
          <div className="row col-12">
            <div className="form-group col-md-5 mx-sm-3">
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
          <div >
            <div className="card-header">
              Endereço
            </div>

            <div className="row col-12" >
              <div className="col-md-2 mx-sm-3">
                <label>Cep</label>
                <input
                  className="form-control"
                  type="text"
                  maxLength={8}
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </div>
              <div className="col-md-1 mx-sm-3">
                <label>Estado</label>
                <select className="form-control" value={estado} onChange={handleChangeEstado}>
                  <option value=""></option>
                  {estados.map((estado) => (
                    <option key={estado.uf} value={estado.uf}>
                      {estado.nome} - {estado.uf}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row col-12">
              <div className="col-md-2 mx-sm-3">
                <label>Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div>
              <div className="col-md-4 mx-sm-3">
                <label>Rua</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </div>
              <div className="col-md-2 mx-sm-3">
                <label>Número</label>
                <input
                  className="form-control"
                  type="text"
                  maxLength={5}
                  placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </div>
            </div>

          </div>
          <div className="card-header">
            Telefones
          </div>

          {telefones.map((telefone) => (
            <div className="row col-12" key={telefone.id}>
              <div className="col-md-2 mx-sm-3">
                <label>Tipo de Telefone</label>
                <select className="form-control"
                  value={selectedTipoTelefone} onChange={handleChangeTipoTelefone}>
                  {tipoTelefones.map((telefone) => (
                    <option key={telefone.nome} value={telefone.nome}>
                      {telefone.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2 mx-sm-3">
                <label>DDD</label>

                <InputMask
                  className="form-control"
                  mask="(99)"
                  id="DDD"
                  type="text"
                  name="DDD"
                  placeholder="(00)"
                  value={telefone.ddd}
                  onChange={(e) => handleTelefoneChange(telefone.id, 'ddd', e.target.value)}
                />

              </div>
              <div className="col-md-2 mx-sm-3">

                <label>Número de Telefone</label>
                <InputMask
                  className="form-control"
                  mask="99999-9999"
                  id="telefone"
                  type="text"
                  name="telefone"
                  placeholder="00000-0000"
                  value={telefone.numero}
                  onChange={(e) => handleTelefoneChange(telefone.id, 'numero', e.target.value)}
                />
              </div>


              <div className="col-md-2 mx-sm-3">
                <label>&nbsp;</label>
                <button type="button" className="btn btn-secondary" onClick={() => removerTelefone(telefone.id)}>
                  Remover
                </button>
              </div>
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
      </div>
    </form>



  );
};

export default AlunoForm;
