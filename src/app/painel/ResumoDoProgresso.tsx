import { useState } from 'react';

const ResumoDoProgresso = () => {
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

    // Simulando cursos disponíveis
    const cursosDisponiveis = [
        { titulo: 'Curso de JAVA', progresso: 10, conquistas: []},
        { titulo: 'Curso de PHP', progresso: 15, conquistas: []},
        { titulo: 'Curso de REACT', progresso: 25, conquistas: []},
        { titulo: 'Curso de HTML', progresso: 10, conquistas: []},
        { titulo: 'Curso de JUNIT', progresso: 100, conquistas: []},
        { titulo: 'Curso de Canvas', progresso: 100, conquistas: []},
        { titulo: 'Curso de HTML', progresso: 0, conquistas: [] },
        { titulo: 'Curso de Python', progresso: 0, conquistas: [] },
        { titulo: 'Curso de Node.js', progresso: 0, conquistas: [] },
    ];

    const [availableCourses] = useState(cursosDisponiveis);

    return (
        <div className='container'>
            <div className='row'>
                <h2>Resumo do Progresso</h2>
                <h3>Cursos Disponíveis</h3>
                {availableCourses.map((curso, index) => (
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

                <h3>Cursos Inscritos</h3>
                {cursos.map((curso, index) => (
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
    );
};

export default ResumoDoProgresso;
