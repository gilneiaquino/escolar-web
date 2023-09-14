import React from 'react';
import ResumoDoProgresso from '../app/painel/CursosIncritos';
import PerfilUsuario from '../app/painel/PerfilUsuario';
import MateriaisCurso from '../app/painel/MateriaisCurso';

const HomePage: React.FC = () => {
  return (
    <div>
       <PerfilUsuario></PerfilUsuario>
       <MateriaisCurso></MateriaisCurso>
       <ResumoDoProgresso></ResumoDoProgresso>
    </div>
  );
};

export default HomePage;
