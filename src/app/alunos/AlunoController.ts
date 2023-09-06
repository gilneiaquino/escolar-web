import { adicionarMensagem, limparMensagens } from '../mensagens/mensagensSlice';
import { Aluno } from '../modelos/Aluno';
import { Telefone } from '../modelos/Telefone';
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


  handleAdicionarAluno = (dispatch: Function,
    scrollToTop: Function,
    nome: string, cpf: string, dataNascimento: string, genero: string,
    email: string, rua: string, numero: string, cidade: string, estado: string, cep: string,
    telefones: Array<Telefone>) => {

    dispatch(limparMensagens());

    if (this.validarForm(dispatch,
      scrollToTop,
      nome, cpf, 
      dataNascimento,
      genero,
      email, 
      rua, 
      numero, 
      cidade, 
      estado, 
      cep,
      telefones)) {
        
      const aluno = {
        nome,
        dataNascimento: new Date(dataNascimento),
        genero,
        cpf,
        email,
        endereco: {
          rua,
          numero,
          cidade,
          estado,
          cep
        },
        telefones,
      };

      this.criarAluno(aluno);

    }




  }



  public validarForm(
    dispatch: Function,
    scrollToTop: Function,
    nome: string,
    cpf: string,
    dataNascimento: string,
    genero: string,
    email: string, rua: string, numero: string, cidade: string, estado: string, cep: string,
    telefones: Array<Telefone>): Boolean {

    if (nome.trim() === '') {
      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "O campo nome não pode estar vazio.",
          tipo: "danger"
        })
      );
      scrollToTop();
    }

    if (cpf.trim() === '') {
      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "O campo cpf não pode estar vazio.",
          tipo: "danger"
        })
      );
      scrollToTop();
    }
    return false;
  }
}

export default AlunoController;
