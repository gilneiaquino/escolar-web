// AlunoList.tsx
import React, { useEffect, useState } from "react";
import { Aluno } from "../modelos/Aluno";
import { listarAlunos } from "./AlunoService";
import './Aluno.css';

const AlunoList: React.FC = () => {

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunos = await listarAlunos();
        setAlunos(alunos);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    fetchAlunos();
  }, []);


  return (
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
  );
};

export default AlunoList;
