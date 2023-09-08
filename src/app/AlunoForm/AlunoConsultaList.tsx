import { useState } from 'react';
import { Aluno } from '../modelos/Aluno';
import AlunoController from './AlunoController';
import InputMask from "react-input-mask";
 

function AlunoConsultaList() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const alunoController = new AlunoController();

  const consultarAlunos = async () => {
    try {
      const alunosConsultados = await alunoController.consultar(nome, cpf, matricula);
      setAlunos(alunosConsultados || []); // Define os alunos consultados no estado
    } catch (error) {
      console.error('Erro ao consultar alunos:', error);
    }
  };

  const handleEditarAluno = (id : any) => {
    // Implemente a lógica para editar o aluno com o ID alunoId
    console.log(`Editar aluno com ID ${id}`);
    // Você pode abrir um modal de edição ou navegar para uma página de edição, por exemplo.
  };
  
  const handleExcluirAluno = async (id: any) => {
    try {
       await alunoController.excluirAluno(id);
       const alunosConsultados = await alunoController.consultar(nome, cpf, matricula);
       setAlunos(alunosConsultados || []);  
     } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    }
  };
  

  const limpar = () => {
    setNome('');
    setCpf('');
    setMatricula('');
    setAlunos([]);
  }

  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-header ">
          Consultar Alunos
        </div>
        <div className="card-body">
          <div className="row col-12">
            <div className="form-group  col-md-5 mx-sm-3">
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
            <div className="form-group  col-md-2">
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
            <div className="form-group  col-md-2">
              <label htmlFor="matricula">Matrícula:</label>
              <input
                type="text"
                id="matricula"
                className="form-control"
                placeholder="Matricula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
              />
            </div>
          </div>
        </div>

      </div>

      <div className="row col-12 my-3   d-flex justify-content-end align-items-center">
        <div className="col-md-1  mx-sm-3">
          <button type="button" className="btn btn-secondary" onClick={limpar}>Limpar</button>
        </div>
        <div className=" col-md-1 ">
          <button type="button" className="btn btn-primary" onClick={consultarAlunos}>Salvar</button>
        </div>
      </div>


      <div className="card my-3">
        <div className="card-header ">
          Alunos cadastrados
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Matricula</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">Genêro</th>
              <th scope="col">Ações</th> 
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno: Aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>{aluno.cpf} </td>
                <td>{aluno.matricula} </td>
                <td>{aluno.dataNascimento.toString()}  </td>
                <td>{aluno.genero} </td>
                <td>
                  {/* Ícones de edição e exclusão */}
                  <i 
                    className="bi bi-pencil me-2 icon-hover" 
                    onClick={() => handleEditarAluno(aluno.id)}
                  ></i>
                  <i
                    className="bi bi-trash icon-hover" 
                    onClick={() => handleExcluirAluno(aluno.id)}
                  ></i>
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
}


export default AlunoConsultaList;
