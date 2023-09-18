import React, { useState } from 'react';
import ProgressBar from '../Progress/ProgressBar';
import './Curso.css';
import { Curso } from '../modelos/Curso';

const CursosIncritos = () => {
    const cursosPorPagina = 4; // Define o número de cursos por página

    // Simulando dados de cursos, progresso e conquistas
    const cursos: Curso[] = [
        {
            titulo: 'Curso de React',
            progresso: 75,
            conquistas: ['Certificado de Iniciante'],
            descricaoResumida: 'Aprenda a criar aplicativos incríveis com React.',
            descricaoCompleta: 'Este curso aborda todos os aspectos do desenvolvimento com React, desde os conceitos básicos até tópicos avançados. Você aprenderá a construir aplicativos web interativos e reativos usando React.',
            cor: 'bg-primary',
            agrupamento: 'Frontend',
        },
        {
            titulo: 'Curso de JavaScript',
            progresso: 50,
            conquistas: [],
            descricaoResumida: 'Domine a linguagem de programação JavaScript.',
            descricaoCompleta: 'Este curso é uma introdução abrangente à linguagem JavaScript. Você aprenderá os fundamentos, como variáveis, funções e estruturas de controle, e também explorará tópicos avançados, como programação assíncrona e manipulação do DOM.',
            cor: 'bg-secondary',
            agrupamento: 'Frontend',
        },
        {
            titulo: 'Curso de CSS',
            progresso: 10,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Aprenda a estilizar páginas da web com CSS.',
            descricaoCompleta: 'Este curso ensina como usar o CSS para estilizar suas páginas da web. Você aprenderá a aplicar estilos, criar layouts responsivos e muito mais.',
            cor: 'bg-success',
            agrupamento: 'Frontend',
        },
        {
            titulo: 'Curso de JAVA',
            progresso: 15,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Desenvolva aplicativos Java de alto desempenho.',
            descricaoCompleta: 'Neste curso avançado de Java, você aprofundará seus conhecimentos em programação Java. Aprenderá sobre tópicos como concorrência, coleções avançadas e design patterns.',
            cor: 'bg-info',
            agrupamento: 'Backend',
        },
        {
            titulo: 'Curso de PHP',
            progresso: 20,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Construa aplicativos web dinâmicos com PHP.',
            descricaoCompleta: 'Aprenda a usar PHP para desenvolver aplicativos web dinâmicos. Você dominará o desenvolvimento back-end com PHP, incluindo acesso a bancos de dados e criação de APIs.',
            cor: 'bg-warning',
            agrupamento: 'Backend',
        },
        {
            titulo: 'Curso de REACT',
            progresso: 7,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Aprofunde-se no desenvolvimento React.',
            descricaoCompleta: 'Este curso avançado de React é para desenvolvedores que desejam aprofundar seus conhecimentos. Você explorará tópicos avançados, como gerenciamento de estado avançado e roteamento.',
            cor: 'bg-danger',
            agrupamento: 'Frontend',
        },
        {
            titulo: 'Curso de HTML',
            progresso: 100,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Aprenda a criar estruturas HTML eficientes.',
            descricaoCompleta: 'Este curso abrange tudo o que você precisa saber sobre HTML. Desde a criação de estruturas básicas até formulários avançados e mídia incorporada.',
            cor: 'bg-primary',
            agrupamento: 'Frontend',
        },
        {
            titulo: 'Curso de JUNIT',
            progresso: 100,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Domine a criação de testes com JUnit.',
            descricaoCompleta: 'Aprenda a escrever testes unitários eficazes em Java usando o framework JUnit. Este curso é essencial para desenvolvedores Java.',
            cor: 'bg-secondary',
            agrupamento: 'Backend',
        },
        {
            titulo: 'Curso de Canvas',
            progresso: 100,
            conquistas: ['Certificado de Conclusão'],
            descricaoResumida: 'Explore as possibilidades do HTML Canvas.',
            descricaoCompleta: 'Descubra como usar a API Canvas do HTML para criar gráficos interativos, jogos e muito mais. Este curso é perfeito para entusiastas da programação criativa.',
            cor: 'bg-success',
            agrupamento: 'Frontend',
        },
    ];

    const [filtroAgrupamento, setFiltroAgrupamento] = useState('Todos');

    const gruposDeCursos = [];
    for (let i = 0; i < cursos.length; i += cursosPorPagina) {
        gruposDeCursos.push(cursos.slice(i, i + cursosPorPagina));
    }

    const opcoesAgrupamento = ['Todos', 'Frontend', 'Backend'];

    const [cursoExpandido, setCursoExpandido] = useState<number | null>(null);


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
                                        <p className="card-text">{curso.descricaoResumida}</p>
                                        {curso.descricaoCompleta && (
                                            <>
                                                {cursoExpandido === cursoIndex ? (
                                                    <p className="card-text descricao-completa">{curso.descricaoCompleta}</p>
                                                ) : (
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() => setCursoExpandido(cursoIndex)}
                                                    >
                                                        Leia mais
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>

        </div>
    );
};

export default CursosIncritos;
