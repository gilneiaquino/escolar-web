// AlunoForm.tsx
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import AlunoController from "./AlunoController";
import { useDispatch } from "react-redux";
import { Aluno } from "../modelos/Aluno";
import { useParams } from 'react-router-dom';



const AlunoForm: React.FC = () => {
  const alunoController = new AlunoController();

  const dispatch = useDispatch();

  const initialState: Aluno = {
    id: undefined, // Define como undefined inicialmente
    nome: '',
    dataNascimento: new Date(),
    genero: '',
    matricula: '',
    enderecos: [{
      id: 1,
      rua: '',
      numero: '',
      cidade: '',
      estado: '',
      cep: ''
    }],
    telefones: [{
      id: 1,
      ddd: '',
      numero: '',
      tipo: 'Residencial'
    }],
    email: '',
    cpf: ''
  };

  const [aluno, setAluno] = useState(initialState);


  const [erroNome, setErroNome] = useState('');

  const { id } = useParams();

  const adicionarTelefone = () => {
    setAluno((prevAluno) => ({
      ...prevAluno,
      telefones: [
        ...prevAluno.telefones,
        { id: prevAluno.telefones.length + 1, ddd: "", numero: "", tipo: 'Comercial' }
      ]
    }));
  };

  const adicionarEndereco = () => {
    setAluno((prevAluno) => ({
      ...prevAluno,
      enderecos: [
        ...prevAluno.enderecos,
        {
          id: prevAluno.enderecos.length + 1,
          rua: "",
          numero: "",
          cidade: "",
          estado: "",
          cep: ""
        }
      ]
    }));
  };

  const removerTelefone = (id: number | undefined) => {
    if (id) {
      setAluno((prevAluno) => ({
        ...prevAluno,
        telefones: prevAluno.telefones.filter((telefone) => telefone.id !== id)
      }));
    }
  };

  const removerEndereco = (id: number | undefined) => {
    if (id) {
      setAluno((prevAluno) => ({
        ...prevAluno,
        enderecos: prevAluno.enderecos.filter((endereco) => endereco.id !== id)
      }));
    }
  };

  const handleTelefoneChange = (id: number | undefined, campo: string, value: string) => {
    if (id) {
      setAluno((prevAluno) => ({
        ...prevAluno,
        telefones: prevAluno.telefones.map((telefone) =>
          telefone.id === id ? { ...telefone, [campo]: value } : telefone
        )
      }));
    }
  };

  const handleEnderecoChange = (id: number | undefined, campo: string, value: string) => {
    if (id) {
      setAluno((prevAluno) => ({
        ...prevAluno,
        enderecos: prevAluno.enderecos.map((endereco) =>
          endereco.id === id ? { ...endereco, [campo]: value } : endereco
        )
      }));
    }
  };

  const handleTipoTelefoneChange = (index: number, tipoTelefone: string) => {
    const novosTelefones = [...aluno.telefones];
    novosTelefones[index].tipo = tipoTelefone;
    setAluno({ ...aluno, telefones: novosTelefones });
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!aluno.nome) {
      setErroNome('O campo nome é obrigatório.');
      scrollToTop();
    } else {
      // Realize a ação de envio do formulário
      console.log('Formulário válido, enviado com sucesso:', aluno.nome);
      // Limpe o erro após o envio bem-sucedido
      setErroNome('');

      adicionarAluno();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const adicionarAluno = () => {
    const novoAluno: Aluno = {
      nome: aluno.nome,
      dataNascimento: new Date(aluno.dataNascimento),
      genero: aluno.genero,
      cpf: aluno.cpf,
      email: aluno.email,
      enderecos: aluno.enderecos,
      telefones: aluno.telefones,
      matricula: aluno.matricula
    };

    alunoController.handleAdicionarAluno(
      dispatch,
      scrollToTop,
      novoAluno
    );

    limpar();
  };


  const limpar = () => {
    setAluno({
      id: 1,
      nome: '',
      dataNascimento: new Date(),
      genero: '',
      matricula: '',
      enderecos: [{
        id: 1,
        rua: '',
        numero: '',
        cidade: '',
        estado: '',
        cep: ''
      }],
      telefones: [{
        id: 1,
        ddd: '',
        numero: '',
        tipo: 'Residencial'
      }],
      email: '',
      cpf: ''
    });
  };

  useEffect(() => {
    async function fetchAluno() {
      try {
        if (id) {
          const alunoRecuperado = await alunoController.recuperar(id); // Suponha que você tenha um objeto alunoController
          alunoRecuperado.dataNascimento = new Date(alunoRecuperado.dataNascimento);

          if (alunoRecuperado.enderecos[0] === null) {
            alunoRecuperado.enderecos = [{
              id: 1,
              rua: "",
              numero: "",
              cidade: "",
              estado: "",
              cep: ""
            }];
          }

          if (alunoRecuperado.telefones[0] === null) {
            alunoRecuperado.telefones = [{ id: 1, ddd: "", numero: "", tipo: 'Comercial' }]
          }
          setAluno(alunoRecuperado);
        }
      } catch (error) {
        console.error('Erro ao recuperar aluno:', error);
      }
    }

    if (id) {
      fetchAluno();
    }
  }, [id]);
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
                  className={`form-control ${erroNome && 'is-invalid'}`}
                  type="text"
                  placeholder="Nome"
                  value={aluno.nome}
                  onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
                />
                {erroNome && <div className="invalid-feedback">{erroNome}</div>}
              </div>
              <div className="form-group col-md-2  ">
                <label>Data de Nascimento</label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Data de Nascimento"
                  value={aluno.dataNascimento.toISOString().split('T')[0]}
                  onChange={(e) => setAluno({ ...aluno, dataNascimento: new Date(e.target.value) })}
                />
              </div>
              <div className="form-group  col-md-2  ">
                <label>Gênero</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Gênero"
                  value={aluno.genero}
                  onChange={(e) => setAluno({ ...aluno, genero: e.target.value })}
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
                    value={aluno.email}
                    onChange={(e) => setAluno({ ...aluno, email: e.target.value })}
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
                  value={aluno.cpf}
                  onChange={(e) => setAluno({ ...aluno, cpf: e.target.value })}
                />
              </div>
              <div className="form-group  col-md-2  ">
                <label>Matricula</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Matricula"
                  value={aluno.matricula}
                  onChange={(e) => setAluno({ ...aluno, matricula: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-header">
            Endereço
          </div>
          <div className="card-body">
            {aluno.enderecos.map((endereco, index) => (
              <div className="card-body" key={index}>
                <div className="row col-12" >

                  <div className="row col-12" >
                    <div className="col-md-2 mx-sm-3">
                      <label>Cep</label>
                      <input
                        className="form-control"
                        type="text"
                        maxLength={8}
                        placeholder="CEP"
                        value={endereco.cep}
                        onChange={(e) => handleEnderecoChange(endereco.id, 'cep', e.target.value)}
                      />
                    </div>
                    <div className="col-md-1">
                      <label>Estado</label>
                      <select className="form-control" value={endereco.estado}
                        onChange={(e) => handleEnderecoChange(endereco.id, 'estado', e.target.value)}
                      >
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
                        value={endereco.cidade}
                        onChange={(e) => handleEnderecoChange(endereco.id, 'cidade', e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Rua</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Rua"
                        value={endereco.rua}
                        onChange={(e) => handleEnderecoChange(endereco.id, 'rua', e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <label>Número</label>
                      <input
                        className="form-control"
                        type="text"
                        maxLength={5}
                        placeholder="Número"
                        value={endereco.numero}
                        onChange={(e) => handleEnderecoChange(endereco.id, 'numero', e.target.value)}
                      />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-end"
                      onClick={() => removerEndereco(endereco.id)}>
                      <button className="btn btn-primary">Remover</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={adicionarEndereco}>
          Adicionar Endereço
        </button>


        <div className="card my-3">
          <div className="card-header">
            Telefones
          </div>
          {aluno.telefones.map((telefone, index) => (
            <div className="card-body" key={index}>
              <div className="row col-12" >
                <div className="col-md-2 mx-sm-3">
                  <label>Tipo de Telefone</label>
                  <select className="form-control"
                    value={telefone.tipo}
                    onChange={(e) => handleTipoTelefoneChange(index, e.target.value)} // Aqui você precisa passar o índice correto
                  >
                    {alunoController.tipoTelefones.map((telefone) => (
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


        </div>

        <button type="button" className="btn btn-primary" onClick={adicionarTelefone}>
          Adicionar Telefone
        </button>

        <div className="row col-12 my-3   d-flex justify-content-end align-items-center">
          <div className="col-md-1  mx-sm-3">
            <button type="button" className="btn btn-secondary" onClick={limpar}>Limpar</button>
          </div>
          <div className=" col-md-1  mx-sm-3">
            <button type="submit" className="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>


    </form >



  );
};

export default AlunoForm;
