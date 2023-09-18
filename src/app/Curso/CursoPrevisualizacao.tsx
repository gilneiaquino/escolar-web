import { useState } from 'react';
import ProgressBar from '../Progress/ProgressBar';
import { Curso } from '../modelos/Curso';

const CursoPreVisualizacao = ({ curso }: { curso: Curso }) => {
    const [cursoExpandido, setCursoExpandido] = useState<boolean>(false);

    const toggleDescricao = () => {
        setCursoExpandido(!cursoExpandido);
    };

    return (
        <div >
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
                            {cursoExpandido ? (
                                <>
                                    <p className="card-text descricao-completa">{curso.descricaoCompleta}</p>
                                    <button
                                        className="btn btn-link"
                                        onClick={toggleDescricao}
                                    >
                                        Reduzir
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="btn btn-link"
                                    onClick={toggleDescricao}
                                >
                                    Leia mais
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CursoPreVisualizacao;
