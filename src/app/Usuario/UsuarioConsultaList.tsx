import {useState} from 'react';
import {Usuario} from '../modelos/Usuario';
import InputMask from "react-input-mask";
import {useNavigate} from 'react-router-dom';
import UsuarioController from './UsuarioController';

function UsuarioConsultaList() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const navigate = useNavigate();
  const usuarioController = new UsuarioController();
  const [usuarioIdParaExcluir, setUsuarioIdParaExcluir] = useState(null);


  const consultarUsuarios = async () => {
    try {
        const usuariosConsultados = await usuarioController.consultar(nome, cpf, matricula);
        setUsuarios(usuariosConsultados || []);
    } catch (error) {
      console.error('Erro ao consultar usuários:', error);
    }
  };

  const handleEditarUsuario = (id: any) => {
    navigate(`/usuario-form/${id}`);
  };

  const abrirModalExcluir = (id: any) => {
    setUsuarioIdParaExcluir(id);
  };

  const handleExcluirUsuario = async (id: any) => {
    try {
        await usuarioController.excluirUsuario(id);
        const usuariosConsultados = await usuarioController.consultar(nome, cpf, matricula);
        setUsuarios(usuariosConsultados || []);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };
  

  const limpar = () => {
    setNome('');
    setCpf('');
    setMatricula('');
    setUsuarios([]);
  }

  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-header">
          Consultar Usuários
        </div>
        <div className="card-body">
          <div className="row col-12">
            <div className="form-group col-md-5 mx-sm-3">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                className="form-control"
                value={nome}
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="cpf">CPF:</label>
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
            <div className="form-group col-md-2">
              <label htmlFor="matricula">Matrícula:</label>
              <input
                type="text"
                id="matricula"
                className="form-control"
                placeholder="Matrícula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row col-12 my-3 d-flex justify-content-end align-items-center">
        <div className="col-md-1 mx-sm-3">
          <button type="button" className="btn btn-secondary" onClick={limpar}>Limpar</button>
        </div>
        <div className="col-md-1">
          <button type="button" className="btn btn-primary" onClick={consultarUsuarios}>Consultar</button>
        </div>
      </div>

      <div className="card my-3">
        <div className="card-header">
          Usuários cadastrados
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Matrícula</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">Gênero</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario: Usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.cpf} </td>
                <td>{usuario.matricula} </td>
                <td>{usuario.dataNascimento.toString()}  </td>
                <td>{usuario.genero} </td>
                <td>
                  {/* Ícones de edição e exclusão */}
                  <i
                    className="bi bi-pencil me-2 icon-hover"
                    onClick={() => handleEditarUsuario(usuario.id)}
                  ></i>
                  <i
                    className="bi bi-trash icon-hover"
                    onClick={() => abrirModalExcluir(usuario.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#ExemploModalCentralizado"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="ExemploModalCentralizado" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="TituloModalCentralizado">Excluir</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Tem certeza que gostaria de excluir o usuário?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleExcluirUsuario(usuarioIdParaExcluir)}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioConsultaList;
