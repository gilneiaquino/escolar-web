// src/components/UserProfile.tsx

import React from 'react';

const UserProfile: React.FC = () => {

    const user = {
        username: 'john_doe',
        profilePicture: 'url_da_foto.png',
        email: 'john@example.com',
        phone: '123-456-7890',
        areaOfStudy: 'Ciência da Computação',
        interests: ['Programação', 'Design', 'Matemática'],
    };

    return (
        <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Perfil de Usuário</h5>
            <div className="row">
              <div className="col-md-4">
                <img src={user.profilePicture} alt="Foto do Perfil" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h6 className="card-subtitle mb-2 text-muted">Nome de Usuário: {user.username}</h6>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Telefone: {user.phone}</p>
              </div>
            </div>
            <h6 className="card-subtitle mt-4 mb-2 text-muted">Informações de Perfil</h6>
            <p className="card-text">Área de Estudo: {user.areaOfStudy}</p>
            <p className="card-text">Interesses: {user.interests.join(', ')}</p>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;
