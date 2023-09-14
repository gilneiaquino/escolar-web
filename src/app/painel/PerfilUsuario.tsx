import React from 'react';
import { Link } from 'react-router-dom';

const PerfilUsuario: React.FC = () => {

    const usuario = {
        nomeDeUsuario: 'john_doe',
        fotoDePerfil: '../public/avatars/aluna.jpg',
        email: 'john@example.com',
        telefone: '123-456-7890',
        areaDeEstudo: 'Ciência da Computação',
        interesses: ['Programação', 'Design', 'Matemática'],
    };

    return (
        <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Perfil de Usuário</h5>
            <div className="row">
              <div className="col-md-2">
                <img src={usuario.fotoDePerfil} alt="Foto do Perfil" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h6 className="card-subtitle mb-2 text-muted">Nome de Usuário: {usuario.nomeDeUsuario}</h6>
                <p className="card-text">Email: {usuario.email}</p>
                <p className="card-text">Telefone: {usuario.telefone}</p>
              </div>
            </div>
            <h6 className="card-subtitle mt-4 mb-2 text-muted">Informações de Perfil</h6>
            <p className="card-text">Área de Estudo: {usuario.areaDeEstudo}</p>
            <p className="card-text">Interesses: {usuario.interesses.join(', ')}</p>
            <div><Link to='/calendario-entrega-trabalhos'>Calendário Atividades</Link></div>
          </div>
        </div>
      </div>
    );
};

export default PerfilUsuario;
