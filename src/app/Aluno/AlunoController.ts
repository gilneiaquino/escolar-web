import { adicionarMensagem, limparMensagens } from '../mensagens/mensagensSlice';
import { Aluno } from '../modelos/Aluno';
import AlunoService from './AlunoService';


class AlunoController {

  private alunoService: AlunoService;

  estados = [
    { nome: 'Acre', uf: 'AC' },
    { nome: 'Alagoas', uf: 'AL' },
    { nome: 'Amapá', uf: 'AP' },
    { nome: 'Amazonas', uf: 'AM' },
    { nome: 'Bahia', uf: 'BA' },
    { nome: 'Ceará', uf: 'CE' },
    { nome: 'Distrito Federal', uf: 'DF' },
    { nome: 'Espírito Santo', uf: 'ES' },
    { nome: 'Goiás', uf: 'GO' },
    { nome: 'Maranhão', uf: 'MA' },
    { nome: 'Mato Grosso', uf: 'MT' },
    { nome: 'Mato Grosso do Sul', uf: 'MS' },
    { nome: 'Minas Gerais', uf: 'MG' },
    { nome: 'Pará', uf: 'PA' },
    { nome: 'Paraíba', uf: 'PB' },
    { nome: 'Paraná', uf: 'PR' },
    { nome: 'Pernambuco', uf: 'PE' },
    { nome: 'Piauí', uf: 'PI' },
    { nome: 'Rio de Janeiro', uf: 'RJ' },
    { nome: 'Rio Grande do Norte', uf: 'RN' },
    { nome: 'Rio Grande do Sul', uf: 'RS' },
    { nome: 'Rondônia', uf: 'RO' },
    { nome: 'Roraima', uf: 'RR' },
    { nome: 'Santa Catarina', uf: 'SC' },
    { nome: 'São Paulo', uf: 'SP' },
    { nome: 'Sergipe', uf: 'SE' },
    { nome: 'Tocantins', uf: 'TO' }
  ];

  tipoTelefones = [
    { nome: 'Fixo' },
    { nome: 'Celular' }
  ];

  alunos: Aluno[] = [];

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

  public async atualizarAluno(aluno: Aluno): Promise<Aluno> {
    try {
      const alunoAtualizado = await this.alunoService.atualizarAluno(aluno);
      return alunoAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar aluno');
    }
  }

  public async recuperar(id: string): Promise<Aluno> {
    try {
      const aluno = await this.alunoService.recuperar(id);
      return aluno;
    } catch (error) {
      throw new Error('Erro ao recuperar aluno');
    }
  }

  public async excluirAluno(id: number): Promise<void> {
    try {
      await this.alunoService.excluirAluno(id);
    } catch (error) {
      throw new Error('Erro ao excluir aluno');
    }
  }


  handleAdicionarAluno = (dispatch: Function,
    scrollToTop: Function,
    aluno: Aluno) => {

    dispatch(limparMensagens());

    this.criarAluno(aluno);

    dispatch(
      adicionarMensagem({
        id: Date.now(),
        texto: "Aluno cadastrado com sucesso.",
        tipo: "success"
      })
    );

  }

  public async consultar(
    nome: string,
    cpf: string,
    matricula: string
  ): Promise<Aluno[] | null> {
    try {
      this.alunos = await this.alunoService.consultar(nome, cpf, matricula);

      if (this.alunos.length > 0) {
        return this.alunos;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Erro ao consultar aluno');
    }
  }


}

export default AlunoController;
