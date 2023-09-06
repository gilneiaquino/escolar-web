import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export interface Aluno {
    id?: number;
    nome: string;
    dataNascimento: Date;
    genero: string;
    cpf: string;
    email: string;
    enderecos: Endereco[];
    telefones: Telefone[];
}

