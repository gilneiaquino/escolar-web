import { adicionarMensagem, limparMensagens } from '../mensagens/mensagensSlice';
import { Usuario } from '../modelos/Usuario';
import UsuarioService from './UsuarioService';

class UsuarioController {
  private usuarioService: UsuarioService;

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

  usuarios: Usuario[] = [];

  constructor() {
    this.usuarioService = new UsuarioService();
  }

  public async criarUsuario(usuario: Usuario): Promise<Usuario> {
    try {
      const novoUsuario = await this.usuarioService.criar(usuario);
      return novoUsuario;
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  public async atualizarUsuario(usuario: Usuario): Promise<Usuario> {
    try {
      const usuarioAtualizado = await this.usuarioService.atualizar(usuario);
      return usuarioAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar usuário');
    }
  }

  public async recuperar(id: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioService.recuperar(id);
      return usuario;
    } catch (error) {
      throw new Error('Erro ao recuperar usuário');
    }
  }

  public async excluirUsuario(id: string): Promise<void> {
    try {
      await this.usuarioService.excluir(id);
    } catch (error) {
      throw new Error('Erro ao excluir usuário');
    }
  }

  handleAdicionarUsuario = (dispatch: Function,
    scrollToTop: Function,
    usuario: Usuario) => {

    dispatch(limparMensagens());

    this.criarUsuario(usuario);

    dispatch(
      adicionarMensagem({
        id: Date.now(),
        texto: "Usuário cadastrado com sucesso.",
        tipo: "success"
      })
    );

  }

  public async consultar(
    nome: string,
    cpf: string,
    matricula: string
  ): Promise<Usuario[] | null> {
    try {
      this.usuarios = await this.usuarioService.consultar(nome, cpf, matricula);

      if (this.usuarios.length > 0) {
        return this.usuarios;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Erro ao consultar usuário');
    }
  }
}

export default UsuarioController;
