import { Aluno } from '../modelos/Aluno';
import AlunoService from './AlunoService';


class AlunoController {
  private alunoService: AlunoService;

  constructor() {
    this.alunoService = new AlunoService();
  }

  public async criarAluno(aluno: Aluno): Promise<Aluno> {
    try {
      const novoAluno = await this.alunoService.criarAluno(aluno);
      return novoAluno;
    } catch (error) {
      throw new Error('Erro ao criar aluno');
    }
  }

  public async listarAlunos(): Promise<Aluno[]> {
    try {
      const alunos = await this.alunoService.listarAlunos();
      return alunos;
    } catch (error) {
      throw new Error('Erro ao listar alunos');
    }
  }

  public async atualizarAluno(aluno: Aluno): Promise<Aluno> {
    try {
      const alunoAtualizado = await this.alunoService.atualizarAluno(aluno);
      return alunoAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar aluno');
    }
  }

  public async excluirAluno(id: number): Promise<void> {
    try {
      await this.alunoService.excluirAluno(id);
    } catch (error) {
      throw new Error('Erro ao excluir aluno');
    }
  }
}

export default AlunoController;
