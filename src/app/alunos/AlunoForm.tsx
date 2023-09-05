// AlunoForm.tsx
import React, { ChangeEvent, useState } from "react";
import { Aluno } from "../modelos/Aluno";
import InputMask from "react-input-mask";
import AlunoController from "./AlunoController";
import { useDispatch } from "react-redux";
import { adicionarMensagem, limparMensagens } from "../mensagens/mensagensSlice";


const alunoController = new AlunoController();


const tipoTelefones = [
  { nome: 'Fixo' },
  { nome: 'Celular' }
];


const AlunoForm: React.FC = () => {

  const dispatch = useDispatch();

  const [erro, setErro] = useState('');
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
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");


  const handleChangeNome = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setNome(valor);
  };

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }

  const handleAdicionarAluno = () => {
    dispatch(
      limparMensagens()
    );
    if (nome.trim() === '') {
      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "O campo nome não pode estar vazio.",
        })
      );
      scrollToTop();
    } else {
      const aluno: Aluno = {
        nome,
        dataNascimento: new Date(dataNascimento),
        genero,
        cpf,
        email,
        endereco: {
          rua,
          numero,
          cidade,
          estado,
          cep
        },
        telefones: telefones,
      };

      alunoController.criarAluno(aluno);
      setNome("");
      setDataNascimento("");
      setGenero("");
      setRua("");
      setNumero("");
      setCidade("");
      setEstado("");
      setCep("");
      setEmail("");
      setCpf("");
    }


  };

  return (


    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="card my-3">
          <div className="card-header ">
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
                  onChange={handleChangeNome}
                />
              </div>
              <div className="form-group col-md-2  ">
                <label>Data de Nascimento</label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Data de Nascimento"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>
              <div className="form-group  col-md-2  ">
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
            <div className="row col-12 my-3">

              <div className="form-group  col-md-5  mx-sm-3  ">
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group  col-md-2 ">
                <label>CPF</label>
                <InputMask
                  className="form-control"
                  mask="999.999.999-99"
                  id="cpf"
                  type="text"
                  name="cpf"
                  placeholder="999.999.999-99"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-header">
            Endereço
          </div>
          <div className="card-body">
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
              <div className="col-md-1">
                <label>Estado</label>
                <select className="form-control" value={estado} onChange={handleChangeEstado}>
                  <option value=""></option>
                  {alunoController.estados.map((estado) => (
                    <option key={estado.uf} value={estado.uf}>
                      {estado.uf}
                    </option>
                  ))}
                </select>
              </div>
            </div>


            <div className="row col-12 my-3">
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
              <div className="col-md-4">
                <label>Rua</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </div>
              <div className="col-md-2">
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
        </div>
        <div className="card my-3">
          <div className="card-header">
            Telefones
          </div>
          {telefones.map((telefone, index) => (
            <div className="card-body" key={index}>
              <div className="row col-12" >
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
                <div className="col-md-1">
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
                <div className="col-md-2">

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


                <div className="col-md-1 d-flex justify-content-center align-items-end"
                  onClick={() => removerTelefone(telefone.id)}>
                  <button className="btn btn-primary">Remover</button>
                </div>
              </div>
            </div>
          ))}

          <div className="row col-12 my-3">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-primary" onClick={adicionarTelefone}>
                Adicionar Telefone
              </button>
            </div>
          </div>
        </div>
        <div className="row col-12 my-3   d-flex justify-content-end align-items-center">
          <div className="col-md-1  mx-sm-3">
            <button type="button" className="btn btn-secondary" onClick={handleAdicionarAluno}>Limpar</button>
          </div>
          <div className=" col-md-1  mx-sm-3">
            <button type="button" className="btn btn-primary"  onClick={handleAdicionarAluno}>Salvar</button>
          </div>
        </div>
      </div>


    </form>



  );
};

export default AlunoForm;
