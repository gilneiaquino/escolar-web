import React from 'react';

const MateriaisCurso = () => {
  // Dados fictícios de materiais do curso
  const materiais = [
    { titulo: 'Apostila do Módulo 1', url: 'https://exemplo.com/apostila1.pdf' },
    { titulo: 'Vídeo de Introdução', url: 'https://exemplo.com/video_intro.mp4' },
    { titulo: 'Texto de Leitura Recomendada', url: 'https://exemplo.com/leitura_recomendada.pdf' },
  ];

  return (
    <div className="container">
      <h1 className="mt-4">Materiais do Curso</h1>
      <ul className="list-group mt-3">
        {materiais.map((material, index) => (
          <li key={index} className="list-group-item">
            <a href={material.url} target="_blank" rel="noopener noreferrer">
              {material.titulo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MateriaisCurso;
