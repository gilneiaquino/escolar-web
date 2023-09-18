import React, { useState } from 'react';
import ProgressBar from '../Progress/ProgressBar';
import './Curso.css';
import { Curso } from '../modelos/Curso';

const CursosIncritos = () => {
    const cursosPorPagina = 4; // Define o número de cursos por página

    // Simulando dados de cursos, progresso e conquistas
    const cursos : Curso[] = [
        { titulo: 'Curso de React', progresso: 75, conquistas: ['Certificado de Iniciante'], texto: 'Aprenda a criar aplicativos incríveis com React.', cor: 'bg-primary', agrupamento: 'Frontend' },
        { titulo: 'Curso de JavaScript', progresso: 50, conquistas: [], texto: 'Domine a linguagem de programação JavaScript.', cor: 'bg-secondary', agrupamento: 'Frontend' },
        { titulo: 'Curso de CSS', progresso: 10, conquistas: ['Certificado de Conclusão'], texto: 'Aprenda a estilizar páginas da web com CSS.', cor: 'bg-success', agrupamento: 'Frontend' },
        { titulo: 'Curso de JAVA', progresso: 15, conquistas: ['Certificado de Conclusão'], texto: 'Desenvolva aplicativos Java de alto desempenho.', cor: 'bg-info', agrupamento: 'Backend' },
        { titulo: 'Curso de PHP', progresso: 20, conquistas: ['Certificado de Conclusão'], texto: 'Construa aplicativos web dinâmicos com PHP.', cor: 'bg-warning', agrupamento: 'Backend' },
        { titulo: 'Curso de REACT', progresso: 7, conquistas: ['Certificado de Conclusão'], texto: 'Aprofunde-se no desenvolvimento React.', cor: 'bg-danger', agrupamento: 'Frontend' },
        { titulo: 'Curso de HTML', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Aprenda a criar estruturas HTML eficientes.', cor: 'bg-primary', agrupamento: 'Frontend' },
        { titulo: 'Curso de JUNIT', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Domine a criação de testes com JUnit.', cor: 'bg-secondary', agrupamento: 'Backend' },
        { titulo: 'Curso de Canvas', progresso: 100, conquistas: ['Certificado de Conclusão'], texto: 'Explore as possibilidades do HTML Canvas.', cor: 'bg-success', agrupamento: 'Frontend' },
    ];

    const [filtroAgrupamento, setFiltroAgrupamento] = useState('Todos');

    const gruposDeCursos = [];
    for (let i = 0; i < cursos.length; i += cursosPorPagina) {
        gruposDeCursos.push(cursos.slice(i, i + cursosPorPagina));
    }

    const opcoesAgrupamento = ['Todos', 'Frontend', 'Backend'];

    const cursosFiltrados = filtroAgrupamento === 'Todos' ? cursos : cursos.filter(curso => curso.agrupamento === filtroAgrupamento);

    return (
        <div className='container'>
            <h3 className='my-3 mx-2'>Meus cursos Inscritos</h3>
            <div className='my-3 mx-2'>
                <label htmlFor='filtroAgrupamento' className='form-label'>Filtrar por Agrupamento:</label>
                <select
                    id='filtroAgrupamento'
                    className='form-select'
                    value={filtroAgrupamento}
                    onChange={(e) => setFiltroAgrupamento(e.target.value)}
                >
                    {opcoesAgrupamento.map((opcao, index) => (
                        <option key={index} value={opcao}>{opcao}</option>
                    ))}
                </select>
            </div>
            {gruposDeCursos.map((grupo, index) => (
                <div key={index} className='row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3'>
                    {grupo.map((curso, cursoIndex) => (
                        <div key={cursoIndex} className="col">
                            <div className="card card-curso mb-3">
                                <div className={`card-header card-header-curso text-white ${curso.cor}`}>
                                    <h5 className="card-title d-flex justify-content-center">{curso.titulo}</h5>
                                </div>
                                <div className="card-body">
                                    <div className='my-2'>
                                        <ProgressBar progress={curso.progresso} />
                                    </div>
                                    <p className="card-text">{curso.texto}</p>
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
