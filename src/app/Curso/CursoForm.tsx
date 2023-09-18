import React, { useState } from 'react';
import { Curso } from '../modelos/Curso';

const CursoForm: React.FC<{}> = () => {
    const [novoCurso, setNovoCurso] = useState<Curso>({
        titulo: '',
        progresso: 0,
        conquistas: [],
        descricaoResumida: '',
        descricaoCompleta: '',
        cor: '',
        agrupamento: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNovoCurso({ ...novoCurso, [name]: value });
    };

    const handleConquistasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const conquista = e.target.value;
        if (conquista && !novoCurso.conquistas.includes(conquista)) {
            setNovoCurso({ ...novoCurso, conquistas: [...novoCurso.conquistas, conquista] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Limpar o estado após o envio
        setNovoCurso({
            titulo: '',
            progresso: 0,
            conquistas: [],
            descricaoResumida: '',
            descricaoCompleta: '',
            cor: '',
            agrupamento: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={novoCurso.titulo} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="progresso" className="form-label">Progresso</label>
                    <input type="number" className="form-control" id="progresso" name="progresso" value={novoCurso.progresso} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="descricaoResumida" className="form-label">Descrição Resumida</label>
                    <textarea className="form-control" id="descricaoResumida" name="descricaoResumida" value={novoCurso.descricaoResumida} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="descricaoCompleta" className="form-label">Descrição Completa</label>
                    <textarea className="form-control" id="descricaoCompleta" name="descricaoCompleta" value={novoCurso.descricaoCompleta} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cor" className="form-label">Cor</label>
                    <input type="text" className="form-control" id="cor" name="cor" value={novoCurso.cor} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="agrupamento" className="form-label">Agrupamento</label>
                    <input type="text" className="form-control" id="agrupamento" name="agrupamento" value={novoCurso.agrupamento} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="conquistas" className="form-label">Conquistas</label>
                    <input type="text" className="form-control" id="conquistas" name="conquistas" value={novoCurso.conquistas.join(', ')} onChange={handleConquistasChange} />
                </div>
                <button type="submit" className="btn btn-primary">Adicionar Curso</button>
            </div>
        </form>
    );
};

export default CursoForm;
