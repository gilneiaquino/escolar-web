import React from 'react';


interface AlunoProps {
  id: number;
  nome: string;
  dataNascimento: string;
  genero: string;
  endereco: string;
  telefones: string[];
  mensalidades: string[];
}

const Aluno: React.FC<AlunoProps> = ({
  id,
  nome,
  dataNascimento,
  genero,
  endereco,
  telefones,
  mensalidades,
}) => {
  return (
    <div className="aluno-card">
      <h2>{nome}</h2>
      <p>ID: {id}</p>
      <p>Data de Nascimento: {dataNascimento}</p>
      <p>Gênero: {genero}</p>
      <p>Endereço: {endereco}</p>
      <p>Telefones: {telefones.join(', ')}</p>
      <p>Mensalidades: {mensalidades.join(', ')}</p>
    </div>
  );
};

export default Aluno;
