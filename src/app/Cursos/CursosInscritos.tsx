import React, { useState } from 'react';
import ProgressBar from '../Progress/ProgressBar';
import './Curso.css';


const CursosIncritos = () => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const cursosPorPagina = 3; // Define o número de cursos por página

    // Simulando dados de cursos, progresso e conquistas
    const cursos = [
        { titulo: 'Curso de React', progresso: 75, conquistas: ['Certificado de Iniciante'] },
        { titulo: 'Curso de JavaScript', progresso: 50, conquistas: [] },
        { titulo: 'Curso de CSS', progresso: 10, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de JAVA', progresso: 15, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de PHP', progresso: 20, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de REACT', progresso: 7, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de HTML', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de JUNIT', progresso: 100, conquistas: ['Certificado de Conclusão'] },
        { titulo: 'Curso de Canvas', progresso: 100, conquistas: ['Certificado de Conclusão'] },
    ];

    const indiceInicial = (paginaAtual - 1) * cursosPorPagina;
    const indiceFinal = paginaAtual * cursosPorPagina;

    return (
        <div className='container'>
             <h3 className='my-3'>Meus cursos Inscritos</h3>
            <div className='d-flex'>
                     {cursos.slice(indiceInicial, indiceFinal).map((curso, index) => (
                        <div key={index} className=" card card-completo m-0 mx-1">
                            <div className="card-header">
                                <h5 className="card-title d-flex justify-content-center">{curso.titulo}</h5>
                            </div>
                            <div className="card-body">
                                <div className='my-2'>
                                    <ProgressBar progress={curso.progresso} />
                                </div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer text-muted m-0">
                                2 days ago
                            </div>
                        </div>
                    ))}
               

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
