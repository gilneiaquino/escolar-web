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

    if (this.validarForm(dispatch,
      aluno)) {
         

      this.criarAluno(aluno);

      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "Aluno cadastrado com sucesso.",
          tipo: "success"
        })
      );
      scrollToTop();
    }else{
      scrollToTop();
    }
 
  }



  public validarForm(
    dispatch: Function,
    aluno: Aluno): Boolean {

    let retorno  = true;
    if (aluno.nome.trim() === '') {
      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "O campo Nome não pode estar vazio.",
          tipo: "danger"
        })
      );
      retorno = false;
    }

    if (aluno.cpf.trim() === '') {
      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "O campo CPF não pode estar vazio.",
          tipo: "danger"
        })
      );
      retorno = false;
    }

    if (aluno.email.trim() === '') {
      dispatch(
        adicionarMensagem({
          id: Date.now(),
          texto: "O campo E-mail não pode estar vazio.",
          tipo: "danger"
        })
      );

      if (aluno.genero.trim() === '') {
        dispatch(
          adicionarMensagem({
            id: Date.now(),
            texto: "O campo Gênero não pode estar vazio.",
            tipo: "danger"
          })
        );
      };

      if (!(aluno.dataNascimento instanceof Date) || isNaN(aluno.dataNascimento.getTime())) {
        dispatch(
          adicionarMensagem({
            id: Date.now(),
            texto: "O campo Data de Nascimento não pode estar vazio.",
            tipo: "danger"
          })
        );
      };
      retorno = false;
    }


    return retorno;
  }
}

export default AlunoController;
