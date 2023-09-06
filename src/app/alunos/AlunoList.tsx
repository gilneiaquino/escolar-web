// AlunoList.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Aluno } from "../modelos/Aluno";
import './Aluno.css';
import AlunoController from "./AlunoController";
import { adicionarMensagem, limparMensagens } from "../mensagens/mensagensSlice";
  
 
const AlunoList: React.FC = () => {

  const dispatch = useDispatch();

  const alunoController = new AlunoController();

  const [alunos, setAlunos] = useState<Aluno[]>([]);
  

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunos = await alunoController.listarAlunos();
        setAlunos(alunos);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    fetchAlunos();
  }, []);

  const handleClick = () => {
    dispatch(
      adicionarMensagem({
        id: Date.now(),
        texto: "Uma mensagem foi adicionada!",
        tipo:"danger"
      })
    );
  };

  const removerMensagem = () => {
    dispatch(
      limparMensagens()
    );
  };
  


  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-header ">
          Aluno cadastrados
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">Genêro</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno: Aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>{aluno.dataNascimento.toString()}  </td>
                <td>{aluno.genero} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

              
      <button onClick={handleClick} className="btn btn-primary">
        Adicionar Mensagem
      </button>

      <button onClick={removerMensagem} className="btn btn-primary">
        Limpar mensagens
      </button>
      
    </div>

  );
};

export default AlunoList;
