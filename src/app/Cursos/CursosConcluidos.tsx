import React, { useState } from 'react';
import ProgressBar from '../Progress/ProgressBar';
import './Curso.css';

const CursosConcluidos = () => {
    const cursosPorPagina = 4; // Define o número de cursos por página

    const cursos = [
        { titulo: 'Curso de React', progresso: 75, conquistas: ['Certificado de Iniciante'], texto: 'Aprenda a criar aplicativos incríveis com React.', cor: 'bg-primary' },
        { titulo: 'Curso de JavaScript', progresso: 50, conquistas: [], texto: 'Domine a linguagem de programação JavaScript.', cor: 'bg-secondary' },
        { titulo: 'Curso de CSS', progresso: 10, conquistas: ['Certificado de Conclusão'], texto: 'Aprenda a estilizar páginas da web com CSS.', cor: 'bg-success' },
        { titulo: 'Curso de JAVA', progresso: 15, conquistas: ['Certificado de Conclusão'], texto: 'Desenvolva aplicativos Java de alto desempenho.', cor: 'bg-info' },
        { titulo: 'Curso de PHP', progresso: 20, conquistas: ['Certificado de Conclusão'], texto: 'Construa aplicativos web dinâmicos com PHP.', cor: 'bg-warning' },
        { titulo: 'Curso de REACT', progresso: 7, conquistas: ['Certificado de Conclusão'], texto: 'Aprofunde-se no desenvolvimento React.', cor: 'bg-danger' },
        { titulo: 'Curso de HTML', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Aprenda a criar estruturas HTML eficientes.', cor: 'bg-primary' },
        { titulo: 'Curso de JUNIT', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Domine a criação de testes com JUnit.', cor: 'bg-secondary' },
        { titulo: 'Curso de Canvas', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Explore as possibilidades do HTML Canvas.', cor: 'bg-success' },
        { titulo: 'Curso de Ruby', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Explore as possibilidades do HTML Canvas.', cor: 'bg-success' },
        { titulo: 'Curso de C#', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Explore as possibilidades do HTML Canvas.', cor: 'bg-success' },
        { titulo: 'Curso de ASP', progresso: 15, conquistas: ['Certificado de Conclusão'], texto: 'Desenvolva aplicativos Java de alto desempenho.', cor: 'bg-info' },
        { titulo: 'Curso de C++', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Explore as possibilidades do HTML Canvas.', cor: 'bg-primary' },
        { titulo: 'Curso de GIT', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Explore as possibilidades do HTML Canvas.', cor: 'bg-warning' },
    ];
    // Função para verificar se um curso possui a conquista "Certificado de Conclusão"
    const possuiCertificado = (curso: any) => {
        return curso.conquistas.includes('Certificado de Conclusão');
    };

    // Dividir os cursos em grupos de 4
    const gruposDeCursos = [];
    for (let i = 0; i < cursos.length; i += cursosPorPagina) {
        gruposDeCursos.push(cursos.slice(i, i + cursosPorPagina));
    }

    return (
        <div className='container'>
            <h3 className='my-3 mx-2'>Meus cursos Concluídos</h3>
            {gruposDeCursos.map((grupo, index) => (
                <div key={index} className='row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3'>
                    {grupo.map((curso, cursoIndex) => (
                        <div key={cursoIndex} className="col">
                            <div className={`card card-curso mb-3 ${possuiCertificado(curso) ? 'com-certificado' : ''}`}>
                                <div className={`card-header card-header-curso text-white ${curso.cor}`}>
                                    <h5 className="card-title d-flex justify-content-center">{curso.titulo}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{curso.texto}</p>
                                    {possuiCertificado(curso) && (
                                        <div className="certificado-indicativo">
                                            <span className="badge bg-success">Certificado</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CursosConcluidos;
