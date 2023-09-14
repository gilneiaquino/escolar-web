import { useState } from 'react';

const CursosDisponiveis = () => {
    // Simulando cursos disponíveis
    const cursosDisponiveis = [
        { titulo: 'Curso de JAVA', progresso: 10, conquistas: [] },
        { titulo: 'Curso de PHP', progresso: 15, conquistas: [] },
        { titulo: 'Curso de REACT', progresso: 25, conquistas: [] },
        { titulo: 'Curso de HTML', progresso: 10, conquistas: [] },
        { titulo: 'Curso de JUNIT', progresso: 100, conquistas: [] },
        { titulo: 'Curso de Canvas', progresso: 100, conquistas: [] },
        { titulo: 'Curso de HTML', progresso: 0, conquistas: [] },
        { titulo: 'Curso de Python', progresso: 0, conquistas: [] },
        { titulo: 'Curso de Node.js', progresso: 0, conquistas: [] },
    ];

    const [availableCourses] = useState(cursosDisponiveis);

    return (
        <div className='container'>
            <div className='row'>
                <div className="card my-3">
                    <div className="card-header ">
                    Cursos Disponíveis
                    </div>
                    <div className="row col-12">
                        {availableCourses.map((curso, index) => (
                            <div key={index}>
                                <div >
                                    <h5 >{curso.titulo}</h5>                            
                                    {curso.conquistas.length > 0 && (
                                        <div>
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
        </div>
    );
};

export default CursosDisponiveis;
