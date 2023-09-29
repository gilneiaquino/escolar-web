import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export interface Usuario {
    id?: number;
    nome: string;
    dataNascimento: Date;
    genero: string;
    cpf: string;
    email: string;
    enderecos: Endereco[];
    telefones: Telefone[];
    matricula: string;
}
