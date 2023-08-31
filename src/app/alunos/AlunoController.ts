// AlunoController.ts
import { Aluno } from "../modelos/Aluno";
import * as AlunoService from "./AlunoService";


export const listarAlunos = () => {
  return AlunoService.listarAlunos();
};

export const adicionarAluno = (aluno: Aluno) => {
  console.log("aluno", aluno);

  AlunoService.adicionarAluno(aluno);
};

export const atualizarAluno = (aluno: Aluno) => {
  AlunoService.atualizarAluno(aluno);
};

export const deletarAluno = (id: number) => {
  AlunoService.deletarAluno(id);
};
