import { Telefone } from "./Telefone";

export interface Aluno {
    id?: number;
    nome: string;
    dataNascimento: Date;
    genero: string;
    endereco: {
        rua: string;
        numero: string;
        cidade: string;
        estado: string;
        cep: string;
      };
      telefones: Telefone[]; 
 
  }

  