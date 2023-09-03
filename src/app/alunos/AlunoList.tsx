// AlunoList.tsx
import React, { useEffect, useState } from "react";
import { Aluno } from "../modelos/Aluno";
import './Aluno.css';
import AlunoController from "./AlunoController";

const AlunoList: React.FC = () => {


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
    </div>

  );
};

export default AlunoList;
