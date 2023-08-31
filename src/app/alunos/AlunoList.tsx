// AlunoList.tsx
import React, {useEffect, useState} from "react";
import { Aluno } from "../modelos/Aluno";
import { listarAlunos } from "./AlunoService";

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
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno : Aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - {aluno.dataNascimento.toString()} - {aluno.genero}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
