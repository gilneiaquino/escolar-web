import { useNavigate } from 'react-router-dom';
import { adicionarMensagem, limparMensagens } from '../mensagens/mensagensSlice';
import { Usuario } from '../modelos/Usuario';
import { UsuarioDto } from '../modelos/UsuarioDto';
import UsuarioService from './UsuarioService';

class UsuarioController {

  private usuarioService: UsuarioService;
  private navigate = useNavigate();


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

  public async criarUsuario(usuario: Usuario, token: string): Promise<Usuario> {
    try {
      const novoUsuario = await this.usuarioService.cadastrar(usuario, token);
      return novoUsuario;
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  public async atualizarUsuario(usuario: Usuario, token: string): Promise<Usuario> {
    try {
      const usuarioAtualizado = await this.usuarioService.atualizar(usuario, token);
      return usuarioAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar usuário');
    }
  }

  public async recuperar(id: string, token: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioService.recuperar(id, token);
      return usuario;
    } catch (error) {
      throw new Error('Erro ao recuperar usuário');
    }
  }

  public async excluirUsuario(id: string, token: string): Promise<void> {
    try {
      await this.usuarioService.excluir(id, token);
    } catch (error) {
      throw new Error('Erro ao excluir usuário');
    }
  }

  handleAdicionarUsuario = (dispatch: Function,
    usuario: Usuario, token: string) => {

    dispatch(limparMensagens());

    this.criarUsuario(usuario,token);

    dispatch(
      adicionarMensagem({
        id: Date.now(),
        texto: "Usuário cadastrado com sucesso.",
        tipo: "success"
      })
    );

  }

  public async login(usuarioDto: UsuarioDto) {
    try {
      const token = await this.usuarioService.login(usuarioDto);
      
      if (token) {
        return token;
      } else {
        return null;
      }
    } catch (error:any) {
      throw new Error(error); // Propaga o erro retornado pelo serviço para o componente
    }
  }
  
  
 
  public async consultar(
    nome: string,
    cpf: string,
    matricula: string,
    token: string
  ): Promise<Usuario[] | null> {
    try {
      this.usuarios = await this.usuarioService.consultar(nome, cpf, matricula,token);

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
