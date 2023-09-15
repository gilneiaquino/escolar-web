import React, { useState } from 'react';
import ProgressBar from '../Progress/ProgressBar';
import './Curso.css';

const CursosIncritos = () => {
    const cursosPorPagina = 4; // Define o número de cursos por página

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

    // Dividir os cursos em grupos de 4
    const gruposDeCursos = [];
    for (let i = 0; i < cursos.length; i += cursosPorPagina) {
        gruposDeCursos.push(cursos.slice(i, i + cursosPorPagina));
    }

    return (
        <div className='container'>
            <h3 className='my-3'>Meus cursos Inscritos</h3>
            {gruposDeCursos.map((grupo, index) => (
                <div key={index} className='row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3'>
                    {grupo.map((curso, cursoIndex) => (
                        <div key={cursoIndex} className="col">
                            <div className="card card-completo mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="card-title d-flex justify-content-center">{curso.titulo}</h5>
                                </div>
                                <div className="card-body">
                                    <div className='my-2'>
                                        <ProgressBar progress={curso.progresso} />
                                    </div>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))} 
        </div>
    );
};

export default CursosIncritos;
