import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import UsuarioController from "./UsuarioController";
import { useDispatch } from "react-redux";
import { Usuario } from "../modelos/Usuario";
import { useParams } from 'react-router-dom';

const UsuarioForm: React.FC = () => {
  const usuarioController = new UsuarioController();
  const dispatch = useDispatch();

  const initialState: Usuario = {
    id: undefined,
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

  const [usuario, setUsuario] = useState(initialState);

  const [erroNome, setErroNome] = useState<string>('');
  const [erroDataNascimento, setErroDataNascimento] = useState<string>('');
  const [erroGenero, setErroGenero] = useState<string>('');
  const [erroMatricula, setErroMatricula] = useState<string>('');
  const [erroCpf, setErroCpf] = useState<string>('');
  const [erroEmail, setErroEmail] = useState<string>('');

  const { id } = useParams();

  const adicionarTelefone = () => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      telefones: [
        ...prevUsuario.telefones,
        { id: prevUsuario.telefones.length + 1, ddd: "", numero: "", tipo: 'Comercial' }
      ]
    }));
  };

  const adicionarEndereco = () => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      enderecos: [
        ...prevUsuario.enderecos,
        {
          id: prevUsuario.enderecos.length + 1,
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
      setUsuario((prevUsuario) => ({
        ...prevUsuario,
        telefones: prevUsuario.telefones.filter((telefone) => telefone.id !== id)
      }));
    }
  };

  const removerEndereco = (id: number | undefined) => {
    if (id) {
      setUsuario((prevUsuario) => ({
        ...prevUsuario,
        enderecos: prevUsuario.enderecos.filter((endereco) => endereco.id !== id)
      }));
    }
  };

  const handleTelefoneChange = (id: number | undefined, campo: string, value: string) => {
    if (id) {
      setUsuario((prevUsuario) => ({
        ...prevUsuario,
        telefones: prevUsuario.telefones.map((telefone) =>
          telefone.id === id ? { ...telefone, [campo]: value } : telefone
        )
      }));
    }
  };

  const handleEnderecoChange = (id: number | undefined, campo: string, value: string) => {
    if (id) {
      setUsuario((prevUsuario) => ({
        ...prevUsuario,
        enderecos: prevUsuario.enderecos.map((endereco) =>
          endereco.id === id ? { ...endereco, [campo]: value } : endereco
        )
      }));
    }
  };

  const handleTipoTelefoneChange = (index: number, tipoTelefone: string) => {
    const novosTelefones = [...usuario.telefones];
    novosTelefones[index].tipo = tipoTelefone;
    setUsuario({ ...usuario, telefones: novosTelefones });
  };

  const handleSubmit = (e: any) => {
    if (validarForm(usuario)) {
      adicionarUsuario();
    } else {
      e.preventDefault();
    }
  };

  function validarForm(usuario: Usuario): boolean {
    let retorno = true;
    if (!usuario.nome) {
      setErroNome('O campo nome é obrigatório.');
      retorno = false;
    }

    if (!usuario.cpf) {
      setErroCpf('O campo CPF é obrigatório.');
      retorno = false;
    }

    if (usuario.email.trim() === '') {
      setErroEmail('O campo Email é obrigatório.');
    }

    if (usuario.genero.trim() === '') {
      setErroGenero('O campo Gênero é obrigatório.');
    }

    if (!(usuario.dataNascimento instanceof Date) || isNaN(usuario.dataNascimento.getTime())) {
      setErroDataNascimento('O campo Data de Nascimento é obrigatório.');
    }

    if (!usuario.matricula) {
      setErroMatricula('O campo Matrícula é obrigatório.');
    }

    if (retorno === false) {
      scrollToTop();
    }

    return retorno;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const adicionarUsuario = () => {
    const novoUsuario: Usuario = {
      nome: usuario.nome,
      dataNascimento: new Date(usuario.dataNascimento),
      genero: usuario.genero,
      cpf: usuario.cpf,
      email: usuario.email,
      enderecos: usuario.enderecos,
      telefones: usuario.telefones,
      matricula: usuario.matricula
    };

    usuarioController.handleAdicionarUsuario(
      dispatch,
      scrollToTop,
      novoUsuario
    );

    limpar();
  };

  const limpar = () => {
    setUsuario({
      id: undefined,
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
    async function fetchUsuario() {
      try {
        if (id) {
          const usuarioRecuperado = await usuarioController.recuperar(id);
          usuarioRecuperado.dataNascimento = new Date(usuarioRecuperado.dataNascimento);

          if (usuarioRecuperado.enderecos[0] === null) {
            usuarioRecuperado.enderecos = [{
              id: 1,
              rua: "",
              numero: "",
              cidade: "",
              estado: "",
              cep: ""
            }];
          }

          if (usuarioRecuperado.telefones[0] === null) {
            usuarioRecuperado.telefones = [{ id: 1, ddd: "", numero: "", tipo: 'Comercial' }]
          }
          setUsuario(usuarioRecuperado);
        }
      } catch (error) {
        console.error('Erro ao recuperar usuário:', error);
      }
    }

    if (id) {
      fetchUsuario();
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
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
                  value={usuario.nome}
                  onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
                />
                {erroNome && <div className="invalid-feedback">{erroNome}</div>}
              </div>
              <div className="form-group col-md-2">
                <label>Data de Nascimento</label>
                <input
                  className={`form-control ${erroDataNascimento && 'is-invalid'}`}
                  type="date"
                  placeholder="Data de Nascimento"
                  value={usuario.dataNascimento.toISOString().split('T')[0]}
                  onChange={(e) => setUsuario({ ...usuario, dataNascimento: new Date(e.target.value) })}
                />
                {erroDataNascimento && <div className="invalid-feedback">{erroDataNascimento}</div>}
              </div>
              <div className="form-group col-md-2">
                <label>Gênero</label>
                <input
                  className={`form-control ${erroGenero && 'is-invalid'}`}
                  type="text"
                  placeholder="Gênero"
                  value={usuario.genero}
                  onChange={(e) => setUsuario({ ...usuario, genero: e.target.value })}
                />
                {erroGenero && <div className="invalid-feedback">{erroGenero}</div>}
              </div>
            </div>
            <div className="row col-12 my-3">
              <div className="form-group col-md-5 mx-sm-3">
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                  </div>
                  <input
                    className={`form-control ${erroEmail && 'is-invalid'}`}
                    type="text"
                    placeholder="Email"
                    value={usuario.email}
                    onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                  />
                  {erroEmail && <div className="invalid-feedback">{erroEmail}</div>}
                </div>
              </div>
              <div className="form-group col-md-2">
                <label>CPF</label>
                <InputMask
                  className={`form-control ${erroCpf && 'is-invalid'}`}
                  mask="999.999.999-99"
                  id="cpf"
                  type="text"
                  name="cpf"
                  placeholder="999.999.999-99"
                  value={usuario.cpf}
                  onChange={(e) => setUsuario({ ...usuario, cpf: e.target.value })}
                />
                {erroCpf && <div className="invalid-feedback">{erroCpf}</div>}
              </div>
              <div className="form-group col-md-2">
                <label>Matricula</label>
                <input
                  className={`form-control ${erroMatricula && 'is-invalid'}`}
                  type="text"
                  placeholder="Matricula"
                  value={usuario.matricula}
                  onChange={(e) => setUsuario({ ...usuario, matricula: e.target.value })}
                />
                {erroMatricula && <div className="invalid-feedback">{erroMatricula}</div>}
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-header">
            Endereço
          </div>
          <div className="card-body">
            {usuario.enderecos.map((endereco, index) => (
              <div className="card-body" key={index}>
                <div className="row col-12">
                  <div className="row col-12">
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
                        {usuarioController.estados.map((estado) => (
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
          {usuario.telefones.map((telefone, index) => (
            <div className="card-body" key={index}>
              <div className="row col-12">
                <div className="col-md-2 mx-sm-3">
                  <label>Tipo de Telefone</label>
                  <select className="form-control"
                    value={telefone.tipo}
                    onChange={(e) => handleTipoTelefoneChange(index, e.target.value)}
                  >
                    {usuarioController.tipoTelefones.map((telefone) => (
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

        <div className="row col-12 my-3 d-flex justify-content-end align-items-center">
          <div className="col-md-1 mx-sm-3">
            <button type="button" className="btn btn-secondary" onClick={limpar}>Limpar</button>
          </div>
          <div className="col-md-1 mx-sm-3">
            <button type="submit" className="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UsuarioForm;
