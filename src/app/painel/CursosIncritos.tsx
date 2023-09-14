import React, { useState } from 'react';

const CursosIncritos = () => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const cursosPorPagina = 3; // Define o número de cursos por página

    // Simulando dados de cursos, progresso e conquistas
    const cursos = [
        { titulo: 'Curso de React', progresso: 75, conquistas: ['Certificado de Iniciante'] },
        { titulo: 'Curso de JavaScript', progresso: 50, conquistas: [] },
        { titulo: 'Curso de CSS', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de JAVA', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de PHP', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de REACT', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de HTML', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de JUNIT', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de Canvas', progresso: 100, conquistas: ['Certificado de Conclusão'] },
    ];

    const indiceInicial = (paginaAtual - 1) * cursosPorPagina;
    const indiceFinal = paginaAtual * cursosPorPagina;

    return (
        <div className='container'>
            <div className='row'>
                <div className="card my-3">       
                    <h3 className='my-3'>Cursos Inscritos</h3>
                    <div className="row col-12">
                        {cursos.slice(indiceInicial, indiceFinal).map((curso, index) => (
                            <div key={index} className="card" style={{ width: '18rem', margin: '1rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{curso.titulo}</h5>
                                    <p className="card-text">
                                        Progresso: {curso.progresso}%
                                    </p>
                                    {curso.conquistas.length > 0 && (
                                        <div>
                                            <p>Conquistas desbloqueadas:</p>
                                            <ul className="list-group">
                                                {curso.conquistas.map((conquista, conquistaIndex) => (
                                                    <li key={conquistaIndex} className="list-group-item">{conquista}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(cursos.length / cursosPorPagina) }, (_, i) => (
                            <li key={i} className={`page-item ${i + 1 === paginaAtual ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setPaginaAtual(i + 1)}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CursosIncritos;
