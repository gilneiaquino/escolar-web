import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export interface Usuario {
    id?: string;
    nome: string;
    dataNascimento: Date;
    genero: string;
    cpf: string;
    email: string;
    enderecos: Endereco[];
    telefones: Telefone[];
    matricula: string;
    senha: string;
    confirmacaoSenha?: string
    perfil: string
}
