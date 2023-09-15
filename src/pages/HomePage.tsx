import React from 'react';
import PerfilUsuario from '../app/painel/PerfilUsuario';
import MateriaisCurso from '../app/painel/MateriaisCurso';

const HomePage: React.FC = () => {
  return (
    <div>
       <PerfilUsuario></PerfilUsuario>
       <MateriaisCurso></MateriaisCurso>
    </div>
  );
};

export default HomePage;
